import { expect, test } from '@playwright/test';

export default class AssertionUtils {

    // Purpose: Verify that an element is visible
    static async expectVisible(locator, elementName) {   

         console.log(`[INFO] Verifying ${elementName} is visible`);

        try {
            await test.step(`Verify ${elementName} is visible`, async () => {
                 await expect(locator).toBeVisible();

            });

            console.log(`[PASS] ${elementName} is visible successfully`);
        } catch (error) {

            console.error(`[FAIL] ${elementName} is not visible`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is hidden
    static async expectHidden(locator, elementName) {
        console.log(`[INFO] Verifying ${elementName} is hidden`);

        try {

            await test.step(`Verify ${elementName} is hidden`, async () => {
                await expect(locator).toBeHidden();
            });

            console.log(`[PASS] ${elementName} is hidden successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is not hidden`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element contains expected text
    static async expectText(locator, expectedText, elementName) {

        console.log(
            `[INFO] Verifying text of ${elementName}: ${expectedText}`
        );

        try {

            await test.step(
                `Verify text of ${elementName} is ${expectedText}`,
                async () => {
                    await expect(locator).toContainText(expectedText);
                }
            );

            console.log(
                `[PASS] ${elementName} contains expected text successfully`
            );

        } catch (error) {

            console.error(
                `[FAIL] ${elementName} does not contain expected text`
            );
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify exact text of an element
    static async expectTextEqual(locator, expectedText, elementName) {
        console.log(
            `[INFO] Verifying exact text of ${elementName}: ${expectedText}`
        );

        try {
            await test.step(
                `Verify exact text of ${elementName}`,
                async () => {
                    await expect(locator).toHaveText(expectedText);
                }
            );

            console.log(
                `[PASS] Exact text verified successfully for ${elementName}`
            );

        } catch (error) {
            console.error(
                `[FAIL] Exact text verification failed for ${elementName}`
            );
            console.error(error);
            throw error;
        }
    }


    // Purpose: Verify that an element is enabled
    static async expectEnabled(locator, elementName) {

        console.log(`[INFO] Verifying ${elementName} is enabled`);

        try {

            await test.step(`Verify ${elementName} is enabled`, async () => {
                await expect(locator).toBeEnabled();
            });

            console.log(`[PASS] ${elementName} is enabled successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is not enabled`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is disabled
    static async expectDisabled(locator, elementName) {

        console.log(`[INFO] Verifying ${elementName} is disabled`);

        try {

            await test.step(`Verify ${elementName} is disabled`, async () => {
                await expect(locator).toBeDisabled();
            });

            console.log(`[PASS] ${elementName} is disabled successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is not disabled`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is checked
    static async expectChecked(locator, elementName) {

        console.log(`[INFO] Verifying ${elementName} is checked`);

        try {

            await test.step(`Verify ${elementName} is checked`, async () => {
                await expect(locator).toBeChecked();
            });

            console.log(`[PASS] ${elementName} is checked successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is not checked`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is not checked
    static async expectNotChecked(locator, elementName) {
        console.log(`[INFO] Verifying ${elementName} is not checked`);

        try {

            await test.step(
                `Verify ${elementName} is not checked`,
                async () => {
                    await expect(locator).not.toBeChecked();
                }
            );

            console.log(`[PASS] ${elementName} is not checked successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is checked`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is editable
    static async expectEditable(locator, elementName) {

        console.log(`[INFO] Verifying ${elementName} is editable`);

        try {

            await test.step(`Verify ${elementName} is editable`, async () => {
                await expect(locator).toBeEditable();
            });

            console.log(`[PASS] ${elementName} is editable successfully`);

        } catch (error) {

            console.error(`[FAIL] ${elementName} is not editable`);
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify that an element is empty
    static async expectEmpty(locator, elementName) {

        console.log(`[INFO] Verifying ${elementName} is empty`);

        try {

            await test.step(`Verify ${elementName} is empty`, async () => {
                await expect(locator).toBeEmpty();
            });

            console.log(`[PASS] ${elementName} is empty successfully`);

        } catch (error) {
            
            console.error(`[FAIL] ${elementName} is not empty`);
            console.error(error);
            throw error;
        }
    }


    // Purpose: Verify input value
    static async expectValue(locator, expectedValue, elementName) {

        console.log(
            `[INFO] Verifying value of ${elementName}: ${expectedValue}`
        );

        try {

            await test.step(
                `Verify value of ${elementName}`,
                async () => {
                    await expect(locator).toHaveValue(expectedValue);
                }
            );

            console.log(
                `[PASS] Value verified successfully for ${elementName}`
            );

        } catch (error) {

            console.error(
                `[FAIL] Value verification failed for ${elementName}`
            );
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify element attribute
    static async expectAttribute(
        locator,
        attributeName,
        expectedValue,
        elementName
    ) {

        console.log(
            `[INFO] Verifying ${attributeName} attribute of ${elementName}`
        );

        try {
            await test.step(
                `Verify ${attributeName} attribute of ${elementName}`,
                async () => {
                    await expect(locator).toHaveAttribute(
                        attributeName,
                        expectedValue
                    );
                }
            );

            console.log(
                `[PASS] ${attributeName} attribute verified successfully`
            );

        } catch (error) {

            console.error(
                `[FAIL] ${attributeName} attribute verification failed`
            );
            console.error(error);

            throw error;
        }
    }


    // Purpose: Verify URL
    static async expectURL(page, expectedURL) {
        console.log(`[INFO] Verifying current URL: ${expectedURL}`);

        try {

            await test.step(
                `Verify page URL is ${expectedURL}`,
                async () => {
                    await expect(page).toHaveURL(expectedURL);
                }
            );

            console.log(`[PASS] URL verified successfully`);

        } catch (error) {
            console.error(`[FAIL] URL verification failed`);
            console.error(error);
            throw error;
        }
    }


    // Purpose: Verify page title
    static async expectTitle(page, expectedTitle) {
        console.log(`[INFO] Verifying page title: ${expectedTitle}`);

        try {

            await test.step(
                `Verify page title is ${expectedTitle}`,
                async () => {
                    await expect(page).toHaveTitle(expectedTitle);
                }
            );

            console.log(`[PASS] Page title verified successfully`);

        } catch (error) {

            console.error(`[FAIL] Page title verification failed`);
            console.error(error);
            throw error;
        }
    }

    // Purpose: Verify two values are equal
static async expectEqual(actual, expected, fieldName) {
    console.log(
        `[INFO] Verifying ${fieldName}: Expected = ${expected}, Actual = ${actual}`
    );

    try {
        await test.step(`Verify ${fieldName} is equal`,
            async () => {expect(actual).toBe(expected);} );

        console.log(
            `[PASS] ${fieldName} verified successfully`
        );

    } catch (error) {
        console.error(
            `[FAIL] ${fieldName} verification failed`
        );
        console.error(error);
        throw error;
    }
}
}