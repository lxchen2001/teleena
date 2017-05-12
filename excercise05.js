// Write a class Customer that has the following properties:
// id, name, city, nrOfUnpaidBills
// and the methods:
// buyStuff(), payBill()
// and a constructor with 3 parameters:
// id, name, city
// when a Customer is created, the nrOfUnpaidBills equals 0. 
// Each time buyStuff() is called, the nrOfUnpaidBills is increased by 1, 
// and each time payBill() is called, the nrOfUnpaidBills is decreased by 1.
// Add a method
// badPayer(int n)
// that returns:
// true   if the nrOfUnpaidBills is n or more
// false,  otherwise.
// Override the toString() method for Customer objects. 
// It should return id, name, and city, formatted like:
// 	"(id) name - city"

class Customer {
    constructor(id = 0, name = "", city = ""){
        this.id =id;
        this.name = name; 
        this.city = city;
        this.nrOfUnpaidBills = 0;
    }
    buyStuff(){
        this.nrOfUnpaidBills++;
    }
    payBill(){
        this.nrOfUnpaidBills--;
    }
    badPayer(n){
        return this.nrOfUnpaidBills >= n;
    }
    toString(){
        return `(${this.id}) ${this.name} - ${this.city}`;
    }
}

// Create an array and fill it up with the following customers:
// 1 - Alice - New York
// 2 - Bob - Amsterdam
// 3 - Carla - Rome
// 4 - David - Paris 

const customers = [
    new Customer(1, "Alice", "New York"),
    new Customer(2, "Bob", "Amsterdam"),
    new Customer(3, "Carla", "Rome"),
    new Customer(4, "David", "Paris")
];

// Let Bob buyStuff 3 times
customers[1].buyStuff();
customers[1].buyStuff();
customers[1].buyStuff();

// Let Alice buyStuff 2 times
customers[0].buyStuff();
customers[0].buyStuff();

// Let Bob payBill 3 times
customers[1].payBill();
customers[1].payBill();
customers[1].payBill();

console.log(customers[1].nrOfUnpaidBills);

// Create an array badPayers 
// and fill it up with all the customers 
// whose nrOfUnpaidBills is greater than 0

function isItemABadPayer(item) {
    return item.nrOfUnpaidBills > 0;
}

const badPayers = customers.filter(isItemABadPayer);

//const x = new Customer("John");

//x = new Customer();

// const badPayers = customers.filter(function(item) {
//     return item.nrOfUnpaidBills > 0;
// });

//const badPayers = customers.filter(item => item.nrOfUnpaidBills > 0);

// Create an array customerNames
// and fill it up with the names of the customers

const names = customers.map(item=> item.name);

// Optional:

// Create a class Shop
// with a property customers of type array
// and two methods

// getBadPayers() : array
// returns the customers    
// whose nrOfUnpaidBills is greater than 0

// getCustomerNames() : array
// returns a list with the names of the customers

class Shop {
    constructor(){
        this.customers = [];
    }
    getBadPayers(){
        return this.customers.filter(item => item.nrOfUnpaidBills > 0);
    }
    getCustomerNames(){
        return this.customers.map(item=> item.name);
    }
}

const shop = new Shop();
shop.customers.push(new Customer(1,"Alice","Tokyo"));
shop.customers.push(new Customer(2,"Bob","Tokyo"));
shop.customers.push(new Customer(3,"Candice","Tokyo"));
shop.customers.push(new Customer(4,"David","Tokyo"));

shop.customers[0].buyStuff();
shop.customers[3].buyStuff();

const bp = shop.getBadPayers();