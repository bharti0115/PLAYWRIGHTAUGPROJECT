// Import test and expect functions from Playwright test runner

import { expect, test } from "@playwright/test";


test("Verify user creation", async function ({ page }) {
  
  await page.goto("https://freelance-learn-automation.vercel.app/signup")

  await page.waitForSelector("//input[@type='checkbox']")

  let ele= page.locator("//input[@type='checkbox']")

  console.log(ele);
  
});


