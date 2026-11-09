# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admintest.spec.js >> TC_002 Verify search functionality on admin page
- Location: tests\Admintest.spec.js:33:5

# Error details

```
Error: locator.selectOption: Error: Element is not a <select> element
Call log:
  - waiting for locator('//label[text()=\'User Role\']/following::div[contains(@class,\'oxd-select-text\')][1]')
    - locator resolved to <div data-v-67d2aedf="" data-v-13cf171c="" class="oxd-select-text oxd-select-text--active">…</div>
  - attempting select option action
    - waiting for element to be visible and enabled

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - generic [ref=f2e113]:
            - heading "Admin" [level=6] [ref=f2e114]
            - heading "/ User Management" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: manda user
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: User Management
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Job
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Organization
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Qualifications
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Nationalities" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e148]:
              - /url: "#"
          - listitem [ref=f2e149] [cursor=pointer]:
            - generic [ref=f2e150]:
              - text: Configuration
              - generic [ref=f2e151]: 
          - button "" [ref=f2e153] [cursor=pointer]
  - generic [ref=f2e155]:
    - generic [ref=f2e157]:
      - generic [ref=f2e158]:
        - generic [ref=f2e159]:
          - heading "System Users" [level=5] [ref=f2e161]
          - button "" [ref=f2e164] [cursor=pointer]
        - separator [ref=f2e166]
        - generic [ref=f2e168]:
          - generic [ref=f2e170]:
            - generic [ref=f2e172]:
              - generic [ref=f2e173]: Username
              - textbox [active] [ref=f2e176]: testuser
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: User Role
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Employee Name
              - textbox "Type for hints..." [ref=f2e194]
            - generic [ref=f2e196]:
              - generic [ref=f2e197]: Status
              - generic [ref=f2e201] [cursor=pointer]:
                - generic [ref=f2e202]: "-- Select --"
                - generic [ref=f2e203]: 
          - separator [ref=f2e205]
          - generic [ref=f2e206]:
            - button "Reset" [ref=f2e207] [cursor=pointer]
            - button "Search" [ref=f2e208] [cursor=pointer]
      - generic [ref=f2e209]:
        - button " Add" [ref=f2e211] [cursor=pointer]:
          - generic [ref=f2e212]: 
          - text: Add
        - generic [ref=f2e213]:
          - separator [ref=f2e214]
          - generic [ref=f2e215]: (4) Records Found
        - table [ref=f2e218]:
          - rowgroup [ref=f2e219]:
            - row [ref=f2e220]:
              - columnheader "" [ref=f2e221]:
                - generic [ref=f2e223] [cursor=pointer]:
                  - checkbox "" [ref=f2e224]
                  - generic [ref=f2e225]: 
              - columnheader "Username " [ref=f2e227]:
                - text: Username
                - generic [ref=f2e228]:
                  - generic [ref=f2e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e230]:
                - text: User Role
                - generic [ref=f2e231]:
                  - generic [ref=f2e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e233]:
                - text: Employee Name
                - generic [ref=f2e234]:
                  - generic [ref=f2e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e236]:
                - text: Status
                - generic [ref=f2e237]:
                  - generic [ref=f2e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e239]
          - rowgroup [ref=f2e240]:
            - row [ref=f2e242]:
              - cell "" [ref=f2e243]:
                - generic [ref=f2e247]:
                  - checkbox "" [ref=f2e248]
                  - generic [ref=f2e249]: 
              - cell "Admin" [ref=f2e251]
              - cell "Admin" [ref=f2e253]
              - cell "manda user" [ref=f2e255]
              - cell "Enabled" [ref=f2e257]
              - cell [ref=f2e259]:
                - generic [ref=f2e260]:
                  - button "" [ref=f2e261] [cursor=pointer]
                  - button "" [ref=f2e263] [cursor=pointer]
            - row [ref=f2e266]:
              - cell "" [ref=f2e267]:
                - generic [ref=f2e270] [cursor=pointer]:
                  - checkbox "" [ref=f2e271]
                  - generic [ref=f2e272]: 
              - cell "FMLName" [ref=f2e274]
              - cell "ESS" [ref=f2e276]
              - cell "Qwerty LName" [ref=f2e278]
              - cell "Enabled" [ref=f2e280]
              - cell [ref=f2e282]:
                - generic [ref=f2e283]:
                  - button "" [ref=f2e284] [cursor=pointer]
                  - button "" [ref=f2e286] [cursor=pointer]
            - row [ref=f2e289]:
              - cell "" [ref=f2e290]:
                - generic [ref=f2e293] [cursor=pointer]:
                  - checkbox "" [ref=f2e294]
                  - generic [ref=f2e295]: 
              - cell "FMLName1" [ref=f2e297]
              - cell "ESS" [ref=f2e299]
              - cell "FName LName" [ref=f2e301]
              - cell "Enabled" [ref=f2e303]
              - cell [ref=f2e305]:
                - generic [ref=f2e306]:
                  - button "" [ref=f2e307] [cursor=pointer]
                  - button "" [ref=f2e309] [cursor=pointer]
            - row [ref=f2e312]:
              - cell "" [ref=f2e313]:
                - generic [ref=f2e316] [cursor=pointer]:
                  - checkbox "" [ref=f2e317]
                  - generic [ref=f2e318]: 
              - cell "Jobinsam@6742" [ref=f2e320]
              - cell "ESS" [ref=f2e322]
              - cell "Jobin Sam" [ref=f2e324]
              - cell "Enabled" [ref=f2e326]
              - cell [ref=f2e328]:
                - generic [ref=f2e329]:
                  - button "" [ref=f2e330] [cursor=pointer]
                  - button "" [ref=f2e332] [cursor=pointer]
    - generic [ref=f2e335]:
      - paragraph [ref=f2e336]: OrangeHRM OS 5.9
      - paragraph [ref=f2e337]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e338] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  250 |         await test.step(`Double click: ${elementName}`, async () => {
  251 |             console.log(`[INFO] Double clicking ${elementName}`);
  252 |             try {
  253 |                 await locator.dblclick();
  254 |                 console.log(`[PASS] ${elementName} double clicked successfully`);
  255 |             } catch (error) {
  256 |                 console.error(`[FAIL] Failed to double click ${elementName}`);
  257 |                 console.error(error);
  258 |                 throw error;
  259 |             }
  260 |         });
  261 |     }
  262 |     // Purpose: Enter text into an input field
  263 |     static async fill(locator, text, elementName = 'element') {
  264 |         await test.step(`Fill ${elementName}`, async () => {
  265 |             console.log(`[INFO] Entering "${text}" in ${elementName}`);
  266 |             try {
  267 |                 await locator.fill(text);
  268 |                 console.log(`[PASS] "${text}" entered successfully in ${elementName}`);
  269 |             } catch (error) {
  270 |                 console.error(`[FAIL] Failed to enter text in ${elementName}`);
  271 |                 console.error(error);
  272 |                 throw error;
  273 |             }
  274 |         });
  275 |     }
  276 | 
  277 | 
  278 |     // Purpose: Press a keyboard key on an element
  279 |     static async press(locator, key, elementName = 'element') {
  280 |         await test.step(`Press ${key} on ${elementName}`, async () => {
  281 |             console.log(`[INFO] Pressing ${key} on ${elementName}`);
  282 |             try {
  283 |                 await locator.press(key);
  284 |                 console.log(`[PASS] ${key} pressed successfully on ${elementName}`);
  285 |             } catch (error) {
  286 |                 console.error(`[FAIL] Failed to press ${key} on ${elementName}`);
  287 |                 console.error(error);
  288 |                 throw error;
  289 |             }
  290 |         });
  291 |     }
  292 | 
  293 |     // Purpose: Clear existing text from an input field
  294 |     static async clear(locator, elementName = 'element') {
  295 | 
  296 |         await test.step(`Clear ${elementName}`, async () => {
  297 |             console.log(`[INFO] Clearing ${elementName}`);
  298 |             try {
  299 |                 await locator.clear();
  300 |                 console.log(`[PASS] ${elementName} cleared successfully`);
  301 |             } catch (error) {
  302 |                 console.error(`[FAIL] Failed to clear ${elementName}`);
  303 |                 console.error(error);
  304 |                 throw error;
  305 |             }
  306 |         });
  307 |     }
  308 | 
  309 | 
  310 |     // Purpose: Check a checkbox
  311 |     static async check(locator, elementName = 'checkbox') {
  312 |         await test.step(`Check ${elementName}`, async () => {
  313 |             console.log(`[INFO] Checking ${elementName}`);
  314 |             try {
  315 |                 await locator.check();
  316 |                 console.log(`[PASS] ${elementName} checked successfully`);
  317 |             } catch (error) {
  318 |                 console.error(`[FAIL] Failed to check ${elementName}`);
  319 |                 console.error(error);
  320 |                 throw error;
  321 |             }
  322 |         });
  323 |     }
  324 | 
  325 | 
  326 |     // Purpose: Uncheck a checkbox
  327 |     static async uncheck(locator, elementName = 'checkbox') {
  328 |         await test.step(`Uncheck ${elementName}`, async () => {
  329 |             console.log(`[INFO] Unchecking ${elementName}`);
  330 |             try {
  331 |                 await locator.uncheck();
  332 |                 console.log(`[PASS] ${elementName} unchecked successfully`);
  333 |             } catch (error) {
  334 |                 console.error(`[FAIL] Failed to uncheck ${elementName}`);
  335 |                 console.error(error);
  336 | 
  337 |                 throw error;
  338 |             }
  339 |         });
  340 |     }
  341 | 
  342 | 
  343 |     // Purpose: Select an option from a dropdown
  344 |     static async selectOption(locator, value, elementName = 'dropdown') {
  345 | 
  346 |         await test.step(`Select option in ${elementName}`, async () => {
  347 |             console.log(`[INFO] Selecting "${value}" from ${elementName}`);
  348 | 
  349 |             try {
> 350 |                 await locator.selectOption(value);
      |                               ^ Error: locator.selectOption: Error: Element is not a <select> element
  351 |                 console.log(`[PASS] "${value}" selected successfully from ${elementName}`);
  352 |             } catch (error) {
  353 |                 console.error(`[FAIL] Failed to select "${value}" from ${elementName}`);
  354 |                 console.error(error);
  355 |                 throw error;
  356 |             }
  357 |         });
  358 |     }
  359 | 
  360 | 
  361 |     // Purpose: Move the mouse over an element
  362 |     static async hover(locator, elementName = 'element') {
  363 |         await test.step(`Hover: ${elementName}`, async () => {
  364 |             console.log(`[INFO] Hovering over ${elementName}`);
  365 |             try {
  366 |                 await locator.hover();
  367 |                 console.log(`[PASS] Hovered over ${elementName} successfully`);
  368 |             } catch (error) {
  369 |                 console.error(`[FAIL] Failed to hover over ${elementName}`);
  370 |                 console.error(error);
  371 |                 throw error;
  372 |             }
  373 |         });
  374 |     }
  375 | 
  376 | 
  377 |     // Purpose: Set keyboard focus on an element
  378 |     static async focus(locator, elementName = 'element') {
  379 |         await test.step(`Focus: ${elementName}`, async () => {
  380 |             console.log(`[INFO] Focusing ${elementName}`);
  381 |             try {
  382 |                 await locator.focus();
  383 |                 console.log(`[PASS] ${elementName} focused successfully`);
  384 |             } catch (error) {
  385 |                 console.error(`[FAIL] Failed to focus ${elementName}`);
  386 |                 console.error(error);
  387 |                 throw error;
  388 |             }
  389 |         });
  390 |     }
  391 | 
  392 | 
  393 |     // Purpose: Type text character by character
  394 |     static async pressSequentially(locator, text, elementName = 'element') {
  395 |         await test.step(`Type sequentially in ${elementName}`, async () => {
  396 |             console.log(`[INFO] Typing "${text}" sequentially in ${elementName}`);
  397 | 
  398 |             try {
  399 | 
  400 |                 await locator.pressSequentially(text);
  401 | 
  402 |                 console.log(`[PASS] "${text}" typed successfully in ${elementName}`);
  403 | 
  404 |             } catch (error) {
  405 | 
  406 |                 console.error(`[FAIL] Failed to type sequentially in ${elementName}`);
  407 |                 console.error(error);
  408 | 
  409 |                 throw error;
  410 |             }
  411 |         });
  412 |     }
  413 | 
  414 | 
  415 |     // Purpose: Type text using keyboard actions
  416 |     static async type(locator, text, elementName = 'element') {
  417 | 
  418 |         await test.step(`Type in ${elementName}`, async () => {
  419 | 
  420 |             console.log(`[INFO] Typing "${text}" in ${elementName}`);
  421 | 
  422 |             try {
  423 | 
  424 |                 await locator.pressSequentially(text);
  425 | 
  426 |                 console.log(`[PASS] "${text}" typed successfully in ${elementName}`);
  427 | 
  428 |             } catch (error) {
  429 | 
  430 |                 console.error(`[FAIL] Failed to type in ${elementName}`);
  431 |                 console.error(error);
  432 | 
  433 |                 throw error;
  434 |             }
  435 |         });
  436 |     }
  437 | 
  438 | 
  439 |     // Purpose: Tap an element, mainly useful for touch-based interactions
  440 |     static async tap(locator, elementName = 'element') {
  441 | 
  442 |         await test.step(`Tap: ${elementName}`, async () => {
  443 | 
  444 |             console.log(`[INFO] Tapping ${elementName}`);
  445 | 
  446 |             try {
  447 | 
  448 |                 await locator.tap();
  449 | 
  450 |                 console.log(`[PASS] ${elementName} tapped successfully`);
```