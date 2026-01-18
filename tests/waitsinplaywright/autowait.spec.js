// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Auto wait", async ({ page }) => 
{

   await page.goto("https://freelance-learn-automation.vercel.app/login",{waitUntil:"networkidle", timeout:45000}) // load 

   await page.locator("mukesh").fill("mukesh otwani",{timeout:50000})

   await expect(page.locator("#email1")).not.toBeVisible({timeout:15000})

   await page.locator("").click()

   page.waitForEvent("dialog")

   page.waitForLoadState("load")

   page.waitForLoadState("domcontentloaded")

   page.waitForLoadState("networkidle")

   page.waitForResponse("") // wait until response is not as per our test 

   page.waitForRequest("") // wait until request is not as per our test 

   page.waitForTimeout(5000) // wait for 5 seconds

   page.waitForSelector("",{state:"visible"}) // wait for visible state

   page.waitForURL("**/url")

})