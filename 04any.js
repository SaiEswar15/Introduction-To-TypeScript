"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status;
//here we get an error under status we cannot declare globally 
//wecan solve by using  export {} look at the end and comment this line
//then you can see the error
function check() {
    return 'eswar';
}
status = check();
console.log(status);
//we can even change the entire value
status = 24;
console.log(status);
//practice 02
var status1;
function check1() {
    return "eswar";
}
status1 = check1();
console.log(status1);
//now try changing the return to number or boolean
