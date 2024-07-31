import { test, expect } from '@playwright/test';
import { testLoginPage } from './helpers/test-login-page-objects';

test('T001: Test Login (Page Object Model)', async ({ page }) => {
  const loginPage = new testLoginPage()

  //Open browser & access base url
  await page.goto('');

  //Verify locators on practicetestlogin page
  await loginPage.verifyTestLoginPage(page)

  //Input credentials then submit form
  await loginPage.inputLoginCredentials(page, process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
  await loginPage.clickLoginButton(page)

  //Verify if login is successful
  await loginPage.verifySuccessfulLoginPage(page)

  //Logout
  await loginPage.clickLogoutButton(page)

  //Verify if the user is redirected back to the practice-test-login page
  await loginPage.verifyTestLoginPage(page)

  //Close browser
  await page.close();
});