try
{   
    let num=100
    num.toUpperCase()
}
catch(err)
{
    console.log("This reference is not valid");
    console.log(err.name);
    console.log(err.message);
   //console.log(err.stack);
}
finally
{
    console.log("Exiting From Program");
    
}
            