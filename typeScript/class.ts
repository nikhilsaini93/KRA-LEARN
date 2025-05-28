class nik{
    constructor(public name: string , public age : number , gender: string) {

    }
}
let p1 = new nik("Nikhil" , 28 , "Male")
console.log(p1)

// // 1. Class Definition & Object Creation 


// class Person{
//     constructor(public name: string , public age : number) {
//          }
//          greet() : void {
//             console.log("hello " + this.name + ""  , this.age , "years old")
//          }
// }

// const per1 = new Person("nikhil" , 23)
// per1.greet()

// // 2. Access Modifiers: public, private, protected

// //public

// class Animal{
//     constructor(public name : string){
//         this.name = name
//     }

//     public getanimal() :  void{
//         console.log("animal name -  " , this.name)
//     }
// }
// const Ani1 = new Animal("Dog")
// console.log(Ani1.name)  //  accessible
// Ani1.getanimal()   // also asscessible


// // private

// class BankAccount0{
//     private balance : number 
//     constructor(public initialBalance: number){
//           this.balance = initialBalance;
//     }

//     getBalance() : void{
//         console.log("Balance" , this.balance)
//     }

// }

// const acc1 = new BankAccount0(10000000 )
// acc1.getBalance()  // allowed
// console.log(acc1.balance) // run perfectly but they give error in ts



// class PersonClass{
//     protected age: number
//     constructor(
//         age :number
//     ){
//         this.age = age
//     }
// }

//     class Emp extends PersonClass{
//         getAge() : number{
//             return this.age // ✅ Accessible in subclass
//         } 
//     }

    
// const emp = new Emp(23)
// console.log(emp.getAge())// allowed
// // console.log(emp.age) // ❌ Error: Property 'age' is protected (but work)


// // combined ex 
// class BankAccount{
//     public accountHolder: string;
//   private balance: number;
//   protected accountNumber: string;

//   constructor(accountHolder: string, balance: number, accountNumber: string) {
//     this.accountHolder = accountHolder;
//     this.balance = balance;
//     this.accountNumber = accountNumber;
//   }
//   public getName() : void {
//     console.log("Acountholder name" , this.accountHolder)

//   }
//   public getBalance() : void {
//     console.log("Balance" , this.balance)
//   }


  
// }
// const account = new BankAccount("Alice", 1000, "ACC123");
// // account.balance = 2000; // ❌ Error: 'balance' is private
// console.log(account.getBalance()); // ✅ 1000



// // 4. Parameter Properties (shorthand)
// class Car {
//   constructor(
//     public brand: string,
//     public model: string,
//     private price: number
//   ) {}

//   getPrice(): number {
//     return this.price;
//   }
// }

// const car = new Car("Toyota", "Corolla", 20000);
// console.log(car.brand); // ✅
// console.log(car.getPrice()); // ✅





// 5. Getters and Setters
class Emp12{
    constructor(public name: string, public _salery : number
    ){
        this.name = name
        this._salery = _salery
    }
    get salery() : number{
        return this._salery
    }
    set salery(salery : number){
        this._salery = salery

    }
    
}
const emp123  = new Emp12("nikhil" , 1000000)
console.log(emp123.salery)
emp123.salery = 2000000 
console.log(emp123.salery)



// 6. Static Members
class MathHelper {
  static PI = 3.14159;

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathHelper.PI); // ✅
console.log(MathHelper.square(5)); // ✅



// 🧱 Abstract Classes and Methods in TypeScript
// In TypeScript, abstract classes and abstract methods are used to define blueprints for other classes. They are a key part of object-oriented programming and are helpful when you want to provide a base structure but leave some implementation details to derived (child) classes.

// ✅ Definition
// Abstract Class:
// An abstract class cannot be instantiated directly. It may contain abstract methods (without implementation) and concrete methods (with implementation).

// Abstract Method:
// An abstract method does not have a body in the base class. Subclasses must implement it.

abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("The animal moves.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

let myDog = new Dog();
myDog.makeSound(); // Output: Bark!
myDog.move();      // Output: The animal moves.
