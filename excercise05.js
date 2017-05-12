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

// Create an array and fill it up with the following customers:
// 1 - Alice - New York
// 2 - Bob - Amsterdam
// 3 - Carla - Rome
// 4 - David - Paris 

// Let Bob buyStuff 3 times
// Let Alice buyStuff 2 times
// Let Bob payBill 3 times

// Create an array badPayers 
// and fill it up with all the customers 
// whose nrOfUnpaidBills is greater than 0

// Create an array customerNames
// and fill it up with the names of the customers

// Optional:

// Create a class Shop
// with a property customers of type array
// and two methods

// getBadPayers() : array
// returns the customers    
// whose nrOfUnpaidBills is greater than 0

// getCustomerNames() : array
// returns a list with the names of the customers

