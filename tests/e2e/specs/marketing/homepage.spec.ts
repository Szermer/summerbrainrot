import { test, expect } from '../../fixtures/test-fixtures';

/**
 * MARKETING HOMEPAGE E2E TESTS
 * @ai-context Tests for the public marketing site homepage
 * @pattern Tests navigation, content, and conversion flows
 */
test.describe('Marketing Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section with CTA', async ({ page }) => {
    // Check hero content
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Summer Brain Rot/i);
    
    // Check CTA buttons
    await expect(page.getByRole('link', { name: /apply now/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /learn more/i })).toBeVisible();
  });

  test('navigation menu works correctly', async ({ page }) => {
    // Test navigation links
    const navLinks = [
      { name: 'About', path: '/about' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' },
    ];

    for (const link of navLinks) {
      await page.getByRole('link', { name: link.name }).click();
      await expect(page).toHaveURL(link.path);
      await page.goBack();
    }
  });

  test('displays feature sections', async ({ page }) => {
    // Scroll to features
    await page.getByText(/Learn by Building/i).scrollIntoViewIfNeeded();
    await expect(page.getByText(/Learn by Building/i)).toBeVisible();

    // Check feature tabs or cards
    const features = [
      'Full-Stack Development',
      'Business Operations',
      'Team Collaboration',
      'Real-World Experience',
    ];

    for (const feature of features) {
      await expect(page.getByText(feature)).toBeVisible();
    }
  });

  test('testimonials carousel works', async ({ page }) => {
    // Find testimonials section
    const testimonialsSection = page.locator('section').filter({ hasText: /testimonials|success stories/i });
    await testimonialsSection.scrollIntoViewIfNeeded();

    // Check if carousel controls exist
    const nextButton = testimonialsSection.getByRole('button', { name: /next/i });
    const prevButton = testimonialsSection.getByRole('button', { name: /previous/i });

    if (await nextButton.isVisible()) {
      // Test carousel navigation
      await nextButton.click();
      await page.waitForTimeout(500); // Wait for animation
      await prevButton.click();
    }
  });

  test('footer contains important links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer links
    await expect(page.getByRole('link', { name: /privacy policy/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /terms of service/i })).toBeVisible();
    
    // Check social media links if present
    const socialLinks = ['Twitter', 'LinkedIn', 'GitHub'];
    for (const social of socialLinks) {
      const link = page.getByRole('link', { name: new RegExp(social, 'i') });
      if (await link.isVisible()) {
        await expect(link).toHaveAttribute('target', '_blank');
      }
    }
  });

  test('dark mode toggle works', async ({ page }) => {
    // Get initial theme
    const htmlElement = page.locator('html');
    const initialTheme = await htmlElement.getAttribute('class');

    // Toggle theme
    await page.getByRole('button', { name: /toggle theme|dark mode|light mode/i }).click();

    // Check theme changed
    const newTheme = await htmlElement.getAttribute('class');
    expect(newTheme).not.toBe(initialTheme);
  });

  test('responsive design works on mobile', async ({ page }) => {
    // Switch to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile menu
    await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();

    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click();

    // Check navigation items in mobile menu
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /pricing/i })).toBeVisible();
  });

  test('application CTA leads to signup', async ({ page }) => {
    // Click main CTA
    await page.getByRole('link', { name: /apply now|start application/i }).first().click();

    // Should navigate to signup or application page
    await expect(page).toHaveURL(/signup|application|apply/);
  });

  test('loads performantly', async ({ page }) => {
    // Get performance metrics
    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      };
    });

    // Check performance thresholds
    expect(metrics.domContentLoaded).toBeLessThan(3000); // 3 seconds
    expect(metrics.loadComplete).toBeLessThan(5000); // 5 seconds
  });

  test('has proper meta tags for SEO', async ({ page }) => {
    // Check essential meta tags
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /.+/);
  });
});