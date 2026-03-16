import { test, expect } from '../pages';

test.describe('User auth test suite', () => {
  test('visual test: user should be able to see the login page design @smoke', async ({ page }) => {
    await page.goto('https://tai-shop.razvanvancea.ro');
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();

    await expect(page).toHaveScreenshot('login-page.png', {
      fullPage: true,
      mask: [page.locator('h2.login-title')],
      maskColor: '#cccccc',
    });
  });
});
