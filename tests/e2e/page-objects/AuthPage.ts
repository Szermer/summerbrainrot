import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * AUTH PAGE OBJECT
 * @ai-context Page object for authentication flows
 * @pattern Encapsulates auth-related interactions
 */
export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation
  async gotoAuthPage() {
    await this.goto('/auth');
  }

  async gotoLogin() {
    await this.goto('/login');
  }

  async gotoSignup() {
    await this.goto('/signup');
  }

  async gotoForgotPassword() {
    await this.goto('/forgot-password');
  }

  // Sign in methods
  async signInWithGoogle() {
    // Mock Google OAuth flow for testing
    await this.page.getByRole('button', { name: /sign in with google/i }).click();
    
    // In real tests, you'd handle the OAuth popup
    // For now, we'll mock the response
    if (process.env.MOCK_AUTH === 'true') {
      await this.page.evaluate(() => {
        // Mock successful auth
        window.localStorage.setItem('auth-token', 'mock-token');
        window.localStorage.setItem('user', JSON.stringify({
          uid: 'test-user-id',
          email: 'test@summerbrainrot.test',
          displayName: 'Test User',
        }));
      });
      await this.page.reload();
    }
  }

  async signInWithEmail(email: string, password: string) {
    await this.fillFormField('Email', email);
    await this.fillFormField('Password', password);
    await this.clickButton('Sign In');
  }

  async signInWithTestUser(credentials: { email: string; password: string }) {
    await this.signInWithEmail(credentials.email, credentials.password);
  }

  // Sign up methods
  async signUpWithEmail(email: string, password: string, name: string) {
    await this.fillFormField('Name', name);
    await this.fillFormField('Email', email);
    await this.fillFormField('Password', password);
    await this.fillFormField('Confirm Password', password);
    await this.clickButton('Sign Up');
  }

  // Sign out
  async signOut() {
    // Try multiple selectors for sign out
    const signOutButton = this.page.getByRole('button', { name: /sign out|logout/i })
      .or(this.page.getByText(/sign out|logout/i));
    
    await signOutButton.click();
  }

  // Password reset
  async requestPasswordReset(email: string) {
    await this.gotoForgotPassword();
    await this.fillFormField('Email', email);
    await this.clickButton('Send Reset Email');
  }

  // State checks
  async expectSignedIn() {
    // Check for common signed-in indicators
    await this.page.waitForSelector('[data-testid="user-menu"]', { timeout: 5000 });
  }

  async expectSignedOut() {
    // Check for sign in button
    await this.page.waitForSelector('button:has-text("Sign In")', { timeout: 5000 });
  }

  async isSignedIn(): Promise<boolean> {
    try {
      await this.page.waitForSelector('[data-testid="user-menu"]', { timeout: 1000 });
      return true;
    } catch {
      return false;
    }
  }

  // User info helpers
  async getUserDisplayName(): Promise<string | null> {
    const userMenu = this.page.locator('[data-testid="user-menu"]');
    if (await userMenu.isVisible()) {
      return await userMenu.textContent();
    }
    return null;
  }

  async getUserEmail(): Promise<string | null> {
    // This might be in a dropdown or profile section
    const emailElement = this.page.locator('[data-testid="user-email"]');
    if (await emailElement.isVisible()) {
      return await emailElement.textContent();
    }
    return null;
  }

  // Tenant helpers (for multi-tenant setup)
  async getTenantName(): Promise<string | null> {
    const tenantElement = this.page.locator('[data-testid="tenant-name"]');
    if (await tenantElement.isVisible()) {
      return await tenantElement.textContent();
    }
    return null;
  }

  async switchTenant(tenantName: string) {
    await this.page.getByRole('button', { name: /switch organization/i }).click();
    await this.page.getByRole('menuitem', { name: tenantName }).click();
  }

  // Error handling
  async expectAuthError(message: string) {
    await this.page.getByText(message).waitFor({ state: 'visible' });
  }

  // Wait helpers
  async waitForAuthComplete() {
    // Wait for auth redirect or dashboard load
    await Promise.race([
      this.page.waitForURL(/dashboard|portal/),
      this.page.waitForSelector('[data-testid="user-menu"]'),
    ]);
  }

  // Form validation helpers
  async expectFieldError(fieldName: string, errorMessage: string) {
    const field = this.page.getByLabel(fieldName);
    const fieldContainer = field.locator('..');
    await fieldContainer.getByText(errorMessage).waitFor({ state: 'visible' });
  }

  async clearAuthState() {
    await this.page.evaluate(() => {
      window.localStorage.clear();
      window.sessionStorage.clear();
    });
  }
}