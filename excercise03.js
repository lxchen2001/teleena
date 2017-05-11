// 1. Create an array with at least 10 surnames, such as

const surnames = [
    "Jansen",
    "De Vries",
    "Van den Berg",
    "Van Dijk",
    "Bakker",
    "Janssen",
    "Visser",
    "Smit",
    "Meijer",
    "De Boer",
    "Mulder",
    "De Groot",
    "Bos",
    "Vos",
    "Peters",
    "Hendriks",
    "Van Leeuwen",
    "Dekker",
    "Brouwer",
    "De Wit",
    "Dijkstra",
    "Smits",
    "De Graaf",
    "Van der Meer"
];

// 2. Print the position of the element "Dijkstra"

console.log("*********** Dijkstra found at position: ****************");
console.log(surnames.indexOf("Dijkstra"));

// 3. Sort the list alphabetically and print the list to the console

//surnames.sort();
//console.log(surnames);

//surnames.forEach(function(item){
//    console.log(item);
//});

function printItem(item){
    console.log(item);
}

console.log("*********** SORTED ITEMS****************");
surnames.sort().forEach(printItem);

// 4. Log to the console only the surnames starting with a V

//const filteredSurnames = surnames.filter(function(item){return item.startsWith("V")});
//filteredSurnames.forEach(function(item){
//    console.log(item);
//});

console.log("*********** FILTERED ITEMS****************");

surnames.filter(function(item){return item.startsWith("V")})
        .forEach(printItem);

// 5. Create a new array containing the length of each element of the first list 
// example:
// if your list contains
// "Jansen",
// "De Vries",
// "Van den Berg",
// "Van Dijk",
// "Bakker"
// then the new list should contain
// 6, 8, 12, 8, 6 

console.log("************* CAPITAL LETTERS**************");

const capitalSurnames = surnames.map(function(item){
    return item.toUpperCase();
});

capitalSurnames.forEach(printItem);

console.log("************* LENGTHS **************");

surnames.map(function(item){
    return item.length;
}).forEach(printItem);

surnames.map(item => item.length)
        .forEach(element => console.log(element));


function f1(){
    console.log("haha");
}

let f2 = function(){
    console.log("hha");
};

let f3 = () => console.log("hha");