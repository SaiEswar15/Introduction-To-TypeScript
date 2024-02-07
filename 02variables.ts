//practice 1
let employeeName = "eswar"
    //generally we write variable like this but to be specific
    //about the datatype we should use TS

//practice 2
let ownerName: string = "kumar"
console.log(ownerName);

    //it consoles fine 
    //but if any other developer working on your code 
    //he might change it and may give a number 
    //like :

//practice 3 :
//uncomment and see this :
/*ownerName = 45;
console.log(ownerName);*/


    //this gives you an error 
    //but if you execute the js your output will be 45
    //uncomment and try executing both ts and js you will find out

    //similarly we can see this in number and boolean also

let number1: number = 12;

//uncomment and see
/*number1 = "eswar";*/

console.log(number1);