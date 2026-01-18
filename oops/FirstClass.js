class Student
{
    // public by default
    // # private 
    // _
    constructor(name,age,price,isRegular,course)
    {
        // class variable
        // this means current
        this.fname=name
        this.actualage=age
        this.actualprice=price
        this.studentisRegular=isRegular
        this.courseName=course
    }

    /* only 1 constructor can be created for each class
    constructor(name,age)
    {
        this.fname=name
        this.actualage=age
    }
        */


}

let s1=new Student("Ashish",30,250,true,"Playwright")

let s2=new Student("Ajay",32,350,false,"Selenium")

let s3=new Student("Mukesh",35)

console.log(s3.courseName);









