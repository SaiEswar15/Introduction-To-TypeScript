//consider a type object and there are properties
//now create an object according to the type 
//after creating an object you dont want to changethe value 
//then readonly comes into picture
//if you want property to be optional this also helps 

//step1 
type userData = {
    name : string;
    age : number;
    isActive : boolean;
    
}

//step2 : using this object as reference pass the object

function createUser(data : userData):userData
{
    data.age = 24;
    data. name = "kumar"

    return {name : "eswar", age : 23, isActive : false}
}

createUser({name : "eswar", age : 23, isActive : false})


//now we are able to change the data
//but we shouldnt be able to change age

//example 3 ;

type userData1 = {
    name : string;
    readonly age : number;
    isActive : boolean;
    
}

function createUser1(data : userData1):userData1
{
    /*data.age = 24;*/
    //uncomment and see that age changing is not allowed
    data.name = "kumar";

    return {name : "eswar", age : 23, isActive : false}
}

createUser1({name : "eswar", age : 23, isActive : false})


//example 4

//we dont to pass one property even if it is inside type what can we do

type userData2 = {
    name : string;
    readonly age : number;
    isActive : boolean;
    creditNumber ?: number;
    hasBankAccount ?: boolean
    
}

function createUser2(data : userData2):userData2
{
    return {name : "eswar", age : 23, isActive : false, hasBankAccount : true}
}

createUser2({name : "eswar", age : 23, isActive : false})

//if the property is optional we can ignore or we can send 


//practice 05
//mix matching the types 

type userName = {
    name : string;
}

type userAge = {
    age : number
}

type userDetails = userName & userAge & {
    dateOfBirth : string
}

function createuserData(details : userDetails):userDetails
{
    return {name : "eswar", age : 34, dateOfBirth : "august"}
}

createuserData({name : "eswar", age : 34, dateOfBirth : "august"})

//you can apply readonly and optional if you want 
//this is mix matching of type of objects


