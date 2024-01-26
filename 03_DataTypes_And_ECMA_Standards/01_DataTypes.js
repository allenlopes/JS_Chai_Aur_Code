



// Primitives
// 7 Types -> String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreVal = 100.3;

const id = Symbol('123')
const anotherId = Symbol('123')


const bigNumber = 434323434



// Reference (Non Primitive)
// Array, Objects, Functions

// Array
const heroes = ["shaktiman", "naagraj", "doga"]

// Objects
let myObj = {
    name: "Allen",m
    age: "23",
}

// Functions
const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);


let value1 = Symbol("value");
let value2 = Symbol("value");
alert(value1 == value2); // false


////

const obj = {};
Object.defineProperty(obj, "name", {
    value: "John",
    writable: false, // Prevents modification
    enumerable: true, // Visible in for...in loops
    configurable: true // Can be deleted
});


/// Symbol

const uniqueKey = Symbol("myKey");
const obj = {};
obj[uniqueKey] = "secret value"; // Private property


/// Typed Array

const buffer = new Uint8Array(4); // Array of 4 unsigned 8-bit integers
buffer[0] = 255; // Set first byte to maximum value


/// Weak type

let x = 10; // x is a Number
x = "hello"; // x is now a String




//

// Create an object:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Display some data from the object:
document.getElementById("demo").innerHTML =
person1.firstName + " is " + person1.age + " years old.";




//// Accessing Characters:

// Using indexing:
let firstChar = greeting[0]; // "H"
let lastChar = message[message.length - 1]; // "."

/////////////////

//// String Methods:

// Concatenation:
let fullMessage = greeting + " " + message; // "Hello, world! This is a string too."

// Length
let messageLength = message.length; // 22

// Searching
let found = message.indexOf("string"); // 15 (index of first occurrence)


///////////////////

