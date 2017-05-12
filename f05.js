//step 1 : create the template (class)
class Car {
    //constructor
    constructor(brand = "", name = "", price = 10000){
        //this.name = name || "";
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.speed = 0;
    }
    //methods
    accelerate(toHowMuch){
        this.speed = toHowMuch;
    }
    
}

const c3 = new Car("Audi", "A3", 25000);
console.log(c3.name, c3.price, c3.brand);
c3.accelerate(50);
console.log(c3.speed);


///const c4 = new Car("A3", "Audi", 25000);

//step 2 : create objects
const c1 = new Car();
console.log(c1.name, c1.price, c1.brand);

c1.name = "500";
c1.brand = "FIAT";
c1.price = 10000;

const c2 = new Car();
c2.name = "Testarossa";
c2.brand = "FERRARI";
c2.price = 20000000000;

