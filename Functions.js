// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}


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


/////
const person = {
    name: "John",
    greet: () => console.log("Hello, my name is " + this.name) // `this` refers to the person object
};


/////

async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


//// Generator Functions
function* createNumbers() {
    for (let i = 1; i <= 5; i++) {
        yield i;
    }
}

const numbersGenerator = createNumbers();
console.log(numbersGenerator.next().value); // Output: 1
console.log(numbersGenerator.next().value); // Output: 2


//// Higher Order Functions
const map = (fn, arr) => arr.map(fn);
const double = x => x * 2;
const doubledNumbers = map(double, [1, 2, 3]); // Output: [2, 4, 6]


/// Callback functions
setTimeout(() => console.log("This runs after 2 seconds"), 2000);


//// Closures
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


//// Immediately invoked functions
(function() {
    console.log("This runs immediately");
})();


//// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//
// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);


//// 1. Simple function to calculate area of a rectangle:
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10); // area will be 50
console.log("Area of the rectangle:", area);


//// 2. Function to check if a number is even:
function isEven(number) {
  return number % 2 === 0;
}

const isTwoEven = isEven(2); // isTwoEven will be true
console.log("Is 2 even?", isTwoEven);


//// 3. Function to loop through an array and print elements:
function printArrayElements(arr) {
  for (const element of arr) {
    console.log(element);
  }
}

const myArray = [1, "apple", true];
printArrayElements(myArray);


//// Celcius to farenhite
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const fahrenheit = convertCelsiusToFahrenheit(20); // fahrenheit will be 68
console.log("20°C in Fahrenheit:", fahrenheit);



//// Arrow function to greet someone:
const greet = (name) => {
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!


//// Callback function for setTimeout:
setTimeout(() => {
  console.log("This message will be printed after 3 seconds");
}, 3000);



//// Higher order function:
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((x) => x * 2); // doubledNumbers will be [2, 4, 6]
console.log("Doubled numbers:", doubledNumbers);




const sum = [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum will be 6



const names = ["Alice", "Bob", "Charlie"].sort(); // names will be ["Alice", "Bob", "Charlie"]



const currentTime = Date.now(); // currentTime will be the current timestamp in milliseconds



setTimeout(() => console.log("This message will be printed after 2 seconds"), 2000);


    var name = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    document.write(name.slice(1,4)); // display data from position 1 till position 4

document.write('<br/>');
document.write('<br/>');

    var name1 = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    document.write(name1.slice(12)); // display data from position 12 and all further on..

document.write('<br/>');
document.write('<br/>');

    var name2 = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    document.write(name2.slice(-12)); // start displaying the data from backwards position 12 and till the end..



        var name = "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    document.write(name.substring(12)); // display data from position 12 and all further on..