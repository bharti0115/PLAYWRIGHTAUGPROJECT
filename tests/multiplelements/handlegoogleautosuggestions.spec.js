// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Select values from google auto suggestion", async ({ page }) => {
  // 1) Open Google home
  await page.goto("https://www.google.com/");

  // 2) Type the query into the searchbox (textarea[name='q'])
  await page.locator("//textarea[@name='q']").fill("mukesh otwani ");

  // 3) Wait for the autosuggest dropdown options to appear
  await page.waitForSelector("//div[@role='option']");

  // 4) Build a Locator for all suggestion options
  const allElements = page.locator("//div[@role='option']");

  // 5) Count suggestions and iterate each one
  const total = await allElements.count();
  for (let index = 0; index < total; index++) 
    {
    const element = allElements.nth(index);

    // 6) Read suggestion text
    const text = await element.innerText();
    console.log("Suggestions from Google " + text);

    // 7) If suggestion contains "github", click it and stop
    if (text.includes("github")) {
      await element.click();

      // Demo wait (generally avoid in CI)
      await page.waitForTimeout(5000);
      break;
    }
  }
});
