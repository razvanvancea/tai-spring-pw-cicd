import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsListPage {
  readonly page: Page;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator('#prooood');
  }
}
