// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Create new course", async ({ page }) => 
  {

  test.setTimeout(120000)  

  // 1) Navigate to the Login page
  await page.goto("/login");

  // 2) Type credentials with artificial delay to simulate slow typing
  await page.getByPlaceholder("Enter Email")
            .pressSequentially("admin@email.com", { delay: 50 });

  await page.getByPlaceholder("Enter Password")
            .pressSequentially("admin@123", { delay: 50 });

  // 3) Click the last "Sign in" button (in case multiple matches exist)
  await page.getByText("Sign in").last().click();

  // 4) Navigate through dashboard:
  //    - Click exact "Manage" (disambiguates from partial matches)
  await page.getByText("Manage", { exact: true }).click();

  //    - Click the "manage course" card/image via alt text
  await page.getByAltText("manage course").click();

  //    - Open "Add New Course" form
  await page.getByText("Add New Course ").click();

  // 5) Upload thumbnail image by setting the file to the input#thumbnail
  //    NOTE: Path must exist on the machine where tests run.
  await page.setInputFiles("#thumbnail", "testdata/SampleImage.png");

  let coursename="Sample Course "+Date.now()

  // 6) Slowly type course details into fields
  await page.locator("#name").pressSequentially(coursename, { delay: 50 });

  await page.locator("#description").pressSequentially("Sample Course Description", { delay: 50 });
  await page.locator("#instructorNameId").fill("")
  await page.locator("#instructorNameId").pressSequentially("Sahil", { delay: 50 });
  await page.locator("#price").clear()
  await page.locator("#price").pressSequentially("500", { delay: 50 });

  await page.locator("//input[@name='startDate']").click()

  await page.locator("//div[text()='23']").click()

  await page.locator("//input[@name='endDate']").click()

  await page.locator("//div[text()='30']").last().click()

  await page.locator("//div[normalize-space()='Select Category']").click();
    
  await page.locator("//button[normalize-space()='AWS']").click();

  await page.locator("//button[normalize-space()='Save']").click();

  await page.waitForTimeout(1000)

  await expect(page.locator("//td[text()='"+coursename+"']")).toBeVisible()

  await page.locator("//td[text()='"+coursename+"']//following::button[1]").click()

  await expect(page.locator("//td[text()='"+coursename+"']")).not.toBeVisible()

  await page.getByAltText("menu").click()

  await page.getByText("Sign out").click()

  await expect(page).toHaveURL(/login/)
  
  
});
