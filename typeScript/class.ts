class nik{
    constructor(public name: string , public age : number , gender: string) {

    }
}
let p1 = new nik("Nikhil" , 28 , "Male")
console.log(p1)

// 1. Class Definition & Object Creation 


class Person{
    constructor(public name: string , public age : number) {
         }
         greet() : void {
            console.log("hello " + this.name + ""  , this.age , "years old")
         }
}

const per1 = new Person("nikhil" , 23)
per1.greet()

// 2. Access Modifiers: public, private, protected

//public

class Animal{
    constructor(public name : string){
        this.name = name
    }

    public getanimal() :  void{
        console.log("animal name -  " , this.name)
    }
}
const Ani1 = new Animal("Dog")
console.log(Ani1.name)  //  accessible
Ani1.getanimal()   // also asscessible


// private

class BankAccount{
    private balance : number 
    constructor(public initialBalance: number){
          this.balance = initialBalance;
    }

    getBalance() : void{
        console.log("Balance" , this.balance)
    }

}

const acc1 = new BankAccount(10000000 )
acc1.getBalance()  // allowed
// console.log(acc1.balance) // run perfectly but they give error in ts







   