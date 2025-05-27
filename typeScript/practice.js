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
var x = 10;
var y = true;
var z = "hello";
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["hello", 1];
var statuss;
(function (statuss) {
    statuss[statuss["succes"] = 1] = "succes";
    statuss[statuss["failure"] = 0] = "failure";
    statuss[statuss["pending"] = 5] = "pending";
})(statuss || (statuss = {}));
//q2
function rectangle(a, b) {
    return a * b;
}
rectangle(2, 3);
function Bookk(args) {
    return "".concat(args.title, " ").concat(args.author, " ").concat(args.year);
}
var myBook = {
    title: "Abcde ",
    author: "xyze",
    year: 1960
};
console.log(Bookk(myBook));
// q4
var b;
b = "hello";
console.log(b.split(""));
//  or
console.log(b.split("l"));
function userr(args) {
    console.log(args);
}
userr("hello");
userr(10);
// question6
function ques6(name, age) {
    if (age === void 0) { age = 0; }
    console.log(name, age);
}
ques6("hello", 10);
//question 7
var Personn = /** @class */ (function () {
    function Personn(name, age) {
        this.name = name;
        this.age = age;
    }
    Personn.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Personn;
}());
var pp1 = new Personn("nik", 23);
console.log(pp1.introduce());
// question 8
function xyz(args) {
    return [args]; // Wraps the value in an array and preserves its type
}
var result = xyz([1, 2, 3, 4, 5]);
console.log(result); // Output: [[1, 2, 3, 4, 5]]
// q9
var Status2;
(function (Status2) {
    Status2["Pending"] = "PENDING";
    Status2["InProgress"] = "IN_PROGRESS";
    Status2["Done"] = "DONE";
})(Status2 || (Status2 = {}));
function getStatusMessage(status) {
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
var taskStatus = Status2.Done;
var message = getStatusMessage(taskStatus);
console.log(message);
// q10
function q10(s) {
    return (typeof s === "string");
}
console.log(q10("hello"));
console.log(q10(10));
function calculateaarea(args) {
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
var square = { kind: 'sq', side: 5 };
var circle = { kind: 'circle', radius: 3 };
var rectanglee = { kind: 'rectangle', width: 4, height: 6 };
console.log(calculateaarea(square));
console.log(calculateaarea(circle));
console.log(calculateaarea(rectanglee));
// Example usage:
var userAccount = {
    phone: "123-456-7890",
    email: "user@example.com",
    username: "user123",
    password: "securepassword"
};
