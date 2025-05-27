var nik = /** @class */ (function () {
    function nik(name, age, gender) {
        this.name = name;
        this.age = age;
    }
    return nik;
}());
var p1 = new nik("Nikhil", 28, "Male");
console.log(p1);
// 1. Class Definition & Object Creation 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("hello " + this.name + "", this.age, "years old");
    };
    return Person;
}());
var per1 = new Person("nikhil", 23);
per1.greet();
// 2. Access Modifiers: public, private, protected
//public
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    Animal.prototype.getanimal = function () {
        console.log("animal name -  ", this.name);
    };
    return Animal;
}());
var Ani1 = new Animal("Dog");
console.log(Ani1.name); //  accessible
Ani1.getanimal(); // also asscessible
// private
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.initialBalance = initialBalance;
        this.balance = initialBalance;
    }
    BankAccount.prototype.getBalance = function () {
        console.log("Balance", this.balance);
    };
    return BankAccount;
}());
var acc1 = new BankAccount(10000000);
acc1.getBalance(); // allowed
// console.log(acc1.balance) // run perfectly but they give error in ts
