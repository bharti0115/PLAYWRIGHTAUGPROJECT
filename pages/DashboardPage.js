import { LoginPage } from "./LoginPage"

class DashboardPage{

    #menu
    #signout
    #welcomemsg

    constructor(page)
    {
        this.page=page
        this.#menu=page.locator("//img[@alt='menu']")
        this.#signout=page.locator("//button[normalize-space()='Sign out']")
        this.#welcomemsg=page.locator(".welcomeMessage")
    }

   async capturewelcome()
    {
      return this.#welcomemsg
    }

    async logoutfromapplication()
    {
        await this.#menu.click()
        await this.#signout.click()
    }


}

export {DashboardPage}