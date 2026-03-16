import { expect, type Locator, type Page } from '@playwright/test';
import { NavBarPage } from './global-navbar.page';

export class LoginPage {
  readonly page: Page;
  readonly emailAddress: Locator;
  readonly psw: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailAddress = page.getByRole('textbox', { name: 'Email Address' });
    this.psw = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });
  }

  async login(email: string, password: string) {
    const navbarPage = new NavBarPage(this.page);

    await this.emailAddress.fill(email);
    await this.psw.fill(password);
    await this.signInBtn.click();
    await expect(navbarPage.logoutBtn).toContainText('Log Out');
    await expect(navbarPage.logoutBtn).toBeVisible();
  }
}
