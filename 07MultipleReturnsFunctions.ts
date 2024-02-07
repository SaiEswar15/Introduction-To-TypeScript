    //till now we have the strict return type and strict parameters 
    //for the functions 

    //but there are situations we dont only return the
    //value of single datatype there can be multiple
    //consider the example 

//example 1:
function solve(name : string)
{
    if(name === "eswar")
    {
        return true;
    }
    else if(name === "kumar")
    {
        return 12
    }
    else
    {
        return "404"
    }
}

solve("eswar")

    //here we have multiple returns 
    //we can change any of them which is not good
    //so we have to use the annotation
    //but using annotation will lead to error 
    //because all are of different datatypes
    //uncomment //example 2 and see

//example 1:

/*function solve1(name : string):boolean
{
    if(name === "eswar")
    {
        return true;
    }
    else if(name === "kumar")
    {
        return 12
    }
    else
    {
        return "404"
    }
}

solve1("eswar")*/

//this will be discussed later need more knowledge



