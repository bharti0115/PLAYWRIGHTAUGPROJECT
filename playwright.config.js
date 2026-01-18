// playwright.config.ts
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries:2,

  workers:1,

  reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['junit', { outputFile: 'test-results/results.xml' }],
],

  use: {
    baseURL: 'https://freelance-learn-automation.vercel.app',

    geolocation: { latitude: 12.492507, longitude: 41.889938 },

    acceptDownloads: true,

    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },

    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        launchOptions: { slowMo: 1000 },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
        // Firefox can be a bit slower on CI; enable if needed:
        // launchOptions: { slowMo: 200 },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: true,
      },
    },
  ],
});
