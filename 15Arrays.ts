let superheros = [];

    //hover over the superheros and you can see the datatype 
    //what is it ?

    //try pushing the values 

/*superheros.push("spiderman");*/
//uncomment and seee the error 

    //error occured because the dattype is never 
    //solution : you should first change the datatype of the array

/*let superheros1:string = [];
superheros1.push("spiderman");*/
//uncomment and seee the error 

    //still there is error 
    //because it is empty array of never so the solution is 

let superheros2:string[] = [];
superheros2.push("spiderman");

//now this works 
//this can also be written as

let superheros3:Array<string> = [];
superheros3.push("spiderman");

//similarly we can do it for number array

