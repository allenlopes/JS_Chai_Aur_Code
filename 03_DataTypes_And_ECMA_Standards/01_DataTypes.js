// Primitives
// 7 Types -> String, Number, Boolean, null, Undefined, Symbol, BigInt

// Numbers
let age = 30;
let price = 19.99;
let pi = 3.14159;


// Strings
let name = "John Doe";
let greeting = "Hello, world!";
let shayari = `Roses are red,
Violets are blue...`;


// Booleans
let isLoggedIn = true;
let isAdmin = false;


// Null
let variableWithoutValue = null;


// Undefined
let unassignedVariable; // Value is undefined


// Objects
let person = {
    name: "Alice",
    age: 25,
    hobbies: ["coding", "reading"]
};


// Arrays
let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];


// Symbols
let uniqueKey1 = Symbol("myKey");


// BigInt
let largeNumber = 9007199254740991n ** 2n; // BigInt with 18 digits




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

// Case conversion
let uppercase = greeting.toUpperCase(); // "HELLO, WORLD!"
let lowercase = message.toLowerCase(); // "this is a string too."

// Trimming whitespace
let trimmed = "   Hello!   ".trim(); // "Hello!"

// Splitting into substrings
let words = fullMessage.split(" "); // ["Hello,", "world!", "This", "is", "a", "string", "too."]

// Replacing substrings:
let modified = introduction.replace("John", "Jane"); // "Hello, my name is Jane and I'm 30 years old."


///////////////////

//// Template Literals Features:

// Multiline strings:
let poem = `Roses are red,
Violets are blue,
JavaScript is cool,
And so are you!`;

// Embedded expressions:
let calculatedValue = 5 * 2;
let result = `The value is ${calculatedValue}.`; // "The value is 10."

