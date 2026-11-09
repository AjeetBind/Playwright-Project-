import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import JsonReader from '../reader/JsonReader.js';

const loginData = JsonReader.read( './test-data/loginData.json');




    test('Test_001 Verify valid credentials user login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.openURL( '/web/index.php/auth/login' );
        await loginPage.verifyLoginPage();
        await loginPage.validLogin(
            loginData.validLogin.username,
            loginData.validLogin.password
        );

        await loginPage.verifyDashboard();
    });

