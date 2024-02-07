void main() {

  
  
}

void createMapAndGetValueNotPresent() {
    Map<String, int> obj = {
      "roll": 123,
      "id": 234,
      "mobile": 86888,
    };

    print(obj["telephone"]);
  }

void createVariableAndChangeDataType()
{
  String str = "eswar";
  print(str);

  // str = 123;
  // print(str);
  //this will give you error
}

void NumberWithoutReturnType()
{
  var number = 12;
  // number = "eswar";  //will give you error
  print(number);
  var str1 = "eswar";
  // str1 = 12;   //will give you error
  print(str1);
  var bol = false;
  // bol = "true"; //will give you an error
  print(bol);
  //if we give int, string, bool we cannot change to different datatype however

  dynamic getDatatype = "eswar";
  getDatatype = 13;
  //this is similar to any
  print(getDatatype);
}

dynamic functionDatatype()
{
  print("this is function");
  return "this is function";
}

void unintializedVariable()
{
  var a ;
  a = 12;
  a = functionDatatype();
  print(a());
}

dynamic dynamicFunction()
{
  print("eswar");
}

void parametersTypeCheck(String a,{required String name2,String? name1})
{
  print(a);
  print("${name2}");
}

({String name,int age,bool isMarried}) returnMultipleProps()
{
  return (name : "eswar", age : 12, isMarried : false);
}

T myFunction<T>(bool returnInt) {
  if (returnInt) {
    return 42 as T; // Change to your desired integer value
  } else {
    return "Hello, World!" as T; // Change to your desired string value
  }
}

