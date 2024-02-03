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


    // program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);



//////////////

         function concatenate(first, last) {
           var full;
           full = first + last;
           return full;
         }
         function secondFunction() {
           var result;
           result = concatenate("Zara", "Ali");
           document.write(result);
         }

/////

/*
function abc() {
let x = 30;
let y = 40;
document.write(x * y);
}
abc();
*/

// Anonymous function
(function () {
  let x11 = 10;
  let y11 = 20;
  document.write(x * y);
}) ();  // () this indicated function is called.


/////


        var x11 = function (){
            document.write("Hello");
        }
        // document.write(x) -> we can't call the var x like this because it will directly print the whole function rather than printing just the value inside the function.
        x(); // Printing the anonymous function by calling the variable name.


/////////////

    setTimeout(function () {
      console.log("Welcome to GeeksforGeeks!");
    }, 2000);


    var name = "Allen";
    document.write(typeof name);




  var name = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
  document.write(name.substring(12)); // display data from position 12 and all further on..


    var namew = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    var rw = namew.replace("Allen", "Sal"); // replace basically replaces the first occuring word in our string which we want to replace, like suppose we want to replace "Allen" with "Sal" and there are total 10 words with "Allen" so it will only replace the first word "Allen"
    document.write(rw);


////////////////

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { foo: 'bar' };
            resolve(data);
        }, 1000); // Simulate a delay
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


//// Transform a function with multiple arguments into a sequence of functions with a single argument

const add = (a) => (b) => a + b;
const add5 = add(5);
console.log(add5(3)); // Output: 8


//////

const add = (a, b) => a + b; // Equivalent to function add(a, b) { return a + b; }


////
const greet = (name) => {
  console.log("Hello, " + name + "!");
};


/////
setTimeout(() => console.log("This runs after 2 seconds"), 2000);
