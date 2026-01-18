// Import test and expect functions from Playwright test runner

import { expect, test } from "@playwright/test";


// Test Case: Verify user registration flow
test("Verify user creation", async function ({ page }) {
  // Open the login page    

  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

  await page.getByText("Male",{exact:true}).click()

  await page.getByLabel("First name:").fill("Sample")

  await page.getByLabel("Last name:").fill("User")

  await page.getByLabel("Email:").fill("usersample7@gmail.com")

  await page.getByLabel("Company name:").fill("testing")

  await expect(page.locator("#Newsletter")).toBeChecked()

  await page.locator("#Newsletter").click()

  await expect(page.locator("#Newsletter")).not.toBeChecked()

  await page.getByLabel("Password:",{exact:true}).fill("testing")

  await page.getByLabel("Confirm password:").fill("testing")

  await page.waitForTimeout(2000)

  await page.getByText("Register").last().click()

  await page.waitForTimeout(5000)

  await expect(page.locator("body")).toContainText("Your registration completed")

  await page.getByText("Log out").click()

  await expect(page.getByText("Log in")).toBeVisible()

  await page.waitForTimeout(5000)
  
});


