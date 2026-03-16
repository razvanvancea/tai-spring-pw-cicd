import { NavBarPage } from './pages/global-navbar.page';
import { LoginPage } from './pages/login.page';
import { ProductsListPage } from './pages/products-list.page';
import { test as base, expect } from '@playwright/test';

interface PageFixtures {
  loginPage: LoginPage;
  navbarPage: NavBarPage;
  productsListPage: ProductsListPage;
}

const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navbarPage: async ({ page }, use) => {
    await use(new NavBarPage(page));
  },
  productsListPage: async ({ page }, use) => {
    await use(new ProductsListPage(page));
  },
});

export { test, expect };
