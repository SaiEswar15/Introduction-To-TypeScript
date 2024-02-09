function checkingDatatype(str: number | string)
{
    //we are not sure which datatype is going to come in 
}

checkingDatatype("eswar")
checkingDatatype(34)

//now it is working fine it takes both 
//if you wrong it will not allow 

/*checkingDatatype(true);*/
//uncomment and see

//what if i say this is not still the best case ?
//consider insidde the function there is a functionality tochange the 
//parameter to lowercase or uppercase 
//the function accepts both string and number 
//what if number comes in and inside the function there is uppercase going on 
//this is very big problem 

//example :
function checkingDatatype1(str: string)
{
    //we are not sure which datatype is going to come in 
    str.toUpperCase();
}

checkingDatatype1("eswar")

/*function checkingDatatype2(str: number | string)
{
    str.toUpperCase();
}
checkingDatatype2("eswar")*/

//the ts is not sure even it has only both 
//so we should perform hard checks 
//uncomment and see the error
