function Person(name , surname){
    this.name = name || "";
    this.surname = surname || "";
}

Person.prototype.getFullName = function(){
    return this.name + " " + this.surname;
}


var p1 = new Person();

var p1 = Person();
