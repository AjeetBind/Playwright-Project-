import { test, expect } from '@playwright/test';

test('Test_001 Verify OrangeHRM homepage', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    const usernameField = page.getByLabel('Username');

    await usernameField.fill('Admin');

    const passwordField = page.getByLabel('Password');
    await passwordField.fill('admin123');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();

});