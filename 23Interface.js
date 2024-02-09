//till now we have been using type 
//type is to give a structure for the object and use them 
//but interface is even more 
var newDataObject = { firstname: "eswar", lastname: "esss", _id: 2000, getName: function () {
        return "success";
    } };
console.log(newDataObject.getName());
var newDataObject1 = { firstname: "eswar", lastname: "esss", _id: 2000, getName: function () {
        return "success";
    }, getCoupon: function (name) {
        return name;
    } };
console.log(newDataObject1.getCoupon("aha10"), "interface");
