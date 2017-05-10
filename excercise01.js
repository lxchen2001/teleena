 console.log(null == null); //true
 console.log(undefined == undefined); //true
 console.log(null == undefined); //true
 console.log(null === undefined); //false
console.log(NaN == NaN ); //false
console.log(NaN === NaN ); //false
//console.log(isNaN(myVariable)); //false
 console.log(2 == "2"); //true
 console.log(2 === "2"); //false
  console.log(2 + "2"); //"22"
 console.log("2" * "2"); //4

 console.log(true && false); //false
 console.log(2 && 4); //4 
 console.log(4 && 2); //2
 console.log(null || 7); //7

let x = 0;
//!x ==> false
//+true ==> 1
// +!x === 1

function test(a) {
	return a + 5;
}

function f1(){
    //arguments
}

console.log(test(3)); //8
console.log(test("2")); //"25"
console.log(test(4, 2)); //9

