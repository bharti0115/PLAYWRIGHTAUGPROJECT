class LoginPage 
{

    #emailfield
    #passwordfiled
    #loginbutton

    constructor(page)
    {
       this.page=page
       this.#emailfield=this.page.locator("#email1") 
       this.#passwordfiled=this.page.locator("#password1")
       this.#loginbutton=this.page.locator("//button[normalize-space()='Sign in']")    
    }

     async loginToApplication(username,password)
    {
            await this.#emailfield.fill(username)
            await this.#passwordfiled.fill(password)
            await this.#loginbutton.click()     
    }


}

export {LoginPage}