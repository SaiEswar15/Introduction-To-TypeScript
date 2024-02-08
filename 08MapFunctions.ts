//practice 01

let arr = ["eswar","kumar","sai","pendurthi"];
// let arr = [1,2,3,4,5];

let result = arr.map((el)=>{
    // return `hai this is ${el}`
    return 1;
})

console.log(result)

//here you might think that we used the annotation for el 
//as (el : string)
//but it is not required because ts is smart enough to identify the datatype
//uncomment one arr and see whether the el is changing datatypes 

//but there is a catch
//it could identify the el datatype getting inside the map 
//but not the return type 
//which can be changed any time.
//uncomment one return and see the datatype of result
//it will change along which should not be done
//because anyone can change it 

//the solution is to use strict annotation
//like this : practice 02

//practice 02

let arr2 = ["eswar","kumar","sai","pendurthi"];
// let arr2 = [1,2,3,4,5];

let result2 = arr.map((el):number=>{
    // return `hai this is ${el}`
    return 1;
})

console.log(result2)
