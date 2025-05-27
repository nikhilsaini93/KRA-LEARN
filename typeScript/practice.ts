// ✅ Beginner Level
// Basic Types
// 1 Define variables using the following types: boolean, number, string, array, tuple, and enum.

// Function Typing
// 2. Write a function that calculates the area of a rectangle. Add appropriate parameter and return types.

// Interfaces
// 3. Create an interface for a Book with properties like title, author, and year. Then write a function that takes a Book and returns a formatted string.

// Type Assertions
//  4.Given a variable of type any, assert it to a string and use string methods on it.

// 🧠 Intermediate Level
//  5.Union & Type Aliases
// Create a type alias UserId that can be either a string or a number. Write a function that takes a UserId and logs it.

// Optional & Default Parameters
// 6. Write a function that takes a required string and an optional number. If the number is not provided, use a default.

// Classes with Access Modifiers
// 7. Create a class Person with a public name, a private age, and a method introduce that returns a string using the name.

// Generics
//  8. Write a generic function that wraps a value in an array, preserving its type.

// Enums
//  9. Define an enum Status with values like Pending, InProgress, and Done. Use it in a function to return messages based on status.

// 🧩 Advanced Level
// 10 Type Guards
// Write a type guard function that checks whether a value is a string.

// Discriminated Unions
//11  Create a union type for Square, Circle, and Rectangle, each with a kind property. Write a function to calculate area based on the kind.

// Mapped Types
// 12 Given an interface User, create a mapped type that makes all properties readonly.

// Utility Types
//  13 Use TypeScript's built-in utility types (Partial, Pick, Omit) on a sample interface and explain when you'd use each.

// Custom Generic Interface
// 14 Create a generic interface for an API response with data, status, and error fields.

// Intersection Types
// 15 Create two interfaces, ContactDetails and AccountDetails, then make a new type that combines both.

let x :number = 10
let y : boolean = true 
let z : string = "hello"
let arr1 : number[] | string[] = [1,2,3,4,5]
const arr2 : [string , number]  = ["hello",1]

enum statuss{
    succes = 1,
    failure = 0, 
    pending =5
}

//q2
function rectangle(a : number  , b : number) : number{
    return a*b

}
rectangle(2,3)

//q3
interface Book{
    title : string,
    author : string,
    year : number

}

function Bookk(args : Book) : string{
    return `${args.title} ${args.author} ${args.year}`

}
const myBook: Book = {
    title: "Abcde ",
    author: "xyze",
    year: 1960
};
console.log(Bookk(myBook))


// q4
let b : any 
b = "hello"
console.log((b as string).split(""))

//  or

console.log((<string>b).split("l"))


// q5
type UserId = string | number
function userr(args: UserId) : void {
    console.log(args)

}
userr("hello")
userr(10)

// question6
function ques6(name: string , age : number = 0) {
    console.log(name , age)
}
ques6("hello" , 10)


//question 7
class Personn{
    constructor(public name : string , private age : number  ){

    }
   introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const pp1 = new Personn("nik" , 23)
console.log(pp1.introduce())


// question 8


function xyz<T>(args : T) : T[]{
 return [args]; // Wraps the value in an array and preserves its type
}

const result = xyz([1, 2, 3, 4, 5]);
console.log(result); // Output: [[1, 2, 3, 4, 5]]

// q9
enum Status2 {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Done = "DONE",
}

function getStatusMessage(status: Status2): string {
    switch (status) {
        case Status2.Pending:
            return "The task is still pending.";
        case Status2.InProgress:
            return "The task is in progress.";
        case Status2.Done:
            return "The task is completed.";
        default:
            return "Invalid status.";
    }
}

const taskStatus = Status2.Done;
const message = getStatusMessage(taskStatus);
console.log(message);


// q10
function q10(s : any) : boolean{
    return (typeof s === "string")
        
    
}
console.log(q10("hello"))
console.log(q10(10))

// q11

type Shape = {kind : "sq" , side : number} | {kind : "circle" , radius : number} | {kind : "rectangle" , width : number , height : number}


function calculateaarea(args : Shape) : number{
    switch (args.kind) {
        case "sq":
            return args.side * args.side;

        case "circle":
            return Math.PI * args.radius * args.radius;
    case "rectangle":
        return args.width * args.height;
    default:
        return 0;
        
    }
}
const square: Shape = { kind: 'sq', side: 5 };
const circle: Shape = { kind: 'circle', radius: 3 };
const rectanglee: Shape = { kind: 'rectangle', width: 4, height: 6 };

console.log(calculateaarea(square));
console.log(calculateaarea(circle));
console.log(calculateaarea(rectanglee));

// q12




// q15
// ContactDetails interface
interface ContactDetails {
  phone: string;
  email: string;
}

// AccountDetails interface
interface AccountDetails {
  username: string;
  password: string;
}

// New type that combines both interfaces using intersection
type UserAccount = ContactDetails & AccountDetails;

// Example usage:
const userAccount: UserAccount = {
  phone: "123-456-7890",
  email: "user@example.com",
  username: "user123",
  password: "securepassword"
};






// extra stufff




// Create a TypeScript program to manage information about vehicles.

// Define a base class Vehicle with the following properties:
// make (string): The manufacturer of the vehicle.
// model (string): The model of the vehicle.
// year (number): The manufacturing year.
// Add a method getDetails() in the Vehicle class that returns a string in the format:
// "Make: {make}, Model: {model}, Year: {year}".
// Create a subclass Car that extends Vehicle with an additional property:
// fuelType (string): The type of fuel the car uses (e.g., "Petrol", "Diesel", "Electric").
// Override the getDetails() method in the Car class to include the fuelType information:
// "Make: {make}, Model: {model}, Year: {year}, Fuel Type: {fuelType}".



class Vehicle{
    constructor(public manufacturer: string , public model : string , public year: number ){

    }
    getDetails() : string{
        return `Make: ${this.manufacturer}, Model: ${this.model}, Year: ${this.year}`
    }

    

}

class Car extends Vehicle{
        constructor(manufacturer: string,
        model: string,
        year: number,
    public fuelType : string  ){
        super(manufacturer, model, year);
        }
         getDetails(): string {
        return `${super.getDetails()}, Fuel Type: ${this.fuelType}`;
    }

    }
const myCar = new Car("Toyota", "Camry", 2020, "Petrol");
console.log(myCar.getDetails())






