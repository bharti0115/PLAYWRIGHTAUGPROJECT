class Student
{
    // this means current object
    // super keyword parent/super/base
    constructor(name,age,price,isRegular,course)
    {
        this.fname=name
        this.actualage=age
        this.actualprice=price
        this.studentisRegular=isRegular
        this.courseName=course
    }
    // getter method
    getName()
    {
        console.log(`Name of the student is ${this.fname}`);
        
    }

    //getter method
     getPrice()
    {
        console.log(`Price for the course is ${this.actualprice}`);
        
    }

    //getter method
    allInformation()
    {
        console.log(`Student details are ${this.fname} Age : ${this.actualage} Price : ${this.actualprice} Course ${this.courseName}`);
        
    }


     allInformation()
    {
        console.log(`Student details are ${this.fname} Age : ${this.actualage}`);
        
    }
 
}

const s1=new Student("Amit",27,250,false,"API")

const s2=new Student("Ajinkya",26,350,true,"All Course")

s1.getName()

s1.allInformation()









