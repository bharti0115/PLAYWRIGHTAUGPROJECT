try 
{
    let response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    
    console.log(response)
          
} catch (error) 
{
    console.log("Could not fetch the API");  

    if(error instanceof ReferenceError)
    {

    }
    else if(error instanceof SyntaxError)
    {

    }
    else if(error instanceof TypeError)
    {

    }
    else if(error instanceof URIError)
    {
        
    }
    else{
        

    }
}

