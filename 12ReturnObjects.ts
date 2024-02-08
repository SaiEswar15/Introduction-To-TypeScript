function returnObject({first : string,age : number,hasMobile : boolean}):{}
{
    return {};
}

console.log(returnObject({first : "esar", age : 89, hasMobile : true}));

//which is not good way

//the good way to type check the object
interface MyObject{
    name : string,
    age : number
}

function testingObject({name,age} : MyObject) : string
{
    return name;
}

console.log(testingObject({name : "eswar", age : 10}));

//no use of Object datatype
let obj12 : Object = {
    name : "eswar",
    age : 12
}

obj12 = "12";

console.log(obj12);

export {};

