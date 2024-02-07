//practice 01
    //generally we write our functions as 

function test()
{
    return "eswar";
}

console.log(test)

//practise 02
    //now consider the example where we are sending the parameters

function test1(a,b)
{
    return a+b;
}

console.log(test1(12, 13))

    //now hover over the parameters and see the datatype
    //what does it show ?
    //which means anyone can change the values and does nt care about datatype
    //and you will not know
    //like example practice 03

//practice 03
function test2(a,b)
{
    a = "eswar";
    b = "kumar"
    return a+b;
}

console.log(test2(12, 13))

    //your answer will be eswar kumar instead of 25
    //to avoid these mistakes we can use TS like practice 04

//practice 04
function test4(a:number,b:number)
{
    /*a = "eswar";
    b = "kumar"*/
    return a+b;
}

console.log(test4(12, 13))

    //now uncomment and see that the changing the datatype is not possible

//similarly we can use it in arrow functions

//practice 05
let test5 = (a:number,b:number)=>
{
    /*a = "eswar";
    b = "kumar"*/
    return a+b;
}
console.log(test4(12, 13))

    //now uncomment and see that the changing the datatype is not possible

//practice 06

    //if you dont want to send the arguments for one of them 
    //it will show you an error
    //uncomment and see

let test6 = (a:number,b:number, c:number)=>
{
    return a+b+c;
}
/*console.log(test6(12, 13))*/

    //to solve this error we can use default parameters like practice 7

//practice 07

    let test7 = (a:number,b:number, c:number=1)=>
    {
        return a+b+c;
    }
    console.log(test7(12, 13))

    //this will solve your error
