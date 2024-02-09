type model1 = {
    name : string;
    age : number;
}

type model2 = {
    name : string;
    age : string;
}

let dataObj: model1 | model2 = {name : "eswar", age : 24}

/*let dataObj1: model1 | model2 = {name : true, age : 24}*/
//uncomment and see
let dataObj2: model1 | model2 = {name : "eswar", age : "24"}



