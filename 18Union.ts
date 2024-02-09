let score ;

score = 12;

score = "22";

//now hover over the score and see thae datatype
//what is it ? 
//so it is not good 

//we are not sure between it might be number or string so 
//we can use the union 

let score1: number | string;

/*score1 = true;*/
//uncomment and see 
// you can find the error

score1 = 34;
score1 = "eswar"

//when the return type is not sure but it might be between number and boolean
//in such cases you can use these unions

//consider you are having empty array which may take array of numbers or strings 

let arrOfEither: number[] | string[] ;

arrOfEither = [1,2,3,4];
arrOfEither = ["pad", "mat", "ate"];

//this will accept the array of numbers or strings but not both
//try this 
//uncomment and see

/*arrOfEither = [1,2,3,"34"]*/

//what if you want see both containing array

let arrOfEitherElements: (number | string)[] ;
arrOfEitherElements = [1,2,3,"45"];

//this will work