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

// Example to display the power of provided value.

var pow = new Function("num1", "num2", "return Math.pow(num1,num2)");
document.writeln(pow(2, 3));

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



//// Popups

function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}