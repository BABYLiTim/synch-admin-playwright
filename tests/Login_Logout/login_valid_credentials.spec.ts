// Import playwright modele
import { test, expect } from '@playwright/test'

// Write a test
test('Login with valid credentials', async ({ page }) => {
    await test.step('Navigate to the login page', async () => {
        await page.goto('/'); // This will use baseURL from config
        await page.getByText('Login').click();
    });

    await test.step('Enter login credentials', async () => {
        await page.getByRole('textbox', {name: 'Username'}).fill('viktor_admin');
        await page.getByRole('textbox', {name: 'Password'}).fill('12345qW!');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    await test.step('Validate successful login', async () => {
        // Use relative URL, Playwright will resolve it with baseURL
        await expect(page).toHaveURL('/#/org/orgxnwj69/users');
    });

    await test.step('Logout', async () => {
        const profileButton = page.locator('a.user-profile.dropdown-toggle');
        await profileButton.click();    
        await page.getByText('Log Out').click();
        await expect(page).toHaveURL('/#/login');
    });
});