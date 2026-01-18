try
{   
  
    let arr=new Array(-1) // range error
    console.log(arr);
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
            