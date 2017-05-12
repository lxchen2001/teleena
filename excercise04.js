// Create a variable person
// assign to it an object with the following properties:
// name == "Mario"
// age == 42
// city == "Tokyo"
// and with the following method:
// sayHi()
// that returns "Hi, my name is " and the name of the object

const person = {
    name : "Mario",
    age : 42,
    city : "Tokyo",
    // sayHi : function(){}
    sayHi (){
        //return "Hi, my name is " + this.name;
        //Hi, my name is Mario and my age is 42. I come from Tokyo.
        //return "Hi, my name is " + this.name + " and my age is " + this.age + ". I come from " + this.city;
        return `Hi, my name is ${this.name} and my age is ${this.age}. I come from ${this.city}`;
    }
};

// Use the variable to print the sayHi message on the console
console.log(person.sayHi());

// Change the name of the person to "Luigi"
person.name = "Luigi";

// Use the variable to print the sayHi message on the console
// and verify that the result is now "Hi my name is Luigi"
console.log(person.sayHi());

//console.log(person.name, person.age, person.city);