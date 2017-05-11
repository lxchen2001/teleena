let s1 = "hi"; //string

//String.prototype.toUpperCase();
//console.log(s1.toUpperCase());
s1 = s1.toUpperCase(); //"HI"

//write a function that accepts 2 parameters:
//theString, theLetter
//return: true if the theString begins with theLetter 

function beginsWith(theString, theLetter)
{
    //theLetter = theLetter.toUpperCase();
    //theString = theString.toUpperCase();

    //let initial = theString.toUpperCase().charAt(0);
    //return initial==theLetter.toUpperCase();

    //let initial = theString[0];
    //return initial==theLetter.toUpperCase();

    return theString.toUpperCase().startsWith(theLetter.toUpperCase());
}

let result;
result = beginsWith("hi", "h"); //expected: true
result = beginsWith("Hi", "h"); //expected: true
result = beginsWith("hi", "H"); //expected: true
result = beginsWith("bla", "h"); //expected: false
//result = beginsWith(2,3);


// let a = []; //array

// //Array.prototype.doStuff();
// a.doStuff();
