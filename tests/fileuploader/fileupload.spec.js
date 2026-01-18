// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Upload new file", async ({ page }) => 
{
    // test.setTimeout(120000)

    //page.setDefaultTimeout(15000)

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("admin123")

    await page.locator("//button[normalize-space()='Login']").click()

    await page.getByText("Recruitment").click()

    await page.locator("//button[text()=' Add ']").click()

    let waitforfile=page.waitForEvent("filechooser",{timeout:45000})

    await page.locator("//div[text()='Browse']").click()

    let fileuploder=await waitforfile

    await fileuploder.setFiles("./testdata/InterviewQuestion.docx")

    //await fileuploder.setFiles("./testdata/playwright/js/mukesh/..")

    await page.waitForTimeout(15000)

})