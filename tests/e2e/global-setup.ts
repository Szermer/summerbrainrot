import { chromium, FullConfig } from '@playwright/test';

/**
 * GLOBAL E2E TEST SETUP
 * @ai-context Runs once before all E2E tests
 * @pattern Sets up test environment and authentication state
 */
async function globalSetup(config: FullConfig) {
  // Create directories for test artifacts
  const fs = require('fs');
  const path = require('path');
  
  const directories = [
    'test-results',
    'test-results/screenshots',
    'test-reports',
    'test-reports/e2e',
  ];
  
  directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Set up authenticated state for tests that need it
  if (process.env.E2E_AUTH_SETUP === 'true') {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    try {
      // Navigate to auth page
      await page.goto(`${config.projects[0].use.baseURL}/auth`);
      
      // Perform authentication
      // This is a placeholder - implement actual auth flow
      // For Firebase Auth, you might use a test user or mock auth
      
      // Save authenticated state
      await page.context().storageState({ 
        path: 'tests/e2e/.auth/user.json' 
      });
    } catch (error) {
      console.error('Authentication setup failed:', error);
    } finally {
      await browser.close();
    }
  }

  // Set up environment variables for tests
  process.env.PLAYWRIGHT_TEST_BASE_URL = config.projects[0].use.baseURL || 'http://localhost:3000';
  
  console.log('✅ Global setup completed');
}

export default globalSetup;