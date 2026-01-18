// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Create new course", async ({ page }) => 
{

    await page.goto("https://selectorshub.com/xpath-practice-page/")

    // auto pierceing with playwright dont use xpath and shadow dom should be in open stage
    await page.locator("#kils").fill("Playwright With JS")

    await page.waitForTimeout(5000)

})