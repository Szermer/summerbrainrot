import { test, expect } from '@playwright/test'

test.describe('Youth Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to youth dashboard
    await page.goto('/youth-dashboard')
  })

  test('displays all main dashboard sections', async ({ page }) => {
    // Check main heading
    await expect(page.getByRole('heading', { name: /Your Summer Journey/ })).toBeVisible()
    
    // Check welcome card
    await expect(page.getByText(/Hey Alex!/)).toBeVisible()
    
    // Check quick actions
    await expect(page.getByText('Quick Actions ⚡')).toBeVisible()
    await expect(page.getByRole('button', { name: /Start New Project/ })).toBeVisible()
    
    // Check other sections
    await expect(page.getByText('Your Skills 🎯')).toBeVisible()
    await expect(page.getByText('Daily Challenge 🎯')).toBeVisible()
    await expect(page.getByText('Achievements 🏆')).toBeVisible()
    await expect(page.getByText('Upcoming Activities 📅')).toBeVisible()
    await expect(page.getByText('Team Chat 💬')).toBeVisible()
    await expect(page.getByText('Leaderboard 🏅')).toBeVisible()
  })

  test('quick actions are interactive', async ({ page }) => {
    const startProjectButton = page.getByRole('button', { name: /Start New Project/ })
    await expect(startProjectButton).toBeVisible()
    await startProjectButton.click()
    // In a real app, this would navigate or open a modal
  })

  test('displays skill progress', async ({ page }) => {
    await expect(page.getByText('Web Development')).toBeVisible()
    await expect(page.getByText('Level 3')).toBeVisible()
    
    // Check for locked skill
    await expect(page.getByText('Advanced Coding')).toBeVisible()
    const lockedSkill = page.locator('text=Advanced Coding').locator('..')
    await expect(lockedSkill.locator('svg')).toBeVisible() // Lock icon
  })

  test('shows daily challenge details', async ({ page }) => {
    await expect(page.getByText('Build a Color Palette Generator')).toBeVisible()
    await expect(page.getByText('+150 XP')).toBeVisible()
    await expect(page.getByText('3 hours')).toBeVisible()
    await expect(page.getByRole('button', { name: /Continue Challenge/ })).toBeVisible()
  })

  test('displays achievement badges', async ({ page }) => {
    await expect(page.getByText('3/6')).toBeVisible() // Badge count
    await expect(page.getByText('First Project')).toBeVisible()
    await expect(page.getByText('Team Player')).toBeVisible()
  })

  test('team chat is functional', async ({ page }) => {
    const chatInput = page.getByPlaceholder('Type a message...')
    await expect(chatInput).toBeVisible()
    
    // Test typing in chat
    await chatInput.fill('Hello team!')
    await expect(chatInput).toHaveValue('Hello team!')
  })

  test('leaderboard shows rankings', async ({ page }) => {
    await expect(page.getByText('Emma Wilson')).toBeVisible()
    await expect(page.getByText('2,450')).toBeVisible() // XP with comma
    await expect(page.getByText('You')).toBeVisible() // Current user indicator
  })

  test('responsive layout on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check that grid layouts stack properly
    const welcomeCard = page.locator('text=Hey Alex!').locator('../..')
    await expect(welcomeCard).toBeVisible()
    
    // Quick actions should still be visible
    await expect(page.getByText('Quick Actions ⚡')).toBeVisible()
  })
})