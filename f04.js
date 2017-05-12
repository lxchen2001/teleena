//objects

//string literal
// ""

let s = ""; //empty string


// array literal
// []

let a = []; //empty array

//object literal
// {}

let o = {}; //empty object

//JavaScript Object Notation (JSON)

let car1 = {
    brand : "FIAT",
    name : "500",
    price : 10000,
    on : false,
    passengers : [
        {
            name : "Simona",
            age : 43
        },
        {
            name : "Jan",
            age : 5
        },
        {
            name : "Remko",
            age : 37
        }
    ],
    engine : {
        name : "V8",
        acceleration: 200
    }
};

//car1.engine.acceleration

console.log(car1.name);
console.log(car1.brand);

console.log(car1.engine.name);
console.log(car1.passengers[0].name);


console.log(car1["name"]);

//let speed = 10;

let car2 = {
    brand : "FERRARI",
    name : "Testarossa",
    speed : 0,
    maxSpeed : 200,
    // accelerate : function (toHowMuch){
    //     this.speed = toHowMuch;
    // } 
    accelerate (toHowMuch){
        this.speed = toHowMuch;
    },
    honk(){
        console.log("PEEEEEEEEEEEEE");
    }

};

console.log(car2.speed);
car2.accelerate(50);
console.log(car2.speed);

car1.passengers.forEach(p=>console.log(p.name));

let person = {
    "name" : "Simona",
    "address-1" : ""
};

//person["address-1"];

person.name = false;
person.children = 1;
person.naame = "Mario";
delete person.naame;


// car1.brand
// car2.brand



function changeStyle(backgroundColor, color, fontName, fontSize, text){
    //do something with backgroundColor;

}

changeStyle(undefined, undefined, undefined, undefined, "HI");

changeStyleObjectOriented({backgroundColor: "red", color : "yellow", fontName : "Arial", fontSize : 16, text: "HI"});

changeStyleObjectOriented({text: "HI", color: "red"});

function changeStyleObjectOriented(options){
    //do something with options.backgroudColor
}


