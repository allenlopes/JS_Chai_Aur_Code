"use strict"; // treat all JS code as newer version


// Booleans
let x = true;
let y = false;

let isCoding = true; // yes
let isOld = false;      // no


// Null
let age = null;


// Object:
const person = {firstName:"John", lastName:"Doe"};





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



//// Strings ////

// Creating Strings ->

// Using single or double quotes
let greeting = "Hello, world!";
let message = 'This is a string too.';

// Using template literals
let name1 = "John";
let age1 = 30;
let introduction = `Hello, my name is ${name1} and I'm ${age} years old.`;



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