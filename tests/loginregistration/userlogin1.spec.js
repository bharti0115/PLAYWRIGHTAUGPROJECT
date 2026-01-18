
import { expect, test } from "@playwright/test";


test("Valid login test", async function ({ page }) {
  
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  try 
  {
    await page.getByPlaceholder("Playwright").pressSequentially("admin@email.com", { delay: 200 ,timeout:5000});

  } catch (error) 
  {
    console.log("Could not find the element");

    console.log(error.message);

    console.log(error.name);
  }

  await page.getByPlaceholder("Enter Password").pressSequentially("admin@123", { delay: 200 });

  await page.getByText("Sign in").last().click();

  await page.waitForTimeout(5000)

});



