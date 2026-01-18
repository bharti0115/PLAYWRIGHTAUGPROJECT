// Import test and assertion APIs from Playwright Test
import { expect, test } from "@playwright/test";

test("Select all checkboxes", async ({ page }) => {
  // 1) Navigate to the signup page
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  /*
    - "elements should be visible"  -> use { state: 'visible' }
    - "it should not be hidden"     -> same as 'visible'
    - "element should not be covered" -> Playwright actions auto-wait for clickable state,
      but waitForSelector alone cannot guarantee "not covered". Use locator.click() which retries.
    - "it should be view" -> use 'visible'.
  */

  // 2) Wait for elements to be VISIBLE.
  await page.waitForSelector('xpath=//input[@type="checkbox"]', { state: "visible" });

  // 3) Create a Locator for ALL checkboxes on the page (XPath form)
  const allElements = page.locator('//input[@type="checkbox"]');

  // 4) Resolve how many elements currently match the locator
  const numberOfCheckboxes = await allElements.count();
  console.log("Total number of checkboxes " + numberOfCheckboxes);

  // 5) Loop over each checkbox and click it (toggles state)
  for (let index = 0; index < numberOfCheckboxes; index++) {
    await allElements.nth(index).click();
  
  }
});
