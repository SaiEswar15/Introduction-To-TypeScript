//standard way of writing the classes
//practice 1:
class Student{

    first_name : string;
    last_name : string;
    age : number;
    isMarried : boolean;

    constructor(first_name : string, last_name : string, age : number, isMarried : boolean){
        this.first_name = first_name;
        this.last_name = last_name ;
        this.age = age;
        this.isMarried  = isMarried ;
    }

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student1 : Student = new Student("sai", "eswar", 25, true);

console.log(student1.last_name);
console.log(student1.getData("hello"));


export {};

//practice 2:
//making some variables optional and having default value 
class StudentClass1{

    first_name : string;
    last_name : string;
    age : number;
    isMarried? : boolean;

    constructor(first_name : string, last_name : string, age : number, isMarried? : boolean){
        this.first_name = first_name;
        this.last_name = last_name ;
        this.age = age;
        this.isMarried  = isMarried ?? false ;
    }

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student2 : StudentClass1 = new StudentClass1("sai", "eswar", 25);

console.log(student2.last_name);
console.log(student2.getData("hello"));

//we are able to access and modify the values 
//but we should be able to pass only bu modifier and not whenever we want 
//for this we have to use readonly.
//see the practice 3
student2.last_name = "pendurthi";
console.log(student2.last_name);

export {};

//practice 3:

class StudentClass2{

    readonly first_name : string;
    readonly last_name : string;
    readonly age : number;
    readonly isMarried? : boolean;

    constructor(first_name : string, last_name : string, age : number, isMarried? : boolean){
        this.first_name = first_name;
        this.last_name = last_name ;
        this.age = age;
        this.isMarried  = isMarried ?? false ;
    }

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student3 : StudentClass2 = new StudentClass2("sai", "eswar", 25);

console.log(student3.last_name);
console.log(student3.getData("hello"));

//uncomment and see there will be an error and you will not be allowed to 
//update the value.
// student3.last_name = "pendurthi";
console.log(student3.last_name);

export {};

//now we are able access them but we don't want to do that even then 
//we have to use the privates
//practice 4 :

class StudentClass4{

    private readonly first_name : string;
    private readonly last_name : string;
    private readonly age : number;
    private readonly isMarried? : boolean;

    constructor(first_name : string, last_name : string, age : number, isMarried? : boolean){
        this.first_name = first_name;
        this.last_name = last_name ;
        this.age = age;
        this.isMarried  = isMarried ?? false ;
    }

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student4 : StudentClass4 = new StudentClass4("sai", "eswar", 25);

//uncomment and see you will be not able to access or update the values
//if the function will be given private you will not be able to execute the function also

// console.log(student4.last_name);
console.log(student4.getData("hello"));
// student4.last_name = "pendurthi";
// console.log(student4.last_name);


//simple way of writing class without predefined variables and assigning by this in consructor
//practice 05 :

class StudentClass5{

    constructor(
        private first_name : string , 
        private last_name : string, 
        private age : number, 
        private isMarried : boolean
        ){}

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student5 : StudentClass5 = new StudentClass5("sai", "eswar", 25, true);

// console.log(student5.last_name);
console.log(student5.getData("hello"));
// student5.last_name = "pendurthi";
// console.log(student5.last_name);


//now how do we set the default parameter if isMarried is optional 
//and dont want to send inside constructor
//practice 06 :

class StudentClass6{

    constructor(
        private first_name : string , 
        private last_name : string, 
        private age : number, 
        private isMarried : boolean = false
        ){}

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}

let student6 : StudentClass6 = new StudentClass6("sai", "eswar", 25);

// console.log(student6.last_name);
console.log(student6.getData("hello"));
// student6.last_name = "pendurthi";
// console.log(student6.last_name);



