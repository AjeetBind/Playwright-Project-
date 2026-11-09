# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admintest.spec.js >> TC_001 Verify admin page is loaded successfully
- Location: tests\Admintest.spec.js:27:5

# Error details

```
TypeError: page.xpath is not a function
```

# Test source

```ts
  1   | import BasePage from '../base/BasePage.js';
  2   | import WebUtils from '../utils/WebUtils.js';
  3   | import AssertionUtils from '../utils/AssertionUtils.js';
  4   | 
  5   | class  AdminPage{
  6   | 
  7   |     constructor(page){
  8   | 
  9   |     this.page = page;
> 10  |     this. adminicon=page.xpath("//a[@href='/web/index.php/admin/viewAdminModule']");
      |                          ^ TypeError: page.xpath is not a function
  11  |     this.systemUsersHeader = page.xpath("//h5[text()='System Users']");
  12  |     this.pageTitle =page.locator('title');
  13  |     this.usernamefield =page.locator('input[name="username"]');
  14  |     this.userroleDropdown =page.getByLabel('User Role');
  15  |     this.employeenamefield =page.getByLabel('Employee Name');  
  16  |     this.employeenamefield =page.getByLabel('Employee Name'); 
  17  |     this.employeeOptions = page.locator('.oxd-autocomplete-option');
  18  |     this.noRecordsFound = page.getByText('No Records Found', { exact: true});
  19  |     this.Status=page.getByLabel('Status');
  20  |     this.SearchButton=page.xpath("//button[text()=' Search ']");
  21  |     this.ResetButton=page.xpath("//button[text()=' Reset ']");
  22  | 
  23  | this.tableRows = page.locator("//div[@role='rowgroup']//div[@role='row']");
  24  | this.usernameCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][2]");
  25  | this.userRoleCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][3]");
  26  | this.employeeNameCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][4]");
  27  | this.statusCells = page.locator("//div[@role='rowgroup']//div[@role='row']//div[@role='cell'][5]");
  28  |     
  29  | 
  30  |     }
  31  | 
  32  |     // Purpose: Verify Admin icon is visible and click it   
  33  |      async clickOnAdminIcon(){
  34  |        await AssertionUtils.expectVisible(this.adminicon, 'Admin icon'); 
  35  |        await WebUtils.click(this.adminicon,'Admin icon');      
  36  |     }
  37  | 
  38  |     // Purpose: Enter username in the username field and verify the value
  39  |      async enterUsername(username) {
  40  | 
  41  |         await WebUtils.fill(this.usernamefield, username, 'Username field');
  42  |         await AssertionUtils.expectValue(this.usernamefield, username, 'Username field');
  43  |     }
  44  | 
  45  |     // Purpose: Select user role from dropdown and verify selection
  46  |      async selectUserRole(role){
  47  |         await WebUtils.selectOption(this.userroleDropdown, role, 'User Role dropdown');
  48  |         await AssertionUtils.expectSelectedOption(this.userroleDropdown, role, 'User Role dropdown');
  49  |     }
  50  |   
  51  |     // Purpose: Search for an employee by name and select if found
  52  |     async searchEmployeeName(employeeName) {
  53  |     await WebUtils.fill( this.employeenamefield,employeeName,'Employee Name field');
  54  |     await this.page.waitForTimeout(1000);
  55  | 
  56  |     if (await this.noRecordsFound.isVisible()) {
  57  |          console.log(`No Records Found for: ${employeeName}`);
  58  |         return false;
  59  |     }
  60  |     const employee = this.employeeOptions
  61  |         .filter({ hasText: employeeName })
  62  |         .first();
  63  | 
  64  |     if (await employee.isVisible()) {
  65  |         await employee.click();
  66  |         console.log(`Employee selected: ${employeeName}`);
  67  |         return true;
  68  |     }
  69  |     return false;
  70  | }
  71  | 
  72  | // Purpose: Select status from dropdown and verify selection
  73  |  async selectStatus(status) {
  74  |     await WebUtils.selectOption(this.Status, status, 'Status dropdown');
  75  |     await AssertionUtils.expectSelectedOption(this.Status, status, 'Status dropdown');
  76  | }               
  77  |  // Purpose: Click Search button and verify it is visible
  78  |     async clickSearchButton(){
  79  | 
  80  |      await WebUtils.click(this.SearchButton, 'Search Button');
  81  |      await AssertionUtils.expectVisible(this.SearchButton, 'Search Button');
  82  | }
  83  | // Purpose: Click Reset button and verify it is visible
  84  |  async clickResetButton() {
  85  |    await WebUtils.click(this.ResetButton, 'Reset Button');
  86  |     await AssertionUtils.expectVisible(this.ResetButton, 'Reset Button');
  87  | }   
  88  | 
  89  | // Purpose: Verify System Users header is displayed
  90  |     async verifySystemUsersHeader() {
  91  |         await AssertionUtils.expectVisible(this.systemUsersHeader, 'System Users Header');
  92  |     }   
  93  |     // Purpose: Verify page title matches expected title
  94  |     async verifyPageTitle(expectedTitle) {
  95  |         const actualTitle = await this.pageTitle.textContent();
  96  |         await AssertionUtils.expectEqual(actualTitle, expectedTitle, 'Page Title');
  97  |     }  
  98  | 
  99  | // Purpose: Verify page is loaded by checking header and title
  100 |            async verifypageloadedsuccessfully(expectedTitle) {
  101 |             await this.verifySystemUsersHeader();
  102 |             await this.verifyPageTitle(expectedTitle);
  103 | 
  104 |            }
  105 | 
  106 |    async verifyStatusRecordCount(status) {
  107 |     const actualCount = await this.tableRows.count();
  108 |     console.log(`${status} records displayed: ${actualCount}`);
  109 |     if (actualCount === 0) {
  110 |         throw new Error(`No ${status} records found in the table`);
```