//now that we completed the variables and functions 
//now we come to objects 
//yes objects also misbehave in js so we use ts

//generally we use objects like this 

let data = {
    name : "eswar",
    age : 24,
    isActive : true
}

//but we dont use the objects like this 
//in real world we pass these objects into functions 
//and return functions


function sendData({name, age, isActive})
{

}

sendData({name : "kumar", age : 20, isActive : false,})

//there can be wrong data being sent 
//like instead of number if there is wrong entry of string "20"

function sendData1({name, age, isActive})
{

}

sendData1({name : "kumar", age : "20", isActive : false})

//you couldnt find the error 
//so we should use ts for strict usage 


//==========doubt================//
/*function sendData2({age : number})
{
    console.log(age);
    return age;
}

console.log(sendData2({age : 20}))*/
//==========doubt================//


function sendData3({name, age, isActive})
{

}

/*sendData3({name : "kumar", age : 20, isActive : false,email : "eswar@gmail.com"})*/

//it is not accepting because we should strictly give them
//uncomment above code you will find error
//but this can be solved by using 

function sendData4({name, age, isActive})
{

}

let ddata = {name : "kumar", age : 20, isActive : false,email : "eswar@gmail.com"}
sendData4(ddata)



export {}