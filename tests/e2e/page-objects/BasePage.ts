import { Page, Locator } from '@playwright/test';

/**
 * BASE PAGE OBJECT
 * @ai-context Foundation class for all page objects
 * @pattern Page Object Model with common utilities
 */
export class BasePage {
  constructor(protected page: Page) {}

  // Common navigation methods
  async goto(path: string = '') {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // Common element interactions
  async clickElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fillInput(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async selectOption(locator: Locator, value: string) {
    await locator.selectOption(value);
  }

  // shadcn/ui specific helpers
  async clickButton(text: string) {
    await this.page.getByRole('button', { name: text }).click();
  }

  async fillFormField(label: string, value: string) {
    const field = this.page.getByLabel(label);
    await field.fill(value);
  }

  // Command palette helper
  async openCommandPalette() {
    await this.page.keyboard.press('Meta+k');
    await this.page.waitForSelector('[role="dialog"]');
  }

  async searchInCommandPalette(query: string) {
    await this.openCommandPalette();
    await this.page.getByPlaceholder('Search...').fill(query);
  }

  // Wait helpers
  async waitForToast(message: string) {
    await this.page.getByRole('alert').filter({ hasText: message }).waitFor();
  }

  async waitForURL(url: string | RegExp) {
    await this.page.waitForURL(url);
  }

  // Common assertions
  async expectToastMessage(message: string) {
    await this.page.getByRole('alert').filter({ hasText: message }).waitFor();
  }

  async expectPageTitle(title: string) {
    await this.page.waitForFunction(
      (expectedTitle) => document.title === expectedTitle,
      title
    );
  }

  // Table helpers for TanStack tables
  async getTableRowCount(): Promise<number> {
    const rows = await this.page.locator('tbody tr').count();
    return rows;
  }

  async selectTableRow(rowIndex: number) {
    await this.page.locator(`tbody tr:nth-child(${rowIndex}) input[type="checkbox"]`).check();
  }

  async sortTableBy(columnName: string) {
    await this.page.getByRole('columnheader', { name: columnName }).click();
  }

  // Screenshot helpers for visual regression
  async takeScreenshot(name: string) {
    await this.page.screenshot({ 
      path: `test-results/screenshots/${name}.png`,
      fullPage: true 
    });
  }

  // Performance metrics
  async getWebVitals() {
    return await this.page.evaluate(() => {
      return new Promise((resolve) => {
        let metrics = {
          lcp: 0,
          fid: 0,
          cls: 0,
          fcp: 0,
          ttfb: 0,
        };

        // First Contentful Paint
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) metrics.fcp = fcp.startTime;

        // Time to First Byte
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0) {
          metrics.ttfb = navEntries[0].responseStart - navEntries[0].requestStart;
        }

        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metrics.lcp = lastEntry.startTime;
          resolve(metrics);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Resolve after timeout if LCP doesn't fire
        setTimeout(() => resolve(metrics), 5000);
      });
    });
  }

  // Accessibility helpers
  async checkA11y() {
    // This is a placeholder - integrate with axe-core or similar
    const violations = await this.page.evaluate(() => {
      // Basic checks
      const images = Array.from(document.querySelectorAll('img'));
      const missingAlt = images.filter(img => !img.alt);
      
      const buttons = Array.from(document.querySelectorAll('button'));
      const emptyButtons = buttons.filter(btn => !btn.textContent?.trim() && !btn.getAttribute('aria-label'));

      return {
        missingAltText: missingAlt.length,
        emptyButtons: emptyButtons.length,
      };
    });

    return violations;
  }

  // Dark mode helper
  async toggleDarkMode() {
    await this.page.getByRole('button', { name: /toggle theme/i }).click();
  }

  // Mobile viewport helper
  async switchToMobileView() {
    await this.page.setViewportSize({ width: 375, height: 667 });
  }

  async switchToDesktopView() {
    await this.page.setViewportSize({ width: 1280, height: 720 });
  }
}