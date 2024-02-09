let arrObjects:{}[] = [];

arrObjects.push({name : "eswar"})
arrObjects.push({name : "kumar"})
arrObjects.push({name : "sai"})

console.log(arrObjects);

//passing the type objects 

type modelObject = {
    name : string,
    age? : number,
    isActive? : boolean
}

let arrOfTypeObj:modelObject[] = []

arrOfTypeObj.push({name : "sai@gamil.com"})