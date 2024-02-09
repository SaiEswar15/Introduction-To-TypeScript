    //till now we can get either of the array 
    //by using the union

let example: number[] | string[];

example = [1,3,24]
example = ["1", "2","eswar"]

//we can also send 
let example1: (number | string)[];

example1 = [1,3,24,"1", "2","eswar"]
example1 = ["1", "2","eswar",1,3,24]

    //here the order does matter 
    //it checks only if the value is string or number
    //other than this if any datatype enters it gives an error 

/*example1 = ["1", "2","eswar",1,3,24, true]*/
//uncomment and see

    //what if we wanted to send the values in only certain order
    //we can use the tuples

let example2: [number, string];

/*example2 = [1,3,24,"1", "2","eswar"]
example2 = ["1", "2","eswar",1,3,24]
example2 = ["eswar", 2];*/
//uncomment and see it doesnt allows other order

example2 = [2, "eswar"];

//we can use these tuples in the type objects

type newModel1 = {
    name : string;
    age : number
}

type newModel2 = {
    age : number
    name : string;
    
}

let newTupleTypeArr : [newModel1, newModel2];

newTupleTypeArr = [{name :"eswar", age : 23}, {age : 23, name :"eswar"}]

//the problem here is now we can see that newTupleTypeArr contains only two models
//but if we try to push another model with same type it still accepts

newTupleTypeArr.push({name :"kumar", age : 23})

//which means it doesnt check for the length strictly 
//which is one of the confusing thing in tuples


