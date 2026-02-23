import { test, expect } from '@playwright/test';

test('Demo testing', async ({ page }) => {
  // 1. Điều hướng trình duyệt đến địa chỉ cụ thể
  await page.goto('https://playwright.dev/');
  // 2. Khởi tạo một "Locator thông minh"
  const title = page.locator('.navbar__inner .navbar__title');
  // 3. Thực hiện assertion (kiểm chứng)
  await expect(title).toHaveText('Playwright');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});