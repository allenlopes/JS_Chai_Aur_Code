// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
var add = function(x, y) {
    return x + y;
};

// Arrow function
const multiply = (a, b) => a * b;

// Calling the functions
console.log(greet("John")); // Output: Hello, John!
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 6)); // Output: 24


///////////

// Object creation using object literal syntax
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
    }
};

// Function with a callback
function calculate(a, b, operation, callback) {
    var result = operation(a, b);
    callback(result);
}

// Callback function
function displayResult(result) {
    console.log("The result is: " + result);
}

// Asynchronous function using Promises
function asyncTask(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve("Task completed successfully!");
            } else {
                reject("Task failed!");
            }
        }, 2000);
    });
}

// Using the objects and functions
person.greet(); // Output: Hello, my name is John Doe.

calculate(10, 5, function(x, y) {
    return x + y;
}, displayResult); // Output: The result is: 15

asyncTask(true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
