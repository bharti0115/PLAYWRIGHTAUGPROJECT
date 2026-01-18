import {RBI} from "./Bank.js"

class SBI extends RBI
{
    sbiheadoffice="Delhi"
    numberofempforsbi=9000

    // hidden constructor when you dont explicit and this constructor will call parent class cons automatically

    // super always refers to parent class
    // this always refers to current class

    constructor()
    {
        super()
        console.log("Welcome To SBI");

    }

    kyc()
    {
        console.log("Customer can finish KYC Online Using AADHAR Verification");
 
    }


    deposit()
    {
        console.log("Customer can deposit the amount");
        
    }
    withdraw()
    {
        console.log("Customer can with the amount");
    }

    internetbanking()
    {
        console.log("Customer can use internet banking");
    }
}

// if I create object of child class then we can access base + child class
// if I create object of base class then I can only access base class
const obj1=new SBI()

// kyc is available in base class and in child class as well
obj1.kyc()

obj1.getsalaryofhead() // we can access private fields using getter of that class


/*
obj1.deposit()

obj1.internetbanking()

obj1.withdraw()

console.log(obj1.headoffice);

console.log(obj1.sbiheadoffice);

console.log(obj1.numberofemp);

console.log(obj1.numberofempforsbi);
*/



