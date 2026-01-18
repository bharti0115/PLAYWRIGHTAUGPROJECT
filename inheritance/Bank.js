class RBI
{
    headoffice="Mumbai"
    numberofemp=500
    #salaryofhead=300000 // whenever we have private fields only that class method and constructor can access
    
    //temp
    constructor()
    {
        console.log("Welcome To RBI"); 
    }
     
    kyc()
    {
        console.log("Complete KYC offline before start using Banking Services");
        
    }

    getsalaryofhead()
    {
        console.log(` Headoffice is ${this.headoffice}`);
        
        console.log(`Salary of head of RBI is ${this.#salaryofhead}`);
        
    }

}

export {RBI}