import { test, expect } from '@playwright/test';

test('T001: Test Login (Simple Script)', async ({ page }) => {
  //Open browser & access url
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  //Verify locators on practice-test-login page
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
  await expect(page.getByText('This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.')).toBeVisible();
  await expect(page.getByText('Use next credentials to execute Login:')).toBeVisible();
  await expect(page.getByText('Username: student')).toBeVisible();
  await expect(page.getByText('Password: Password123')).toBeVisible();
  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.locator('id=username')).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.locator('id=password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();

  //Input username & password then submit form
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await expect(page.getByLabel('Username')).toHaveValue('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await expect(page.getByLabel('Password')).toHaveValue('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  //Verify if login is successful
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

  //Logout
  await page.getByRole('link', { name: 'Log out' }).click()
  
  //Verify if the user is redirected back to the practice-test-login page
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();

  //Close browser
  await page.close();
});