import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

test('Validate invalid input validation message is dispalyed', async ({page}) =>{
    
    const loginPage = new LoginPage(page);
    
    await loginPage.loginPageLink.click();
    page.on('dialog', async(dialog) => {
        expect(dialog.message()).toContain('User does not exist.')
        await dialog.accept();
    });
    await page.locator('#loginusername').fill('invalidUsername');
    await page.locator('#loginpassword').fill('invalidPassword');
    await page.getByRole('button', { name: 'Log in' }).click();
   await expect(page.locator('#loginusername')).toHaveValue('invalidUsername');
    await expect(page.locator('#loginpassword')).toHaveValue('invalidPassword');
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await expect(page.getByLabel('Log in').getByText('Close')).toBeVisible();
    
    
});