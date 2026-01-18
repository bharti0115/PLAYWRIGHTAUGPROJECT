
import { expect, test } from "@playwright/test";


test.use(

    {
        
        ignoreHTTPSErrors:true,

        acceptDownloads :true,

        locale: 'en-US', 

        baseURL:"https://staging-learn-automation.vercel.app"

        
    }


)

test("Check home page", async function ({ page }) 
{
    
    await page.goto("/")

    await page.waitForTimeout(5000)


});


test("Check practise page", async function ({ page }) 
{
    
    await page.goto("/practise")

    await page.waitForTimeout(5000)


});

test("Check Login page", async function ({ page }) 
{
    
    await page.goto("/login")

    await page.waitForTimeout(5000)


});