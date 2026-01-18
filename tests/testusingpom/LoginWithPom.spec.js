
import { expect, test } from "@playwright/test";
import {LoginPage} from "../../pages/LoginPage.js"
import { DashboardPage } from "../../pages/DashboardPage.js";

test("Login With Page Object Model", async ({ page}) => 
  {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginpage=new LoginPage(page)

    const dashboardpage=new DashboardPage(page)

    loginpage.loginToApplication("admin@email.com","admin@123")

    await expect(await dashboardpage.capturewelcome()).toContainText("Welcome")

    dashboardpage.logoutfromapplication()

    await expect(page).toHaveURL(/login/)

  });
