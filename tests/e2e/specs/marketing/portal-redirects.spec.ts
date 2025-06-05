import { test, expect } from '@playwright/test';

const MARKETING_URL = 'https://summerbrainrot.com';
const PORTAL_URL = 'https://summerbrainrot--summerbrainrot.us-central1.hosted.app';

test.describe('Marketing Site Portal Redirects', () => {
  test('should redirect /login to portal login page', async ({ page }) => {
    // Navigate to marketing login page
    await page.goto(`${MARKETING_URL}/login`);
    
    // Should redirect to portal login
    await expect(page).toHaveURL(`${PORTAL_URL}/login`);
    
    // Verify we're on the portal login page
    await expect(page.locator('h1')).toContainText('Sign in to your account');
  });

  test('should redirect /signup to portal registration page', async ({ page }) => {
    // Navigate to marketing signup page
    await page.goto(`${MARKETING_URL}/signup`);
    
    // Should redirect to portal registration
    await expect(page).toHaveURL(`${PORTAL_URL}/register`);
    
    // Verify we're on the portal registration page
    await expect(page.locator('h1')).toContainText('Create an account');
  });

  test('should redirect /apply to portal registration page', async ({ page }) => {
    // Navigate to marketing apply page
    await page.goto(`${MARKETING_URL}/apply`);
    
    // Should redirect to portal registration
    await expect(page).toHaveURL(`${PORTAL_URL}/register`);
    
    // Verify we're on the portal registration page
    await expect(page.locator('h1')).toContainText('Create an account');
  });

  test('navbar login button should lead to portal', async ({ page }) => {
    // Go to marketing homepage
    await page.goto(MARKETING_URL);
    
    // Click the login button in navbar
    await page.click('a[href="/login"]');
    
    // Should end up at portal login
    await expect(page).toHaveURL(`${PORTAL_URL}/login`);
  });

  test('marketing site should remain accessible', async ({ page }) => {
    // Navigate to marketing homepage
    await page.goto(MARKETING_URL);
    
    // Should stay on marketing site
    await expect(page).toHaveURL(MARKETING_URL + '/');
    
    // Verify marketing content is visible
    await expect(page.locator('h1')).toContainText('Transform Your Summer Brain Rot');
  });
});

test.describe('Portal Authentication Flow', () => {
  test('should be able to navigate from marketing to portal login', async ({ page }) => {
    // Start at marketing site
    await page.goto(MARKETING_URL);
    
    // Click login
    await page.click('a[href="/login"]');
    
    // Should be at portal login
    await expect(page).toHaveURL(`${PORTAL_URL}/login`);
    
    // Login form should be visible
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should show social login options on portal', async ({ page }) => {
    // Navigate directly to portal login
    await page.goto(`${PORTAL_URL}/login`);
    
    // Check for social login buttons
    await expect(page.locator('button:has-text("Continue with Google")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with GitHub")')).toBeVisible();
    await expect(page.locator('button:has-text("Continue with Facebook")')).toBeVisible();
  });
});