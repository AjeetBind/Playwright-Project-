// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration
 */
export default defineConfig({

  // Test cases location
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Fail CI if test.only is accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry failed tests only on CI
  retries: process.env.CI ? 2 : 0,

  // One worker on CI, default locally
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        resultsDir: './allure-results'
      }
    ]
  ],

  // Shared settings for all tests
  use: {

    // Base URL
    baseURL: 'https://opensource-demo.orangehrmlive.com/',

    // Run browser visibly
    headless: false,

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Keep video when test fails
    video: 'retain-on-failure',

    // Keep trace when test fails
    trace: 'retain-on-failure',

    // Browser size
    viewport: {
      width: 1280,
      height: 720
    },

    // Maximum time for a single Playwright action
    actionTimeout: 10000
  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ],

  // Test result/output directory
  outputDir: './test-results'
});