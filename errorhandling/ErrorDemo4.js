let age=15

function checkage(agetocheck)
{
    if(age<agetocheck)
    {
        console.log("Not Eligible");
    
        //const err=new Error("Please wait for sometime may be after after 18")
        
        throw new Error("Please wait for sometime may be after after 18")
    }
    else
    {
        console.log("Eligible");
        
    }
}

/*
try 
{
    if(age<18)
    {
        console.log("Not Eligible");
    
        const err=new Error("Please wait for sometime may be after after 18")
        
        throw err
    }
    else
    {
        console.log("Eligible");
        
    }
    
} catch (error) 
{
    console.log(error.message);
    
}
    */