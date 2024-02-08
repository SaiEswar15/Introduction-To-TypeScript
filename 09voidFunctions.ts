//now we know hoew to strictly return datattype 
//but there can be cases where you dont return any thing 

//example 1 :

function casualFunction(a : string)
{
    console.log(a);
}

casualFunction("eswar")

//now we dont want to return any thing and want to be empty
//but anyone can change it by adding return like //example 2 :

//example 2 :

function casualFunction2(a : string)
{
    console.log(a);
    return a;
}

casualFunction2("eswar")

//this will make my void return to string 
//which i dont want to do 
//the solution is strictly making it void like example 3

//example 3 :

function casualFunction3(a : string): void
{
    console.log(a);
    // return a;
}

casualFunction3("eswar")

//uncomment the return and this will show you error



