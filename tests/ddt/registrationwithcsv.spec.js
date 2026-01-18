import { expect, test } from "@playwright/test";

import Papa from "papaparse"

import fs from "fs"


function readcsv(csvpath)
{
    // load the file and read as text
    const mylocaldata=fs.readFileSync(csvpath,"utf-8")

    const parseddata=Papa.parse(mylocaldata,{header:true,skipEmptyLines:true,dynamicTyping:false})

    return  parseddata.data
}

const testdata=readcsv("./testdata/data_new.csv")

console.log(testdata);


for(let data of testdata)
{

  test("Verify user creation "+data.id, async function ({ page }) {

  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await page.getByText("New user? Signup").click();

  let signUpBtn = await page.getByText("Sign up").last();

  await expect(signUpBtn).toBeDisabled();

  await expect(signUpBtn).not.toBeEnabled();

  await page.getByPlaceholder("Name").fill(data.name);

  await page.getByPlaceholder("Email").fill(data.email);
  
  await page.getByPlaceholder("Password").fill(data.password);

  await page.getByText("Selenium").click();

  await page.locator("#gender1").click();

  await page.locator("#state").selectOption("Karnataka");

  await page.locator("#hobbies").selectOption(["Playing", "Swimming", "Singing"]);

  await expect(signUpBtn).toBeEnabled();

  await signUpBtn.click();

  await expect(page.getByText("Signup successfully, Please login!")).toBeVisible();
});


}




