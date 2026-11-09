import BasePage from '../base/BasePage.js';
import WebUtils from '../utils/WebUtils.js';
import AssertionUtils from '../utils/AssertionUtils.js';

class  AdminPage{

    constructor(page){

    this.page = page;
    this. adminicon=page.locator("//a[@href='/web/index.php/admin/viewAdminModule']");
    this.systemUsersHeader = page.locator("//h5[text()='System Users']");
    this.pageTitle =page.locator('title');
    this.usernamefield = page.locator( "//label[text()='Username']/following::input[1]");
    this.userroleDropdown = page.locator(
    "//label[text()='User Role']/following-sibling::div//div[contains(@class,'oxd-select-text')]"
);
    this.employeenamefield =page.getByLabel('Employee Name');  
    this.employeenamefield =page.getByLabel('Employee Name'); 
    this.employeeOptions = page.locator('.oxd-autocomplete-option');
    this.noRecordsFound = page.getByText('No Records Found', { exact: true});
   this.Status = page.locator(
    "//label[text()='Status']/following-sibling::div//div[contains(@class,'oxd-select-text')]"
);
    this.SearchButton=page.locator("//button[text()=' Search ']");
    this.ResetButton=page.locator("//button[text()=' Reset ']");

this.tableRows = page.locator("//div[@role='rowgroup']//div[@role='row']");
this.usernameCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][2]");
this.userRoleCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][3]");
this.employeeNameCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][4]");
this.statusCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][5]");
    

    }

    // Purpose: Verify Admin icon is visible and click it   
     async clickOnAdminIcon(){
       await AssertionUtils.expectVisible(this.adminicon, 'Admin icon'); 
       await WebUtils.click(this.adminicon,'Admin icon');      
    }

    // Purpose: Enter username in the username field and verify the value
     async enterUsername(username) {
        await WebUtils.fill(this.usernamefield, username, 'Username field');
        await AssertionUtils.expectValue(this.usernamefield, username, 'Username field');
    }

    // Purpose: Select user role from dropdown and verify selection
     async selectUserRole(role){

        await WebUtils.selectOption(this.userroleDropdown, role, 'User Role dropdown');
        await AssertionUtils.expectSelectedOption(this.userroleDropdown, role, 'User Role dropdown');
    }
  
    // Purpose: Search for an employee by name and select if found
    async searchEmployeeName(employeeName) {
        
    await WebUtils.fill( this.employeenamefield,employeeName,'Employee Name field');
    await this.page.waitForTimeout(1000);

    if (await this.noRecordsFound.isVisible()) {
         console.log(`No Records Found for: ${employeeName}`);
        return false;
    }
    const employee = this.employeeOptions
        .filter({ hasText: employeeName })
        .first();

    if (await employee.isVisible()) {
        await employee.click();
        console.log(`Employee selected: ${employeeName}`);
        return true;
    }
    return false;
}

// Purpose: Select status from dropdown and verify selection
 async selectStatus(status) {
    await WebUtils.selectOption(this.Status, status, 'Status dropdown');
    await AssertionUtils.expectSelectedOption(this.Status, status, 'Status dropdown');
}               
 // Purpose: Click Search button and verify it is visible
    async clickSearchButton(){

     await WebUtils.click(this.SearchButton, 'Search Button');
     await AssertionUtils.expectVisible(this.SearchButton, 'Search Button');
}
// Purpose: Click Reset button and verify it is visible
 async clickResetButton() {
   await WebUtils.click(this.ResetButton, 'Reset Button');
    await AssertionUtils.expectVisible(this.ResetButton, 'Reset Button');
}   

// Purpose: Verify System Users header is displayed
    async verifySystemUsersHeader() {
        await AssertionUtils.expectVisible(this.systemUsersHeader, 'System Users Header');
    }   
    // Purpose: Verify page title matches expected title
    async verifyPageTitle(expectedTitle) {
        const actualTitle = await this.pageTitle.textContent();
        await AssertionUtils.expectEqual(actualTitle, expectedTitle, 'Page Title');
    }  

// Purpose: Verify page is loaded by checking header and title
           async verifypageloadedsuccessfully(expectedTitle) {
            await this.verifySystemUsersHeader();
            await this.verifyPageTitle(expectedTitle);

           }

   async verifyStatusRecordCount(status) {
    const actualCount = await this.tableRows.count();
    console.log(`${status} records displayed: ${actualCount}`);
    if (actualCount === 0) {
        throw new Error(`No ${status} records found in the table`);
    }
    console.log(`Successfully displayed ${actualCount} ${status} records`);
}
    


async verifyEmployeeRecord(username, role, employeeName, status) {
    const recordCount = await this.tableRows.count();
    await AssertionUtils.expectEqual( recordCount, 1,'Filtered Record Count');
    const actualUsername = (await this.usernameCells.first().textContent()).trim();
    const actualRole = (await this.userRoleCells.first().textContent()).trim();
    const actualEmployeeName = (await this.employeeNameCells.first().textContent()).trim();
    const actualStatus =(await this.statusCells.first().textContent()).trim();

    await AssertionUtils.expectEqual( actualUsername, username,'Username');
    await AssertionUtils.expectEqual( actualRole,role,'User Role');

    await AssertionUtils.expectEqual(  actualEmployeeName,
        employeeName,
        'Employee Name'
    );

    await AssertionUtils.expectEqual(
        actualStatus,
        status,
        'Status'
    );
}


async verifyEmployeeEnabledStatus(employeeName, role, employeName, status) {
    await this.verifyAdminicon();
    await this.clickResetButton();
    await this.verifypageloadedsuccessfully('System Users');
    await this.enterUsername(employeeName);
    await this.selectUserRole(role);
    await this.searchEmployeeName(employeName);
    await this.selectStatus(status);
    await this.clickSearchButton();
    // Verify only one record is displayed
    await this.verifyEmployeeRecord( employeeName,role,employeName,status);
}

async verifyEmployeeDisableRecord(employeeName, role, employeName, status) {
    await this.clickOnAdminIcon();
    await this.clickResetButton();
    await this.verifypageloadedsuccessfully('OrangeHRM');
    await this.enterUsername(employeeName);
    await this.selectUserRole(role);
    await this.searchEmployeeName(employeName);
    await this.selectStatus(status);
    await this.clickSearchButton();

    // Verify one disabled employee record and its details
    await this.verifyEmployeeRecord( employeeName,role,employeName,status);
}
        
async verifyAdminpageLoadedSuccessfully() {
 await this.clickOnAdminIcon();
 await this.verifypageloadedsuccessfully('OrangeHRM');

}

}export default AdminPage;