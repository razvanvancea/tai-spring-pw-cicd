import { test, expect } from '../pages';

test.describe('User auth test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tai-shop.razvanvancea.ro/');
  });

  // test('login test', async ({ page }) => {
  //   await page.getByRole('textbox', { name: 'Email Address' }).fill('admin@admin.com');
  //   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  //   await page.getByRole('button', { name: 'Sign In' }).click();
  //   await expect(page.locator('#logout')).toContainText('Log Out');
  //   await expect(page.locator('#prooood')).toContainText('PROCEED TO CHECKOUT');
  //   await expect(page.locator('#content')).toContainText('TAI Shop');
  //   await expect(page.locator('#home')).toContainText('Contact');
  // });

  test('user should be able to login @smoke', async ({
    page,
    loginPage,
    productsListPage,
    navbarPage,
  }) => {
    await loginPage.login('admin@admin.com', 'admin123');
    await expect(productsListPage.checkoutBtn).toContainText('PROCEED TO CHECKOUT');
    await expect(navbarPage.taiLogo).toBeVisible();
  });

  test('user should not be able to login with invalid password', async ({ page, loginPage }) => {
    await loginPage.emailAddress.fill('admin@admin.com');
    await loginPage.psw.fill('wrongpassword');
    await loginPage.signInBtn.click();
    await expect(page.getByRole('alert')).toContainText(
      "Bad credentials! Please try again! Make sure that you've registered."
    );
  });
});
