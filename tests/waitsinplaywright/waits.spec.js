// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test.skip("Auto wait", async ({ page }) => 
{
   await page.goto("https://seleniumpractise.blogspot.com/2025/08/loader-demo.html")
   
   await page.locator("//button[text()='Start with Fast Loader']").click()

   await page.getByPlaceholder("Type your name...").fill("Playwright With JS")

})

test("Auto wait For Hidden Element", async ({ page }) => 
{
   
   test.setTimeout(120000) //120 seconds 2 min

   page.setDefaultTimeout(10000) // for all actions

   await page.goto("https://seleniumpractise.blogspot.com/2025/08/loader-demo.html")
   
   await page.locator("//button[text()='Start with Slow Loader']").click()

   //page.waitForTimeout(50000)

   //let loader=page.locator("//div[@id='la-loader-spin']")
   // wait for visible by default
   // await loader.waitFor({state:"hidden",timeout:80000})

   // wait max till 90 seconds until its hidden
   await page.locator("//div[@id='la-loader-spin']").waitFor({state:"hidden",timeout:90000})

   await page.getByPlaceholder("Type your name...").fill("Playwright With JS")

})

test("Wait For Title", async ({ page }) => 
{

   await page.goto("https://www.google.com/")
   
   await expect(page).toHaveTitle("Automation",{timeout:10000})



})

test("Wait For URL", async ({ page }) => 
{

   await page.goto("https://www.google.com/")
   
   await expect(page).toHaveURL("**/login",{timeout:15000})


})

test("Wait For Text", async ({ page }) => 
{

   await page.goto("https://www.google.com/")
   
   await expect(page.locator("btnK")).toHaveText("Mukesh",{timeout:20000})
   

})

