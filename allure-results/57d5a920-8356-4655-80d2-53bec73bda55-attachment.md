# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Test_001 Verify valid credentials user login successfully
- Location: tests\Login.spec.js:11:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1   | import { test } from '@playwright/test';
  2   | 
  3   | export default class WebUtils {
  4   | 
  5   |         // Purpose: Navigate to a specific URL
  6   |     static async goto(page, url, pageName = 'page') {
  7   |         await test.step(`Navigate to ${pageName}`, async () => {
  8   |             console.log(`[INFO] Navigating to ${url}`);
  9   |             try {
> 10  |                 await page.goto(url);
      |                            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11  |                 console.log(`[PASS] Navigated to ${pageName} successfully`);
  12  |             } catch (error) {
  13  |                 console.error(`[FAIL] Failed to navigate to ${pageName}`);
  14  |                 console.error(error);
  15  |                 throw error;
  16  |             }
  17  |         });
  18  |     }
  19  | 
  20  | 
  21  |     // Purpose: Reload the current page
  22  |     static async reload(page, pageName = 'page') {
  23  |         await test.step(`Reload ${pageName}`, async () => {
  24  |             console.log(`[INFO] Reloading ${pageName}`);
  25  |             try {
  26  |                 await page.reload();
  27  |                 console.log(`[PASS] ${pageName} reloaded successfully`);
  28  |             } catch (error) {
  29  |                 console.error(`[FAIL] Failed to reload ${pageName}`);
  30  |                 console.error(error);
  31  |                 throw error;
  32  |             }
  33  |         });
  34  |     }
  35  | 
  36  | 
  37  |     // Purpose: Navigate to the previous page
  38  |     static async goBack(page, pageName = 'page') {
  39  | 
  40  |         await test.step(`Go back from ${pageName}`, async () => {
  41  | 
  42  |             console.log(`[INFO] Navigating back from ${pageName}`);
  43  | 
  44  |             try {
  45  | 
  46  |                 await page.goBack();
  47  | 
  48  |                 console.log(`[PASS] Navigated back successfully`);
  49  | 
  50  |             } catch (error) {
  51  | 
  52  |                 console.error(`[FAIL] Failed to navigate back`);
  53  |                 console.error(error);
  54  | 
  55  |                 throw error;
  56  |             }
  57  |         });
  58  |     }
  59  | 
  60  | 
  61  |     // Purpose: Navigate to the next page
  62  |     static async goForward(page, pageName = 'page') {
  63  | 
  64  |         await test.step(`Go forward from ${pageName}`, async () => {
  65  | 
  66  |             console.log(`[INFO] Navigating forward from ${pageName}`);
  67  | 
  68  |             try {
  69  | 
  70  |                 await page.goForward();
  71  | 
  72  |                 console.log(`[PASS] Navigated forward successfully`);
  73  | 
  74  |             } catch (error) {
  75  | 
  76  |                 console.error(`[FAIL] Failed to navigate forward`);
  77  |                 console.error(error);
  78  | 
  79  |                 throw error;
  80  |             }
  81  |         });
  82  |     }
  83  | 
  84  | 
  85  |     // Purpose: Get the current page URL
  86  |     static async url(page, pageName = 'page') {
  87  | 
  88  |         return await test.step(`Get URL of ${pageName}`, async () => {
  89  | 
  90  |             console.log(`[INFO] Getting URL of ${pageName}`);
  91  | 
  92  |             try {
  93  | 
  94  |                 const currentURL = page.url();
  95  | 
  96  |                 console.log(`[PASS] Current URL: ${currentURL}`);
  97  | 
  98  |                 return currentURL;
  99  | 
  100 |             } catch (error) {
  101 | 
  102 |                 console.error(`[FAIL] Failed to get URL of ${pageName}`);
  103 |                 console.error(error);
  104 | 
  105 |                 throw error;
  106 |             }
  107 |         });
  108 |     }
  109 | 
  110 | 
```