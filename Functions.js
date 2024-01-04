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
