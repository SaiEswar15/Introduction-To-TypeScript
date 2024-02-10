public class Animal {
    
    String category;
    protected String breed;

    Animal(String category, String breed)
    {
        this.category = category;
        this.breed = breed;
    }
}

class Cat extends Animal{

    Cat(String category, String breed)
    {
        super(category, breed);
    }

    
}

class Main{
    public static void main(String[] args) {
        Cat cat = new Cat("memu", "masaka");
        System.out.println(cat.breed);
    }
}
