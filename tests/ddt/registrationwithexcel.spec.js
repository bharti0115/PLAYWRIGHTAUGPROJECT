import { expect, test } from "@playwright/test";
import XLSX from "xlsx"

function readexcel(excelpath,sheetname)
{

    const workbook=XLSX.readFile(excelpath)
    
    // read complete sheet
    const worksheet=workbook.Sheets[sheetname]
    
    // if we dont use headers then we get array of Objects if we include headers then it return array of array
    const data=XLSX.utils.sheet_to_json(worksheet,{header:1})
   
   // Array of object 
   const users=[]

   // number of rows
   for(let i=0;i<data.length;i++)
   {
        const row=data[i]
        
        users.push(
          {
            id:i+1,
            name:row[0],
            email:row[1],
            password:row[2]
          }
        )
   }


   return users

}

const datafromexcel=readexcel("./testdata/SamplePlaywright.xlsx","Sample")


for(let data of datafromexcel)
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




