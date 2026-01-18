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

    // setter method are useful to change the property of class object
    changeAge(age)
    {
        this.actualage=age
    }

    setPrice(price)
    {
        this.actualprice=price
    }

}

const s1=new Student("Amit",27,250,false,"API")
const s2=new Student("Ajinkya",26,350,true,"All Course")

s1.changeAge(30)

console.log(s1.actualage);












