import { test, expect } from '@playwright/test';
import { getTestLoginPageLocators, getSuccessfulLoginPageLocators } from './locators';

export class testLoginPage {
    async verifyTestLoginPage(page: any) {
        await expect(getTestLoginPageLocators(page).headerLabel()).toBeVisible()
        await expect(getTestLoginPageLocators(page).descriptionLabel()).toBeVisible()
        await expect(getTestLoginPageLocators(page).instructions1Label()).toBeVisible()
        await expect(getTestLoginPageLocators(page).instructions2Label()).toBeVisible()
        await expect(getTestLoginPageLocators(page).instructions3Label()).toBeVisible()
        await expect(getTestLoginPageLocators(page).usernameLabel()).toBeVisible()
        await expect(getTestLoginPageLocators(page).usernameInput()).toBeVisible()
        await expect(getTestLoginPageLocators(page).passwordLabel()).toBeVisible()
        await expect(getTestLoginPageLocators(page).passwordInput()).toBeVisible()
        await expect(getTestLoginPageLocators(page).submitButton()).toBeVisible()
    }

    async inputLoginCredentials(page: any, username: any, password: any) {
        await getTestLoginPageLocators(page).usernameInput().fill(username)
        await expect(getTestLoginPageLocators(page).usernameInput()).toHaveValue(username)
        await getTestLoginPageLocators(page).passwordInput().fill(password)
        await expect(getTestLoginPageLocators(page).passwordInput()).toHaveValue(password)
    }

    async clickLoginButton(page: any) {
        await getTestLoginPageLocators(page).submitButton().click()
    }
    
    async verifySuccessfulLoginPage(page: any) {
        await expect(getSuccessfulLoginPageLocators(page).headerLabel()).toBeVisible()
        await expect(getSuccessfulLoginPageLocators(page).descriptionLabel()).toBeVisible()
        await expect(getSuccessfulLoginPageLocators(page).logoutButton()).toBeVisible()
    }

    async clickLogoutButton(page: any) {
        await getSuccessfulLoginPageLocators(page).logoutButton().click()
    }
}