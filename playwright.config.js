// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 20000,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 2,
  reporter: [
    ['list'],
    ['html', { open: 'always', outputFolder: 'test-report' }],
    ['json'],
  ],
  use: {
    headless: false,
    launchOptions: {
      slowMo: 1000,
    },
    strict: true,
    trace: process.env.CI ? 'on-first-retry' : 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile iPhone 15',
      use: { ...devices['iPhone 15'] },
    },
  ],
});




  // {
    //   name: 'Desktop Chrome',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'Desktop Edge',
    //   use: { ...devices['Desktop Edge'] },
    // },
    // {
    //   name: 'Mobile Pixel 5',
    //   use: { ...devices['Pixel 5'] },
    // },