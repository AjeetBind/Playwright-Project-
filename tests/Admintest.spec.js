import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import AdminPage from '../pages/Adminpage.js';
import JsonReader from '../reader/JsonReader.js';

const loginData = JsonReader.read('./test-data/loginData.json');
const adminData = JsonReader.read('./test-data/adminpageData.json');

let loginPage;
let adminPage;

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    adminPage = new AdminPage(page);

    await loginPage.openURL('/web/index.php/auth/login');

    await loginPage.validLogin(
        loginData.validLogin.username,
        loginData.validLogin.password
    );

    await loginPage.verifyDashboard();
});


test('TC_001 Verify admin page is loaded successfully', async () => {
    await adminPage.verifyAdminpageLoadedSuccessfully();
    
});

test('TC_002 Verify search functionality on admin page', async () => {

         await  adminPage.verifyEmployeeDisableRecord(adminData.disabledUser.username, 
            adminData.disabledUser.role, adminData.disabledUser.employeeName,
             adminData.disabledUser.status  );

});