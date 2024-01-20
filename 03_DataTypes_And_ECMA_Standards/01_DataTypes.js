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