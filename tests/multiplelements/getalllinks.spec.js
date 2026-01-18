// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Get all links", async ({ page }) => {
  // 1) Navigate to Naukri home
  await page.goto("https://www.naukri.com/");

  // 2) Wait for elements
  await page.waitForSelector("//a[@href]");

  // 3) Create a Locator for all anchor tags that have href
  const allLinks = page.locator("//a[@href]");

  // 4) Count how many matches we currently have
  const numberOfLinks = await allLinks.count();
  console.log("Number of links " + numberOfLinks);

  // 5) Iterate over each anchor and print its href attribute
  for (let index = 0; index < numberOfLinks; index++) {
    const element = allLinks.nth(index);
    const hrefValue = await element.getAttribute("href");
    console.log("Href of each link is " + hrefValue);
  
  }
});
