//practice 01 :
//Number datatype :

let value: number = 24;
console.log(value);

    //here it is too obvious even if we dont use annotation 
    //it will still be the same 
    //this should be done when you are in a team and others keeps changing 
    //so inorder to let them know you can use annotation like :

//practice 02 :

let value1 = "eswar";
//uncomment and see :
/*value1 = 12;*/
console.log(value1);

    //when you assign a value the datatype of the value is given to it 
    //so we cannot change the value of other datatype
    //uncomment and see :
    //so it is unnecessary to write annotation and is obvious writing
    //like example 3

//practice 3
let value2:number = 13;
value2 = 12;
console.log(value2);

    //similarly when using number methods it is obvious we dont need
    //the usage of annotation

//practice 04
let value3:number = 13.344;
value3.toFixed();
console.log(value3);

    //this will be enough
let value4 = 13.344;
value4.toFixed();
console.log(value4);

//similiarly it is for boolean we dont need to write 
//everytime the notation 
//we can only write when you feel someone can change the datatype 