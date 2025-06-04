import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToDashboard() {
    await this.page.goto('/dashboard');
  }

  async getWelcomeMessage() {
    return await this.page.textContent('h1');
  }
}