import {test,expect} from '@playwright/test'


test("Round1 ", async ({page})=>
{
    test.setTimeout(60000)
 
    await page.goto("https://freelance-learn-automation.vercel.app/login",{waitUntil:"load"})

     page.url().includes("login")

     expect(page.url()).toBe("https://freelance-learn-automation.vercel.app/login")
     await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    //await page.getByPlaceholder("Enter Password").fill("admin@123")
    //await page.pause()
    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:100})
    await page.getByText("Sign in").last().click()
    
    
     expect(page.url()).toBe("https://freelance-learn-automation.vercel.app/")
     console.log(page.url());
     (page.url()).includes("vercel.app")
    await  page.locator("//span[text()='Manage']").click({delay:300})
     await  page.locator("//a[text()='Manage Courses']").click({delay:300})
     expect(page.url()).toBe("https://freelance-learn-automation.vercel.app/course/manage")
     console.log(page.url());
     (page.url()).includes("course")
     await page.getByText("Add New Course ").click({delay:300})
     await page.getByText("Save").click({delay:300})
     let errrmsg=await page.locator("//h2[@class='errorMessage']").textContent({timeout:100})
    console.log(errrmsg);
     let errrmsg2=await page.locator("//h2[@class='errorMessage']").innerText({timeout:100})
     console.log(errrmsg2);
     let errrmsg3=await page.locator("//h2[@class='errorMessage']").allInnerTexts({timeout:100})
     console.log(errrmsg3);
     await page.locator("#name").fill("xy")
     await page.locator("#description").fill("DESCR")
     await page.locator("#instructorNameId").fill("XYZK")
     await page.locator("#price").fill("2000")
     await page.locator("//div[text()='Select Category']").click()
      await page.locator("//button[text()='Cypress']").click({timeout:100})
      await page.getByText("Save").click({delay:300})
       console.log("*********************************");
     let errrmsg4=await page.locator("//h2[@class='errorMessage']").textContent({timeout:100})
    console.log(await page.locator("//h2[@class='errorMessage']").innerText());
     console.log(await page.locator("//h2[@class='errorMessage']").allInnerTexts());
   // page.waitForTimeout(10000000)
   let inpuFiles= page.waitForEvent("filechooser")
    await page.locator("#thumbnail").click()
    let fileuploader=await inpuFiles
    
    await fileuploader.setFiles("./testdata/SampleImage.png")
    await page.getByText("Save").click({timeout:20000})
    expect(page.url()).toBe("https://freelance-learn-automation.vercel.app/course/manage")
    page.url().includes("manage")
    let deleteButtonStatus=await page.locator("//td[text()='xy']/..//following-sibling::td/button[text()='Delete']").isVisible()
     console.log((deleteButtonStatus));
     await page.locator("//td[text()='xy']/..//following-sibling::td/button[text()='Delete']").click()
-    await expect(page.locator("//td[text()='xy']/..//following-sibling::td/button[text()='Delete']")).not.toBeVisible()
     
   
})