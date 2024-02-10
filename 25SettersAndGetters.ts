class Student{

    constructor(
        private first_name : string , 
        private last_name : string, 
        private age : number, 
        private isMarried : boolean = false
        ){}

    get getfirst_name() : string
    {
        return this.first_name;
    }

    setfirst_name(str : string)
    {
        this.first_name = str;
    }

    getData(str : string) : string
    {
        return `${str}, ${this.first_name} ${this.last_name} of ${this.age} who is married : ${this.isMarried}`;
    }
}



let student : Student = new Student("sai", "eswar", 25);
console.log(student.getData("hello"));

student.setfirst_name("saiii");
console.log(student.getfirst_name);