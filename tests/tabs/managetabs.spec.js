// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Manage Tabs", async ({ browser }) => 
  {

    // Create a new browser context (like a fresh user profile)
    let context = await browser.newContext();

    // Get all open pages in this context (currently none since it's new)
     //context.pages();

    // Open a new page (tab) in this context
    let page = await context.newPage();

    // Navigate to the login page
    await page.goto("https://freelance-learn-automation.vercel.app/login");

   // page.waitForTimeout(5000)

    // Wait for a new page (Facebook login) to open when clicking the Facebook link
    // Using Promise.all to ensure both: 
    // 1) we wait for "page" event (new tab), and 
    // 2) we click on the Facebook link
    let [facebookpage] = await Promise.all
    (
    [
      context.waitForEvent("page"),
       // Waits until a new page is opened
      await page.locator("(//a[contains(@href,'facebook')])[1]").click() // Clicks on Facebook login button
    ]
    );

    //facebookpage.waitForTimeout(5000)

    // From the Facebook page, click "Create new account" 
    // and again wait for a new tab (account creation page) to open
    let [accountpage] = await Promise.all([
      context.waitForEvent("page"), // Waits for new page (Create Account page)
      await facebookpage.getByText("Create new account").click() // Clicks on 'Create new account'
    ]);

    //accountpage.waitForTimeout(5000)

    //await facebookpage.bringToFront()

    // Close the first page (login page)
    page.close();

    // Close the entire browser context (all tabs inside this context)
    //context.close();

    // Finally, close the browser
    //browser.close();

});
