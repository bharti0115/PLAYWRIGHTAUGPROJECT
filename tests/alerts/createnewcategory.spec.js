// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";


test("Create New Category Test", async ({ browser }) => 
{
    let context = await browser.newContext();

    let page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

   
  await page.getByPlaceholder("Enter Email")
            .pressSequentially("admin@email.com", { delay: 50 });

  await page.getByPlaceholder("Enter Password")
            .pressSequentially("admin@123", { delay: 50 });

  
  await page.getByText("Sign in").last().click();

  await page.getByText("Manage", { exact: true }).click();

  let newpage=context.waitForEvent("page")

  await page.getByAltText("manage category").click()

  let categorypage=await newpage

/*

  let [category]=Promise.all([

    context.waitForEvent("page"),

    await page.getByAltText("manage category").click()


  ])
*/

  categorypage.on("dialog", (dialog)=>
  {
    dialog.accept("Playwright")

  })

  
  await categorypage.locator("//button[text()='Add New Category ']").click()

  await page.waitForTimeout(2000)

  await expect(categorypage.locator("//td[text()='Playwright']")).toBeVisible()

  await categorypage.locator("//td[text()='Playwright']//following::button[1]").click()

  await page.waitForTimeout(2000)

  await categorypage.locator("//button[text()='Delete']").click() 

  await expect(categorypage.locator("//td[text()='Playwright']")).not.toBeVisible()


});






















