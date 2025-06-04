import { defineConfig, devices } from '@playwright/test';

/**
 * PLAYWRIGHT E2E TESTING CONFIGURATION
 * @ai-context Main configuration for Playwright E2E tests across marketing and portal apps
 * @pattern Cross-browser testing with CI/CD optimization
 * @usage Run with: npm run test:e2e
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI for stability */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter configuration */
  reporter: [
    ['html', { outputFolder: 'test-reports/e2e' }],
    ['junit', { outputFile: 'test-results/e2e-results.xml' }],
    ['list'],
  ],
  /* Shared settings for all the projects below */
  use: {
    /* Base URLs for different apps */
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Video on failure */
    video: 'retain-on-failure',

    /* AI-friendly attributes for test selectors */
    testIdAttribute: 'data-testid',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'marketing-chromium',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:3000',
      },
      testMatch: '**/marketing/**/*.spec.ts',
    },
    {
      name: 'portal-chromium',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:3001',
      },
      testMatch: '**/portal/**/*.spec.ts',
    },
    {
      name: 'marketing-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'http://localhost:3000',
      },
      testMatch: '**/marketing/**/*.spec.ts',
    },
    {
      name: 'portal-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'http://localhost:3001',
      },
      testMatch: '**/portal/**/*.spec.ts',
    },
    {
      name: 'marketing-webkit',
      use: { 
        ...devices['Desktop Safari'],
        baseURL: 'http://localhost:3000',
      },
      testMatch: '**/marketing/**/*.spec.ts',
    },
    {
      name: 'portal-webkit',
      use: { 
        ...devices['Desktop Safari'],
        baseURL: 'http://localhost:3001',
      },
      testMatch: '**/portal/**/*.spec.ts',
    },

    /* Test against mobile viewports */
    {
      name: 'marketing-mobile',
      use: { 
        ...devices['iPhone 13'],
        baseURL: 'http://localhost:3000',
      },
      testMatch: '**/marketing/**/*.spec.ts',
    },
    {
      name: 'portal-mobile',
      use: { 
        ...devices['iPhone 13'],
        baseURL: 'http://localhost:3001',
      },
      testMatch: '**/portal/**/*.spec.ts',
    },
  ],

  /* Run your local dev servers before starting the tests */
  webServer: process.env.CI ? undefined : [
    {
      command: 'npm run dev:marketing',
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
    {
      command: 'npm run dev:portal',
      url: 'http://localhost:3001',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
  ],

  /* Global timeout */
  timeout: 30 * 1000,

  /* Global setup */
  globalSetup: require.resolve('./tests/e2e/global-setup'),

  /* Output folder for test artifacts */
  outputDir: 'test-results/',
});