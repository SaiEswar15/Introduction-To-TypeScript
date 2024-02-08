//sometimes we dont want to return or void 
//is that possible - yes 
//when you are using the throw err

function handleErrors(str : string)
{
    throw new Error(str);
}
handleErrors("invalid input")

//here the function returns the void 
//which means anyone can change the code like 

function handleErrors1(str : string)
{
    return "eswar";
    throw new Error(str);
}
handleErrors1("invalid input")

//now the return becomes string 
//which obviously we dont want 
// we also dont want void 
//in these cases  we use the never

function handleErrors2(str : string):never
{
    // return "eswar";
    throw new Error(str);
}
handleErrors2("invalid input")

//uncomment the return and you can see the error