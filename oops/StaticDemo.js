class Student{


    // belongs to class
    // you dont need to create object in order to access static fields static member
    static trainerName="Mukesh Otwani"

    // In order to call static method no need of Object you can call using ClassName
    static getTrainerDetail()
    {
        console.log(`Trainer For This Batch Would be ${Student.trainerName}`);
        
    }

    constructor(name,city)
    {
        console.log(`Trainer For This Batch Would be ${Student.trainerName}`);
        this.name=name
        this.city=city

    }

}

console.log(Student.trainerName);
Student.getTrainerDetail()


