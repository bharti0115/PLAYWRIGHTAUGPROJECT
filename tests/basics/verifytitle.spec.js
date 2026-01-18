import {test,expect} from "@playwright/test"

test("Verify Page Title ",async function({page}){

   await page.goto("https://freelance-learn-automation.vercel.app/login")

   let title=await page.title()

   console.log("Title is "+title);
   
   //await page.waitForTimeout(5000) 

   expect(title).toContain("Automation")
/*
   let ele=page.locator("")

   ele.waitFor({state:"visible",timeout:20000},)

   await ele.click()
*/

})

test("Verify Google Title ",async function({page})
{
   await page.goto("http://www.google.com")

   //await page.waitForTimeout(3000) 
   
})