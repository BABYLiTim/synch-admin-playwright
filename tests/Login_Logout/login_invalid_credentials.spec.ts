// Import Playwright module
import { test, expect } from '@playwright/test'

// Write a test
test('Login with invalid credentials', async ({ page }) => {
    await test.step('Navigate to the login page', async () => {
        await page.goto('/'); // This will use baseURL from config
        await page.getByText('Login').click();
    });

    await test.step('Enter login credentials', async () => {
        await page.getByRole('textbox', { name: 'Username' }).fill('viktor_admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('12345qW!!'); // Intentionally incorrect password
        await page.getByRole('button', { name: 'Login' }).click();
    });

    await test.step('Validate unsuccessful login', async () => {
        await expect(page.getByText('Wrong credentials- please check your username, password, and region selection.')).toBeVisible();
    });
});