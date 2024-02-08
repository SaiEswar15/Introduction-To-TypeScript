"use strict";
//now that we completed the variables and functions 
//now we come to objects 
//yes objects also misbehave in js so we use ts
Object.defineProperty(exports, "__esModule", { value: true });
//generally we use objects like this 
var data = {
    name: "eswar",
    age: 24,
    isActive: true
};
//but we dont use the objects like this 
//in real world we pass these objects into functions 
//and return functions
function sendData(_a) {
    var name = _a.name, age = _a.age, isActive = _a.isActive;
}
sendData({ name: "kumar", age: 20, isActive: false });
//there can be wrong data being sent 
//like instead of number if there is wrong entry of string "20"
function sendData1(_a) {
    var name = _a.name, age = _a.age, isActive = _a.isActive;
}
sendData1({ name: "kumar", age: "20", isActive: false });
//you couldnt find the error 
//so we should use ts for strict usage 
function sendData2(_a) {
    var number = _a.age;
    return age;
}
console.log(sendData2({ age: 20 }));
