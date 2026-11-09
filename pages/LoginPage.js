import BasePage from '../base/BasePage.js';
import WebUtils from '../utils/WebUtils.js';
import AssertionUtils from '../utils/AssertionUtils.js';

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page);

       
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.dashboard = page.locator("//h6[text()='Dashboard']");
    }


    // Purpose: Verify login page is displayed
    async verifyLoginPage() {
        
        await AssertionUtils.expectVisible( this.username,'Username field');
        await AssertionUtils.expectVisible( this.password,'Password field');
        await AssertionUtils.expectVisible( this.loginButton,'Login button');
    }
    // Purpose: Enter username
    async enterUsername(username) {
        await WebUtils.fill(this.username,username,'Username');
    }

    // Purpose: Enter password
    async enterPassword(password) {
        await WebUtils.fill(this.password, password,'Password' );
    }

    // Purpose: Click login button
    async clickLogin() {
        await WebUtils.click(this.loginButton,'Login button');
    }

    // Purpose: Login with valid username and password
    async validLogin(username, password) {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }


    // Purpose: Verify user successfully reaches dashboard
   async verifyDashboard() {
    await AssertionUtils.expectVisible( this.dashboard,'Dashboard');
}

}