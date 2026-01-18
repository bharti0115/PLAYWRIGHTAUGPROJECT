import { expect, test } from "@playwright/test";

let testdata=
[

  {id:"TC001",name:"Sarika",email:"sarika190@gmail.com",password:"password@1234"},

  {id:"TC002",name:"Bhupendra",email:"Bhupendra9657@gmail.com",password:"password@1234"},

  {id:"TC003",name:"Sandeep",email:"Sandeep2258@gmail.com",password:"password@1234"}

]

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




