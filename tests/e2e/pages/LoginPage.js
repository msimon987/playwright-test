const {exist} = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.loginPageLink = page.getByRole('link', { name: 'Log in' });
        this.loginModalTitle = page.getByRole('heading', { name: 'Log in' });
        this.usernameInputFieldTitle = page.getByLabel('Log in').getByText('Username:');
        this.usernameInputField = page.locator('#loginusername');
        this.passwordInputFieldTitle = page.getByLabel('Log in').getByText('Password:');
        this.passwordInputField = page.locator('#loginpassword');
        this.topRightLoginCloseBtn = page.getByLabel('Log in').getByLabel('Close');
        this.bottomLoginCloseBtn = page.getByLabel('Log in').getByText('Close');

    };
};