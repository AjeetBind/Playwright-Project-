import { test } from '@playwright/test';

export default class WebUtils {

        // Purpose: Navigate to a specific URL
    static async goto(page, url, pageName = 'page') {
        await test.step(`Navigate to ${pageName}`, async () => {
            console.log(`[INFO] Navigating to ${url}`);
            try {
                await page.goto(url);
                console.log(`[PASS] Navigated to ${pageName} successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to navigate to ${pageName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Reload the current page
    static async reload(page, pageName = 'page') {
        await test.step(`Reload ${pageName}`, async () => {
            console.log(`[INFO] Reloading ${pageName}`);
            try {
                await page.reload();
                console.log(`[PASS] ${pageName} reloaded successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to reload ${pageName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Navigate to the previous page
    static async goBack(page, pageName = 'page') {

        await test.step(`Go back from ${pageName}`, async () => {

            console.log(`[INFO] Navigating back from ${pageName}`);

            try {

                await page.goBack();

                console.log(`[PASS] Navigated back successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to navigate back`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Navigate to the next page
    static async goForward(page, pageName = 'page') {

        await test.step(`Go forward from ${pageName}`, async () => {

            console.log(`[INFO] Navigating forward from ${pageName}`);

            try {

                await page.goForward();

                console.log(`[PASS] Navigated forward successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to navigate forward`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get the current page URL
    static async url(page, pageName = 'page') {

        return await test.step(`Get URL of ${pageName}`, async () => {

            console.log(`[INFO] Getting URL of ${pageName}`);

            try {

                const currentURL = page.url();

                console.log(`[PASS] Current URL: ${currentURL}`);

                return currentURL;

            } catch (error) {

                console.error(`[FAIL] Failed to get URL of ${pageName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get the current page title
    static async title(page, pageName = 'page') {

        return await test.step(`Get title of ${pageName}`, async () => {

            console.log(`[INFO] Getting title of ${pageName}`);

            try {

                const currentTitle = await page.title();

                console.log(`[PASS] Current title: ${currentTitle}`);

                return currentTitle;

            } catch (error) {

                console.error(`[FAIL] Failed to get title of ${pageName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Wait for the page to reach a specific load state
    static async waitForLoadState(page, state = 'load', pageName = 'page') {
        await test.step(`Wait for ${pageName} load state`, async () => {
            console.log(`[INFO] Waiting for ${pageName} to reach ${state} state`);

            try {

                await page.waitForLoadState(state);
                console.log(`[PASS] ${pageName} reached ${state} state successfully`);
            } catch (error) {
                console.error(`[FAIL] ${pageName} did not reach ${state} state`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Wait until the page URL matches the expected URL
    static async waitForURL(page, url, pageName = 'page') {

        await test.step(`Wait for ${pageName} URL`, async () => {

            console.log(`[INFO] Waiting for ${pageName} URL: ${url}`);

            try {

                await page.waitForURL(url);

                console.log(`[PASS] ${pageName} reached expected URL`);

            } catch (error) {

                console.error(`[FAIL] ${pageName} did not reach expected URL`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Wait for a specific amount of time
    static async waitForTimeout(page, milliseconds, pageName = 'page') {

        await test.step(`Wait ${milliseconds} milliseconds`, async () => {

            console.log(`[INFO] Waiting ${milliseconds} milliseconds for ${pageName}`);

            try {

                await page.waitForTimeout(milliseconds);

                console.log(`[PASS] Wait completed successfully`);

            } catch (error) {

                console.error(`[FAIL] Wait failed for ${pageName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Close the current page
    static async close(page, pageName = 'page') {

        await test.step(`Close ${pageName}`, async () => {

            console.log(`[INFO] Closing ${pageName}`);

            try {

                await page.close();

                console.log(`[PASS] ${pageName} closed successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to close ${pageName}`);
                console.error(error);

                throw error;
            }
        });
    }

    // Purpose: Click on an element
    static async click(locator, elementName = 'element') {

        await test.step(`Click: ${elementName}`, async () => {
            console.log(`[INFO] Clicking ${elementName}`);
            try {
                await locator.click();
                console.log(`[PASS] ${elementName} clicked successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to click ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }

    // Purpose: Double-click on an element
    static async dblclick(locator, elementName = 'element') {
        await test.step(`Double click: ${elementName}`, async () => {
            console.log(`[INFO] Double clicking ${elementName}`);
            try {
                await locator.dblclick();
                console.log(`[PASS] ${elementName} double clicked successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to double click ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }
    // Purpose: Enter text into an input field
    static async fill(locator, text, elementName = 'element') {
        await test.step(`Fill ${elementName}`, async () => {
            console.log(`[INFO] Entering "${text}" in ${elementName}`);
            try {
                await locator.fill(text);
                console.log(`[PASS] "${text}" entered successfully in ${elementName}`);
            } catch (error) {
                console.error(`[FAIL] Failed to enter text in ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Press a keyboard key on an element
    static async press(locator, key, elementName = 'element') {
        await test.step(`Press ${key} on ${elementName}`, async () => {
            console.log(`[INFO] Pressing ${key} on ${elementName}`);
            try {
                await locator.press(key);
                console.log(`[PASS] ${key} pressed successfully on ${elementName}`);
            } catch (error) {
                console.error(`[FAIL] Failed to press ${key} on ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }

    // Purpose: Clear existing text from an input field
    static async clear(locator, elementName = 'element') {

        await test.step(`Clear ${elementName}`, async () => {
            console.log(`[INFO] Clearing ${elementName}`);
            try {
                await locator.clear();
                console.log(`[PASS] ${elementName} cleared successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to clear ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Check a checkbox
    static async check(locator, elementName = 'checkbox') {
        await test.step(`Check ${elementName}`, async () => {
            console.log(`[INFO] Checking ${elementName}`);
            try {
                await locator.check();
                console.log(`[PASS] ${elementName} checked successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to check ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Uncheck a checkbox
    static async uncheck(locator, elementName = 'checkbox') {
        await test.step(`Uncheck ${elementName}`, async () => {
            console.log(`[INFO] Unchecking ${elementName}`);
            try {
                await locator.uncheck();
                console.log(`[PASS] ${elementName} unchecked successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to uncheck ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Select an option from a dropdown
    static async selectOption(locator, value, elementName = 'dropdown') {

        await test.step(`Select option in ${elementName}`, async () => {
            console.log(`[INFO] Selecting "${value}" from ${elementName}`);

            try {
                await locator.selectOption(value);
                console.log(`[PASS] "${value}" selected successfully from ${elementName}`);
            } catch (error) {
                console.error(`[FAIL] Failed to select "${value}" from ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Move the mouse over an element
    static async hover(locator, elementName = 'element') {
        await test.step(`Hover: ${elementName}`, async () => {
            console.log(`[INFO] Hovering over ${elementName}`);
            try {
                await locator.hover();
                console.log(`[PASS] Hovered over ${elementName} successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to hover over ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Set keyboard focus on an element
    static async focus(locator, elementName = 'element') {
        await test.step(`Focus: ${elementName}`, async () => {
            console.log(`[INFO] Focusing ${elementName}`);
            try {
                await locator.focus();
                console.log(`[PASS] ${elementName} focused successfully`);
            } catch (error) {
                console.error(`[FAIL] Failed to focus ${elementName}`);
                console.error(error);
                throw error;
            }
        });
    }


    // Purpose: Type text character by character
    static async pressSequentially(locator, text, elementName = 'element') {
        await test.step(`Type sequentially in ${elementName}`, async () => {
            console.log(`[INFO] Typing "${text}" sequentially in ${elementName}`);

            try {

                await locator.pressSequentially(text);

                console.log(`[PASS] "${text}" typed successfully in ${elementName}`);

            } catch (error) {

                console.error(`[FAIL] Failed to type sequentially in ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Type text using keyboard actions
    static async type(locator, text, elementName = 'element') {

        await test.step(`Type in ${elementName}`, async () => {

            console.log(`[INFO] Typing "${text}" in ${elementName}`);

            try {

                await locator.pressSequentially(text);

                console.log(`[PASS] "${text}" typed successfully in ${elementName}`);

            } catch (error) {

                console.error(`[FAIL] Failed to type in ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Tap an element, mainly useful for touch-based interactions
    static async tap(locator, elementName = 'element') {

        await test.step(`Tap: ${elementName}`, async () => {

            console.log(`[INFO] Tapping ${elementName}`);

            try {

                await locator.tap();

                console.log(`[PASS] ${elementName} tapped successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to tap ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Drag one element and drop it onto another element
    static async dragTo(sourceLocator, targetLocator, elementName = 'element') {

        await test.step(`Drag ${elementName}`, async () => {

            console.log(`[INFO] Dragging ${elementName}`);

            try {

                await sourceLocator.dragTo(targetLocator);

                console.log(`[PASS] ${elementName} dragged successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to drag ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Upload one or more files through a file input
    static async setInputFiles(locator, files, elementName = 'file input') {

        await test.step(`Upload file: ${elementName}`, async () => {

            console.log(`[INFO] Uploading file using ${elementName}`);

            try {

                await locator.setInputFiles(files);

                console.log(`[PASS] File uploaded successfully using ${elementName}`);

            } catch (error) {

                console.error(`[FAIL] File upload failed using ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Remove an HTML attribute from an element
    static async removeAttribute(locator, name, elementName = 'element') {

        await test.step(`Remove attribute ${name} from ${elementName}`, async () => {

            console.log(`[INFO] Removing attribute ${name} from ${elementName}`);

            try {

                await locator.evaluate((element, attributeName) => {

                    element.removeAttribute(attributeName);

                }, name);

                console.log(`[PASS] Attribute ${name} removed successfully from ${elementName}`);

            } catch (error) {

                console.error(`[FAIL] Failed to remove attribute ${name} from ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get the value of an HTML attribute
    static async getAttribute(locator, name, elementName = 'element') {

        return await test.step(`Get attribute ${name} from ${elementName}`, async () => {

            console.log(`[INFO] Getting attribute ${name} from ${elementName}`);

            try {

                const value = await locator.getAttribute(name);

                console.log(`[PASS] Attribute ${name} received from ${elementName}: ${value}`);

                return value;

            } catch (error) {

                console.error(`[FAIL] Failed to get attribute ${name} from ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get visible text content from an element
    static async getText(locator, elementName = 'element') {

        return await test.step(`Get text: ${elementName}`, async () => {

            console.log(`[INFO] Getting text from ${elementName}`);

            try {

                const text = await locator.textContent();

                console.log(`[PASS] Text received from ${elementName}: ${text}`);

                return text;

            } catch (error) {

                console.error(`[FAIL] Failed to get text from ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get the inner text of an element
    static async innerText(locator, elementName = 'element') {

        return await test.step(`Get inner text: ${elementName}`, async () => {

            console.log(`[INFO] Getting inner text from ${elementName}`);

            try {

                const text = await locator.innerText();

                console.log(`[PASS] Inner text received from ${elementName}: ${text}`);

                return text;

            } catch (error) {

                console.error(`[FAIL] Failed to get inner text from ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Get the current value of an input field
    static async inputValue(locator, elementName = 'input') {

        return await test.step(`Get input value: ${elementName}`, async () => {

            console.log(`[INFO] Getting input value from ${elementName}`);

            try {

                const value = await locator.inputValue();

                console.log(`[PASS] Input value received from ${elementName}: ${value}`);

                return value;

            } catch (error) {

                console.error(`[FAIL] Failed to get input value from ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Check whether an element is visible
    static async isVisible(locator, elementName = 'element') {

        return await test.step(`Check visibility: ${elementName}`, async () => {

            console.log(`[INFO] Checking visibility of ${elementName}`);

            try {

                const visible = await locator.isVisible();

                console.log(`[PASS] ${elementName} visible: ${visible}`);

                return visible;

            } catch (error) {

                console.error(`[FAIL] Failed to check visibility of ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Check whether an element is hidden
    static async isHidden(locator, elementName = 'element') {

        return await test.step(`Check hidden: ${elementName}`, async () => {

            console.log(`[INFO] Checking if ${elementName} is hidden`);

            try {

                const hidden = await locator.isHidden();

                console.log(`[PASS] ${elementName} hidden: ${hidden}`);

                return hidden;

            } catch (error) {

                console.error(`[FAIL] Failed to check hidden state of ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Check whether an element is enabled
    static async isEnabled(locator, elementName = 'element') {

        return await test.step(`Check enabled: ${elementName}`, async () => {

            console.log(`[INFO] Checking if ${elementName} is enabled`);

            try {

                const enabled = await locator.isEnabled();

                console.log(`[PASS] ${elementName} enabled: ${enabled}`);

                return enabled;

            } catch (error) {

                console.error(`[FAIL] Failed to check enabled state of ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Check whether an element is disabled
    static async isDisabled(locator, elementName = 'element') {

        return await test.step(`Check disabled: ${elementName}`, async () => {

            console.log(`[INFO] Checking if ${elementName} is disabled`);

            try {

                const disabled = await locator.isDisabled();

                console.log(`[PASS] ${elementName} disabled: ${disabled}`);

                return disabled;

            } catch (error) {

                console.error(`[FAIL] Failed to check disabled state of ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Check whether a checkbox or radio button is selected
    static async isChecked(locator, elementName = 'checkbox') {

        return await test.step(`Check checked state: ${elementName}`, async () => {

            console.log(`[INFO] Checking checked state of ${elementName}`);

            try {

                const checked = await locator.isChecked();

                console.log(`[PASS] ${elementName} checked: ${checked}`);

                return checked;

            } catch (error) {

                console.error(`[FAIL] Failed to check checked state of ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Count matching elements
    static async count(locator, elementName = 'elements') {

        return await test.step(`Count: ${elementName}`, async () => {

            console.log(`[INFO] Counting ${elementName}`);

            try {

                const count = await locator.count();

                console.log(`[PASS] ${elementName} count: ${count}`);

                return count;

            } catch (error) {

                console.error(`[FAIL] Failed to count ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Wait for an element to reach a specific state
    static async waitFor(locator, options, elementName = 'element') {

        await test.step(`Wait for: ${elementName}`, async () => {

            console.log(`[INFO] Waiting for ${elementName}`);

            try {

                await locator.waitFor(options);

                console.log(`[PASS] ${elementName} is ready`);

            } catch (error) {

                console.error(`[FAIL] Wait failed for ${elementName}`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Scroll an element into the visible area
    static async scrollIntoViewIfNeeded(locator, elementName = 'element') {

        await test.step(`Scroll to: ${elementName}`, async () => {

            console.log(`[INFO] Scrolling ${elementName} into view`);

            try {

                await locator.scrollIntoViewIfNeeded();

                console.log(`[PASS] ${elementName} scrolled into view successfully`);

            } catch (error) {

                console.error(`[FAIL] Failed to scroll ${elementName} into view`);
                console.error(error);

                throw error;
            }
        });
    }


    // Purpose: Take a screenshot of a specific element
    static async screenshot(locator, path, elementName = 'element') {

        await test.step(`Screenshot: ${elementName}`, async () => {

            console.log(`[INFO] Taking screenshot of ${elementName}`);

            try {

                await locator.screenshot({ path });

                console.log(`[PASS] Screenshot taken successfully for ${elementName}`);

            } catch (error) {

                console.error(`[FAIL] Failed to take screenshot for ${elementName}`);
                console.error(error);

                throw error;
            }
        });

        
    }
}