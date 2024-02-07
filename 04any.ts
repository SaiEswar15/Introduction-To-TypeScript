let status;

    //here we get an error under status we cannot declare globally 
    //wecan solve by using  export {} look at the end and comment this line
    //then you can see the error

function check()
{
    return 'eswar'
}

status = check();
console.log(status);
    //we can even change the entire value
status = 24;
console.log(status);

    //hower over the status and see the datatype of status
    //what will it be ??

    //anyone can change it to number or boolean 
    //try changing it and you cannot find any error
    //to solve this issue we use annotation like //practice 02

//practice 02
let status1: string;
function check1()
{
    return "eswar"
}
status1 = check1();
console.log(status1);

//now try changing the return to number or boolean

export {}