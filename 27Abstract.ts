
abstract class Employee{
    constructor(
        public id : number,
        public name : string,
        public department : string
    ){}

    getDetails() : string
    {
        return `hello ${this.name} with ${this.id} from department ${this.department}`
    }
}


// let person1 : Employee = new Employee(1209, "appa rao", "railway")
// we cannot directly create an object from the abstract class 
// you can uncomment and see if doubt it shows error.

//solution : there should be a class which extends the abstract class and 
// we can create the object from that class.

class Doctor extends Employee{

    constructor(
        public id : number,
        public name : string,
        public department : string
    )
    {
        super(id,name, department);
    }
}

let person1 : Doctor = new Doctor(1209, "appa rao", "surgeon")
console.log(person1.getDetails());