import { expect, type Locator, type Page } from '@playwright/test';

export class NavBarPage {
  readonly page: Page;
  readonly logoutBtn: Locator;
  readonly taiLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutBtn = page.getByRole('link', { name: 'Log Out' });
    this.taiLogo = page.getByRole('link', { name: 'TAI TAI Shop' });
  }
}
