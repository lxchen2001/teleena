///////////////////////////////////////////////////////////
////////////FUNCTIONS//////////////////////////////////////

//invoke a function
//function == firstFunction 
firstFunction();

//use an object
//object == console

//invoke a method
//method == log

//pass a parameter
//parameter == "Hello World"

console.log("Hello world!"); 

//more parameters separated by ,
console.log("Something more", "bla", "yada"); 

//invoke (call) a function
//function == alert
//pass parameter
//parameter == "OH HI"
alert("OH HI!");

//invoke a function once again (I can reuse it)
firstFunction();

//declare a function
//1. "function"" keyword
//2. function name
//3. parenthesys
//4. curly brackets
//5. function body
function firstFunction() 
{
    console.log("Welcome to the first function!");
    console.log("I am very proud of it");
    alert("Still in the first function");
}

//let var1 = firstFunction(); //undefined

//declare parameters between parenthesys
//parameter name == whatever
function secondFunction(whatever)
{
    //depending on what I get, I'll be able to use
    //whatever.log("HI");
    //wathever();
}

//we can pass anything we want
secondFunction("Simona"); //string
secondFunction(23); //number
secondFunction(true); //boolean
secondFunction(); //undefined
secondFunction(firstFunction); //function
secondFunction(console); //object

let s2 = sum("a","b"); //"ab"

let s1 = sum(3,4); //7

//function with 2 params
function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber;
    //console.log("Unreacheable code");
}

setTimeout(firstFunction,3000)

//////////////////////////////////////////////////////////

////////VARIABLES////////////////////

//ECMAScript 4
//declare a variable
//1. "var" keyword
//2. variable name
var firstVariable;

//ECMAScript 2015
//declare a variable
//1. "let" keyword
//2. variable name
let anotherVariable;

//declare a constant
//1. "const" keyword
//2. constant name
//3. assignment (=)
//4. value
const aConstant = "Simona's course";

//assignment
//target = source
anotherVariable = 43; //number
console.log(anotherVariable);
anotherVariable = '<p class="bla" id="dbdd" name="ssss"'; //string
console.log(anotherVariable);
anotherVariable = false; //boolean
console.log(anotherVariable);
anotherVariable = console;
console.log(anotherVariable);
anotherVariable = firstFunction;
console.log(anotherVariable);
anotherVariable = function(){
    console.log("OH HI!");
};
console.log(anotherVariable);

//expressions
//numerical
// + - * / %
anotherVariable = 5 + 3;
anotherVariable = (5 + 3 - 2 / 5) * 23;

//string
// +
anotherVariable = "OH" + "hi"; //"OHhi"
anotherVariable = "5" + "3"; //"53"

anotherVariable = "2" * "4"; //8
anotherVariable = "2" + "4"; //"24"
anotherVariable = "2" + 4; //"24"
anotherVariable = 2 + "4"; //"24"

//boolean
anotherVariable = 4 > 3; //true
anotherVariable = 4 >= 3; //true

anotherVariable = 4 < 3; //false
anotherVariable = 4 <= 3; //false

anotherVariable = 4 == 3; //false
anotherVariable = 4 != 3; //true

anotherVariable = 4 === 3; //false
anotherVariable = 4 !== 3; //true

anotherVariable = "4" == 4; //true
anotherVariable = "4" != 4; //false
anotherVariable = "4" === 4; //false
anotherVariable = "4" !== 4; //true

anotherVariable = true == "1"; //true
anotherVariable = !true; //false
anotherVariable = !4; //false
anotherVariable = !""; //true
anotherVariable = !"hi"; //false

anotherVariable = 3;
anotherVariable = anotherVariable + 5;
anotherVariable += 5;
anotherVariable *= 5;

anotherVariable = anotherVariable + 1;
anotherVariable += 1;
anotherVariable++;
++anotherVariable;

anotherVariable = 1;

let var2 = anotherVariable++;
console.log(var2);
console.log(anotherVariable);
 
anotherVariable = 1;
let var3 = ++anotherVariable;
console.log(var2);
console.log(anotherVariable);
 
anotherVariable = 1;
console.log(anotherVariable++);
console.log(anotherVariable);


///////////////////////////
//////////// AND //////////
///////////////////////////
// first | second| result
//-------------------------
// false | false | false
// false | true  | false  
// true  | false | false
// true  | true  | true

// 4 && 7 => 7
// 0 && 10 => 0


///////////////////////////
//////////// OR ///////////
///////////////////////////
// first | second| result
//-------------------------
// false | false | false
// false | true  | true  
// true  | false | true
// true  | true  | true

// 4 || 7 => 4
// 0 || 7 => 7

function myFunction(parameter1){
    parameter1 = parameter1 || "default value";

}


anotherVariable = true && true; //AND ==> true
anotherVariable = true || true; //OR ==> true
anotherVariable = true && false; //AND ==> false
anotherVariable = true || false; //OR ==> true





//FALSY
//0
//false
//-0
//undefined
//""
//null

//truthy
//"asd"
anotherVariable = "";
if(!anotherVariable)
{
    console.log("I'm here!");
}

setTimeout(function(){
    console.log("HI");
}, 500);

anotherValue = alert("HI");

anotherValue = setInterval(function(){
    console.log("HI");
}, 500);
//let i1 = setInterval();
//let i2 = setInterval();

//anotherValue =  setInterval();

clearInterval(anotherValue);

const doStuff = true;

doStuff = false;




//it("should do this and that",firstTest);

// describe("first page tests", function(){
//     it("should do this and that",function (){
//         //step 1
//         //step 2
//     });

//     it("should do another thing", function(){

//     });

// });

//CTRL + K + C
//CTRL + K + U



function firstTest(){
    //step 1
    //step 2
}











