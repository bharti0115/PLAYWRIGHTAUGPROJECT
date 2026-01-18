import { expect, test } from "@playwright/test";

test("Manage Frames ", async ({ page }) => 
{
    await page.goto("https://www.redbus.in/")

    await page.locator("//div[text()='Account']").click()

    await page.locator("//button[normalize-space()='Log in']").click()

    let googlepopup=page.waitForEvent("popup")

    await page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click({force:true})
    
    let googlelogin=await googlepopup
    
    await googlelogin.locator("//input[@id='identifierId']").fill("selenium3bymukesh@gmail.com")

    await googlelogin.locator("//span[text()='Next']").click() 


});
