// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

// Test 1: Valid login and logout scenario
test("Valid login test", async function ({ page }) {
  
  // Navigate to the login page of the app
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  // Fill the email field with typing effect (slow typing for demo/training)
  await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com", { delay: 200 });

  // Alternative approach (typed out fast, currently commented)
  // await page.getByPlaceholder("Enter Password").type("admin@123");

  // Fill the password field slowly as well
  await page.getByPlaceholder("Enter Password").pressSequentially("admin@123", { delay: 200 });

  // Click the "Sign in" button using `.getByText().last()` to avoid strict mode error
  await page.getByText("Sign in").last().click();

  // After login, click on the hamburger menu (menu icon)
  await page.getByAltText("menu").click();

  // Click the "Sign out" option in the menu
  await page.getByText("Sign out").click();

  // Assert that after logout, user is redirected back to the login page
  await expect(page).toHaveURL(/login/);
});


// Test 2: Skipped test (playground/testing disabled elements)
test.skip("Working on disabled element", async function ({ page }) {
  
  // Open a demo page containing disabled elements
  await page.goto("https://seleniumpractise.blogspot.com/2016/09/how-to-work-with-disable-textbox-or.html");

  // Try to fill a disabled textbox (will fail unless removed 'disabled' attribute)
  await page.locator("#pass").fill("mukesh otwani");

});
