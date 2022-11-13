// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/React Redux Store Demo/);

  const homeDecor = page.locator('text=Home Decor');

  const item1 = page.locator('text=Item 1');
  await expect(item1).toBeVisible();

  await homeDecor.click();
  
  const item3 = page.locator('text=Item 3');
  await expect(item1).not.toBeVisible();
  await expect(item3).toBeVisible();
});
