class Animal{

    private _getCount : number = 1;
    public category : string;
    protected breed : string;

    constructor(category : string, breed : string)
    {
        this.category = category;
        this.breed = breed;
        
    }


}

class Dog extends Animal{

    constructor(category : string, breed : string){
        super(category, breed);
    }

    
    
}

export {};