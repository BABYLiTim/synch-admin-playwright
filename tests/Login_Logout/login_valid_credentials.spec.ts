// Import playwright modele
import { test, expect } from '@playwright/test'

// Write a test
test('Login with valid credentials', async ({ page }) => {
    await test.step('Navigate to the login page', async () => {
        await page.goto('https://test-admin.widebridgecloud.com/');
        await page.getByText('Login').click();
    });

    await test.step('Enter login credentials', async () => {
        await page.getByRole('textbox', {name: 'Username'}).fill('viktor_admin');
        await page.getByRole('textbox', {name: 'Password'}).fill('12345qW!');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    await test.step('Validate successful login', async () => {
    // Validate web page title
    await expect(page).toHaveURL('https://test-admin.widebridgecloud.com/#/org/orgxnwj69/users');
    });
});