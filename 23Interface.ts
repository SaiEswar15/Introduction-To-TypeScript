    //till now we have been using type 
    //type is to give a structure for the object and use them 
    //but interface is even more 

    //interface is like the loose form of class
    //class contains both properties and also the functions 

    //can type have functions ?
    //try

type createModel = {
    name : string;
    age : number;
    getData() : string;
}

//we can send this model for creating an object
//like this 

type User= {
    firstname : string,
    lastname : string,
    age? : number,
    readonly _id : number,
    bankName ?: string,
    bankId ?: number,
    getName() : string
}

let newDataObject: User = {firstname : "eswar",lastname : "esss", _id : 2000, getName()
{
    return "success"
}}

console.log(newDataObject.getName());


//but using the interface 
//creating object with interface model 

interface User1 {
    firstname : string,
    lastname : string,
    age? : number,
    readonly _id : number,
    bankName ?: string,
    bankId ?: number,
    getName() : string,
    getCoupon(code : string) : string
}

let newDataObject1: User1 = {firstname : "eswar",lastname : "esss", _id : 2000, getName()
{
    return "success"
},
getCoupon(name) //remeber to send params even if it doesnt show error
{
    return name;
}}

console.log(newDataObject1.getCoupon("aha10"),"interface");
