import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MarketingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomepage() {
    await this.page.goto('/');
  }

  async getHeroTitle() {
    return await this.page.textContent('h1');
  }

  async clickGetStarted() {
    await this.page.click('text=Get Started');
  }
}