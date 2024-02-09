"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//standard way of writing the classes
//practice 1:
var Student = /** @class */ (function () {
    function Student(first_name, last_name, age, isMarried) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried;
    }
    Student.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return Student;
}());
var student1 = new Student("sai", "eswar", 25, true);
console.log(student1.last_name);
console.log(student1.getData("hello"));
//practice 2:
//making some variables optional and having default value 
var StudentClass1 = /** @class */ (function () {
    function StudentClass1(first_name, last_name, age, isMarried) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried !== null && isMarried !== void 0 ? isMarried : false;
    }
    StudentClass1.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return StudentClass1;
}());
var student2 = new StudentClass1("sai", "eswar", 25);
console.log(student2.last_name);
console.log(student2.getData("hello"));
//we are able to access and modify the values 
//but we should be able to pass only bu modifier and not whenever we want 
//for this we have to use readonly.
//see the practice 3
student2.last_name = "pendurthi";
console.log(student2.last_name);
//practice 3:
var StudentClass2 = /** @class */ (function () {
    function StudentClass2(first_name, last_name, age, isMarried) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried !== null && isMarried !== void 0 ? isMarried : false;
    }
    StudentClass2.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return StudentClass2;
}());
var student3 = new StudentClass2("sai", "eswar", 25);
console.log(student3.last_name);
console.log(student3.getData("hello"));
//uncomment and see there will be an error and you will not be allowed to 
//update the value.
// student3.last_name = "pendurthi";
console.log(student3.last_name);
//now we are able access them but we don't want to do that even then 
//we have to use the privates
//practice 4 :
var StudentClass4 = /** @class */ (function () {
    function StudentClass4(first_name, last_name, age, isMarried) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried !== null && isMarried !== void 0 ? isMarried : false;
    }
    StudentClass4.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return StudentClass4;
}());
var student4 = new StudentClass4("sai", "eswar", 25);
//uncomment and see you will be not able to access or update the values
//if the function will be given private you will not be able to execute the function also
// console.log(student4.last_name);
console.log(student4.getData("hello"));
// student4.last_name = "pendurthi";
// console.log(student4.last_name);
//simple way of writing class without predefined variables and assigning by this in consructor
//practice 05 :
var StudentClass5 = /** @class */ (function () {
    function StudentClass5(first_name, last_name, age, isMarried) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried;
    }
    StudentClass5.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return StudentClass5;
}());
var student5 = new StudentClass5("sai", "eswar", 25, true);
// console.log(student5.last_name);
console.log(student5.getData("hello"));
// student5.last_name = "pendurthi";
// console.log(student5.last_name);
//now how do we set the default parameter if isMarried is optional 
//and dont want to send inside constructor
//practice 06 :
var StudentClass6 = /** @class */ (function () {
    function StudentClass6(first_name, last_name, age, isMarried) {
        if (isMarried === void 0) { isMarried = false; }
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.isMarried = isMarried;
    }
    StudentClass6.prototype.getData = function (str) {
        return "".concat(str, ", ").concat(this.first_name, " ").concat(this.last_name, " of ").concat(this.age, " who is married : ").concat(this.isMarried);
    };
    return StudentClass6;
}());
var student6 = new StudentClass6("sai", "eswar", 25);
// console.log(student6.last_name);
console.log(student6.getData("hello"));
// student6.last_name = "pendurthi";
// console.log(student6.last_name);
