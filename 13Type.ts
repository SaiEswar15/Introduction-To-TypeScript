type details = {
    name : string;
    age : number;
    isActive : boolean
}

//remember to use type 
//dont forget to put semi color instead of comma 

function addType(data : details)
{

}
addType({name : "kumar", age : 24, isActive : true})

//here we can see that it shows error till we provide all the values strictly
//remove one key-pair and you can see the error

//now we used the type for the parameetrs strictly 
//but we should also return strictly 
//hover over the function and see the return type 
//what is it ? 
//so 

function addType1(data : details):details
{
    return {name : "kumar", age : 24, isActive : true}
}
addType1({name : "kumar", age : 24, isActive : true})

//now it strictly returns all the properties
