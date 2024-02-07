//practice 01

    //we hve learn that the parameters hold the datatype any
    //so we have to use the annotation
    //and it will not allow the user to change datatype in between
    //but what if you consider the example 

function testing(a : number,b : number,c : number)
{
    return "eswar"
}

testing(2,3,4)

    //here we can see that we need addition of the three numbers 
    //but the return type is not we expected 
    //so hover over the test() and see the return datatype 
    //what is it ?
    //so it is not good 
    //so we have to give our datatype what to return
    //which can be solved like practice 02


//practice 02
function testing2(a : number,b : number,c : number):number
{
    // return "eswar"
    return a+b+c;
}

testing2(2,3,4)

    //uncomment line 27 above and see 

//practice 03
    //using arrow functions 

let testing3 = (a : number,b : number,c : number):number=>
{
    // return "eswar"
    return a+b+c;
}

testing3(2,3,4)