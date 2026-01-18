// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

/*

    accept - accept the alert
    dismiss- dismiss the alert - by default playwright will dismiss all JS alert
    message- capture the text then we can use verification
    accept("")- Type for JS Prompt

*/

test.skip("Manage Normal Alerts", async ({ page }) => 
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    //await page.wai

    page.on("dialog", (dia)=>
    {
        expect(dia.message()).toBe("I am a JS Alert")

        dia.accept()

    })

    await page.locator("//button[normalize-space()='Click for JS Alert']").click()

    await page.waitForTimeout(5000)

});



test.skip("Manage Confirm Alerts", async ({ page }) => 
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", (dia)=>
    {
        expect(dia.message()).toBe("I am a JS Confirm")

        dia.dismiss() // cancel or no 

    })
    
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

    await page.waitForTimeout(15000)

});

test("Manage Prompt Alerts", async ({ page }) => 
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    
    page.on("dialog", (dia)=>
    {
        expect(dia.message()).toBe("I am a JS prompt")

        dia.accept("Playwright With JavaScript")

    })
    

    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

    await page.waitForTimeout(15000)

});

test("Manage Prompt Alerts Doubt", async ({ page }) => 
{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    
    page.once("dialog", (dia)=>
    {
        dia.accept("Playwright With JavaScript")

    })
    
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()


    page.once("dialog", (dia)=>
    {
        dia.dismiss()

    })
    

    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

      page.once("dialog", (dia)=>
    {
        dia.accept()

    })
    

    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()


});