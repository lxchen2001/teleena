let list;

list = []; //empty array

console.log(list.length); //0

console.log(list[0]); //undefined

list[0] = "oh hi!";

console.log(list.length); //1

console.log(list[0]); //"oh hi!"

list[30] = "another value";

console.log(list.length); //31

list[15] = "yada yada";

console.log(list.length); //31

console.log(list[30]); //"another value"

console.log(list[1]); //undefined
console.log(list[2]); //undefined
console.log(list[3]); //undefined
//...
console.log(list[15]); //"yada yada"
//...
console.log(list[29]); //undefined

list.length = list.length - 1; //30

console.log(list[30]); //undefined

list.length = 50;
console.log(list[30]); //undefined

let list2 = ["a", "b", 5,,,,, true, undefined, null];

console.log(list2.length);

console.log(list2[0]); //"a"
console.log(list2[1]); //"b"
console.log(list2[2]); //5
console.log(list2[3]); //undefined

list2.length = 5;

list2[5] = "HI";


//create a function that accepts an array an a value
//the function appends the value to the array

function append(theArray, theNewValueToAppend){
   //theArray[theArray.length] = theNewValueToAppend; 

   theArray.push(theNewValueToAppend);
}

let theLastElementNowRemoved = list.pop();

let list3 = ["a", "b", "c", "d"];

list3[2] = "something new";



var myFishes = ['angel', 'clown', 'mandarin', 'sturgeon'];

//myFishes.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFishes is ["angel", "clown", "drum", "mandarin", "sturgeon"]

//myFishes.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFishes is ["angel", "clown", "mandarin", "sturgeon"]

//myFishes.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFishes is ["angel", "clown", "mandarin", "sturgeon"]

console.log(myFishes.length); //4
myFishes.splice(0,1);
//myFishes is ["clown", "mandarin", "sturgeon"]

myFishes.splice(2,0,'clown');

let list4 = ["Alice", "Bob", "Candice", ,,,,"David"];

function printItem(item){
    console.log(item);
} 

list4.forEach(printItem);

list4.forEach(function (item){
    console.log(item);
});

let s = "hi";
console.log(s);

let anotherList = list4.filter(function(item){
    return item.toUpperCase().startsWith("A");
});

console.log("hi");


