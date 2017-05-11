//Create a variable called carName, assign the value "Volvo" to it, and display it.

//var carName;
//let carName;
//const carName;

let carName;
//"volvo" = carName; NO!!!
//carName = Volvo; NO!!

carName = "Volvo";
//carName = 'Volvo';
//carName = `Volvo`;
 
 //let carName = "Volvo";

console.log(carName);

//Create a variable called number, assign the value 50 to it, and display it.
let number = 50;
console.log(number);

//The code below should display "Simona" - Fix it.

var personName = "Simona";

console.log(personName);

//Display the sum of 5 + 10, using two variables x and y.
let x = 5, 
    y = 10;
//let x;
//let y;

//x = 5;
//y = 10;

console.log(x + y);

//Create a third variable called z, assign x + y to it, and display it.
let z = x + y;
console.log(z);


//Find the remainder when 15 is divided by 9, using two variables x and y.
x = 15;
y = 9;
console.log(x % y);

//Use the += operator to add a value of 5 to the variable x.
//x = x + 5;
x += 5;
console.log(x);

//call the following function
myFunction1();

function myFunction1() {
    console.log("Hello World!");
}


//Figure out what is wrong with the function - fix it and run it as it should!

function myFunction2() {
    console.log("Hello World!");
}

myFunction2();

//Use the function to display the product of 5 * 5.

function myFunction3() {
    return 5 * 5;
}
console.log(myFunction3());

//Use the function to display "Hello John".

console.log(myFunction4("John"));

function myFunction4(name) {
    return "Hello " + name;
}

//Define a function named "myFunction5", 
//and make it display "Hello World!" in the console.

function myFunction5(){
    console.log("Hello World");
}

myFunction5();

//Define a function that takes 2 params num1 and num2
//let the function return true if the num1 is greater than num2, false otherwise

function myFunction6(num1, num2){
    return num1 > num2;
}

console.log(myFunction6(5,10));
console.log(myFunction6(5,5));
