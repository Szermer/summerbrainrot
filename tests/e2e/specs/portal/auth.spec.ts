import { test, expect } from '../../fixtures/test-fixtures';

/**
 * PORTAL AUTHENTICATION E2E TESTS
 * @ai-context End-to-end tests for portal authentication flows
 * @pattern Tests login, logout, and session management
 */
test.describe('Portal Authentication', () => {
  test.use({ 
    // Skip auto-authentication for these tests
    authenticatedPage: undefined 
  });

  test('redirects to login when not authenticated', async ({ page }) => {
    // Try to access protected route
    await page.goto('/dashboard');

    // Should redirect to auth
    await expect(page).toHaveURL(/login|auth/);
  });

  test('login with email and password', async ({ authPage, page, testUser }) => {
    await authPage.gotoLogin();

    // Fill login form
    await authPage.signInWithEmail(testUser.email, testUser.password);

    // Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    
    // Should show user info
    await authPage.expectSignedIn();
  });

  test('login with Google', async ({ authPage, page }) => {
    await authPage.gotoLogin();

    // Click Google sign in
    await authPage.signInWithGoogle();

    // Should redirect to dashboard
    await authPage.waitForAuthComplete();
    await expect(page).toHaveURL('/dashboard');
  });

  test('logout works correctly', async ({ authPage, page }) => {
    // First login
    await authPage.gotoLogin();
    await authPage.signInWithGoogle();
    await authPage.expectSignedIn();

    // Then logout
    await authPage.signOut();

    // Should redirect to login
    await expect(page).toHaveURL(/login|auth/);
    await authPage.expectSignedOut();
  });

  test('signup creates new account', async ({ authPage, page, testUser }) => {
    await authPage.gotoSignup();

    // Fill signup form
    await authPage.signUpWithEmail(
      testUser.email,
      testUser.password,
      testUser.name
    );

    // Should show success message or redirect
    await expect(page).toHaveURL(/dashboard|welcome|verify/);
  });

  test('password reset flow', async ({ authPage, page }) => {
    await authPage.gotoLogin();
    
    // Click forgot password
    await page.getByRole('link', { name: /forgot password/i }).click();

    // Request password reset
    await authPage.requestPasswordReset('test@example.com');

    // Should show success message
    await expect(page.getByText(/check your email/i)).toBeVisible();
  });

  test('validates login form', async ({ authPage, page }) => {
    await authPage.gotoLogin();

    // Try to submit empty form
    await authPage.clickButton('Sign In');

    // Should show validation errors
    await authPage.expectFieldError('Email', 'Email is required');
    await authPage.expectFieldError('Password', 'Password is required');

    // Try invalid email
    await authPage.fillFormField('Email', 'invalid-email');
    await authPage.clickButton('Sign In');
    await authPage.expectFieldError('Email', 'Invalid email address');
  });

  test('persists session across page reloads', async ({ authPage, page }) => {
    // Login
    await authPage.gotoLogin();
    await authPage.signInWithGoogle();
    await authPage.expectSignedIn();

    // Reload page
    await page.reload();
    
    // Should still be logged in
    await authPage.expectSignedIn();
    await expect(page).toHaveURL('/dashboard');
  });

  test('handles authentication errors gracefully', async ({ authPage, page }) => {
    await authPage.gotoLogin();

    // Mock auth failure
    await page.route('**/api/auth/login', route => {
      route.fulfill({
        status: 401,
        body: JSON.stringify({ error: 'Invalid credentials' })
      });
    });

    // Try to login
    await authPage.signInWithEmail('test@example.com', 'wrongpassword');

    // Should show error message
    await authPage.expectAuthError('Invalid credentials');
  });

  test('remembers return URL after login', async ({ authPage, page }) => {
    // Try to access specific protected page
    await page.goto('/tasks/123');

    // Should redirect to login with return URL
    await expect(page).toHaveURL(/login.*returnUrl.*tasks/);

    // Login
    await authPage.signInWithGoogle();

    // Should redirect back to original page
    await expect(page).toHaveURL('/tasks/123');
  });

  test('shows loading state during authentication', async ({ authPage, page }) => {
    await authPage.gotoLogin();

    // Slow down the auth request
    await page.route('**/api/auth/login', async route => {
      await page.waitForTimeout(2000);
      await route.continue();
    });

    // Start login
    const loginPromise = authPage.signInWithEmail('test@example.com', 'password');

    // Check for loading state
    await expect(page.getByRole('button', { name: /signing in|loading/i })).toBeVisible();

    await loginPromise;
  });

  test('multi-tenant organization selection', async ({ authPage, page }) => {
    // Login first
    await authPage.gotoLogin();
    await authPage.signInWithGoogle();

    // Check if tenant selector is visible
    const tenantName = await authPage.getTenantName();
    if (tenantName) {
      // Test switching organizations
      await authPage.switchTenant('Different Organization');
      
      // Verify switch
      const newTenantName = await authPage.getTenantName();
      expect(newTenantName).not.toBe(tenantName);
    }
  });
});