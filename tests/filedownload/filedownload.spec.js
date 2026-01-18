// Import test and expect functions from Playwright test runner
import { expect, test } from "@playwright/test";

test("Download new file", async ({ page }) => 
{

    await page.goto("https://the-internet.herokuapp.com/download")

    let downloadwindow=page.waitForEvent("download")

    await page.locator("//a[text()='some-file.txt']").click()

    let downloadfiles=await downloadwindow

    let downloadpath="./downloads/"+downloadfiles.suggestedFilename()

    //let downloadpath1="./downloads/bhupendra.txt"

    downloadfiles.saveAs(downloadpath)

    expect(downloadpath).toContain("some-file.txt")

    /*

        open txt file then verify the content

    */

    await page.waitForTimeout(5000)

})