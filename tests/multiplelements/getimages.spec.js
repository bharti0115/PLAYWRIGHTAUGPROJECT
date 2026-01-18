// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Get all images", async ({ page }) => {
  // 1) Open target page
  await page.goto("https://www.naukri.com/");

  // 2) Build a Locator for all <img> elements that have a "src" attribute
  const allImages = page.locator("//img[@src]");

  // 3) Count total images currently in the DOM snapshot
  const numberOfImages = await allImages.count();
  console.log("Number of images " + numberOfImages);

  // 4) Iterate each image, fetch and print its src attribute
  for (let index = 0; index < numberOfImages; index++) {
    const element = allImages.nth(index);
    const srcValue = await element.getAttribute("src");
    console.log("src of each image is " + srcValue);

  }
});
