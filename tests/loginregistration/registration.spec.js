// Import test and expect functions from Playwright test runner

import { expect, test } from "@playwright/test";


// Test Case: Verify user registration flow
test("Verify user creation", async function ({ page }) {
  // Open the login page

 // await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto("https://freelance-learn-automation.vercel.app/login");

  // Navigate to the Signup page
  await page.getByText("New user? Signup").click();

  //await page.waitForTimeout(5000)

  // Get reference to the disabled "Sign up" button
  //let signUpBtn = await page.getByText("Sign up").nth(2)

  let signUpBtn = await page.getByText("Sign up").last();

  await page.pause()

  // Check if the button is initially disabled
  await expect(signUpBtn).toBeDisabled();
  
  await expect(signUpBtn).not.toBeEnabled();

  // Fill in the signup form
  await page.getByPlaceholder("Name").pressSequentially("Mukesh",{delay:2000})

  await page.getByPlaceholder("Email").fill("Sample112244@gmail.com");

  await page.getByPlaceholder("Password").fill("Mukesh@123");

  // Select skill
  await page.getByText("Selenium").click({force:true});

  // Select gender (Female in this case, id=gender2)
  await page.locator("#gender1").click();

  // Select State from dropdown
  await page.locator("#state").selectOption("Karnataka");

  // Select multiple hobbies
  await page.locator("#hobbies").selectOption(["Playing", "Swimming", "Singing"]);

  // Now the "Sign up" button should be enabled
  await expect(signUpBtn).toBeEnabled();

  // Click on the Sign up button
  await signUpBtn.click();

  // Assert that success message appears
  await expect(page.getByText("Signup successfully, Please login!")).toBeVisible();
});

