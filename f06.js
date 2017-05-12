class Person /* extends Object */{
    constructor(name = "", surname = ""){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`;
    }
}

const p1 = new Person("Jessie", "Pink");
const p2 = new Person("Walter", "White");

console.log(p1.getFullName());
console.log(p2.getFullName());


// class Student{
//     constructor(name = "", surname = "", studentId){
//         this.name = name;
//         this.surname = surname;
//         this.studentId = studentId;
//     }
//     getFullName(){
//         return `${this.name} ${this.surname}`;
//     }
//     study(){
//         console.log("OMG!");
//     }
// }

class Student extends Person {
    constructor(studentId = 0, name = "", surname = ""){
        super(name, surname);
        this.studentId = studentId;
    }
    study(){
        console.log("OMG!");
    }
    getFullName(){
        return `${this.studentId}  ${super.getFullName()}`;
    }
}

const s1 = new Student("Mike", "Francis");
console.log(s1.getFullName());
s1.study();