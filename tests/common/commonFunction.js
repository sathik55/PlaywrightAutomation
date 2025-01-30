const { test: baseTest, chromium } = require('@playwright/test');
const LoginPage = require('../Pages/login');

let browser;
let browserContext;
let page;

const test = baseTest.extend({
  loginpage: async ({}, use) => {
    if (!browser) {
      browser = await chromium.launch({ headless: false });
      console.log('Launching browser');
    }

    if (!browserContext) {
      browserContext = await browser.newContext();
      page = await browserContext.newPage();
      await page.goto('https://stage.kasaconnect.com/login');
    }

    const loginpage = new LoginPage(page);
    await use(loginpage);
  },
});

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === 'failed') {
    console.warn('Test failed. Capturing trace.');
    // Explicitly stop and save trace on test failure
    await page.context().tracing.stop({ path: `trace-${testInfo.title}.zip` });
  }
});

test.afterAll(async () => {
  try {
    if (browser) {
      console.log('Closing browser at the very end');
      await browser.close();
    }
  } catch (error) {
    console.error('Error while closing browser:', error);
  }
});

module.exports = test;
