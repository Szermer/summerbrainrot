import { test as base } from '@playwright/test';
import { AuthPage } from '../page-objects/AuthPage';
import { DashboardPage } from '../page-objects/DashboardPage';
import { MarketingPage } from '../page-objects/MarketingPage';

/**
 * CUSTOM TEST FIXTURES
 * @ai-context Extends Playwright test with custom fixtures
 * @pattern Provides reusable page objects and test data
 */

type TestFixtures = {
  authPage: AuthPage;
  dashboardPage: DashboardPage;
  marketingPage: MarketingPage;
  testUser: {
    email: string;
    password: string;
    name: string;
  };
  authenticatedPage: void;
};

export const test = base.extend<TestFixtures>({
  // Page object fixtures
  authPage: async ({ page }, use) => {
    const authPage = new AuthPage(page);
    await use(authPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  marketingPage: async ({ page }, use) => {
    const marketingPage = new MarketingPage(page);
    await use(marketingPage);
  },

  // Test data fixtures
  testUser: async ({}, use) => {
    // Generate unique test user for each test
    const timestamp = Date.now();
    await use({
      email: `test.user.${timestamp}@summerbrainrot.test`,
      password: 'TestPassword123!',
      name: `Test User ${timestamp}`,
    });
  },

  // Authenticated state fixture
  authenticatedPage: [async ({ page, authPage }, use) => {
    // Set up authentication before test
    if (process.env.USE_AUTH_STATE === 'true') {
      // Use saved auth state
      await page.context().storageState({ path: 'tests/e2e/.auth/user.json' });
    } else {
      // Perform fresh login
      await authPage.goto('/auth');
      await authPage.signInWithTestUser({
        email: 'test@summerbrainrot.test',
        password: 'TestPassword123!',
      });
    }

    await use();

    // Clean up after test if needed
  }, { auto: true }], // Auto-use this fixture
});

export { expect } from '@playwright/test';

// Re-export everything from base
export type { Page, Locator, BrowserContext } from '@playwright/test';