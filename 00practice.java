import java.util.HashMap;
import java.util.Map;

class Main {

    public static void main(String[] args) {
        parametersTypeCheck(Map.of("name2", "kumar", "name1", "eswar"));
    }

    static void createMapAndGetValueNotPresent() {

        HashMap<String, Integer> obj = new HashMap<>();
        obj.put("roll", 123);
        obj.put("id", 456);
        obj.put("mobile", 86888);

        System.out.println(obj);
        System.out.println(obj.get("roll"));
        System.out.println(obj.get("telephone"));
    }

    static void createVariableAndChangeDataType() {
        String str = "eswar";
        System.out.println(str);

        // str = 123;
        // System.out.println(str);
    }

    static void NumberWithoutReturnType()
    {
        Object str = "eswar";
        System.out.println(str);

        str = 24;
        System.out.println(str);
    }

    static String functionDatatype()
    {
        return "eswar";
    }

    static void parametersTypeCheck(
        Map<String,String> args
    )
    {
        System.out.println(args.get("name2")); 
    }

}

    