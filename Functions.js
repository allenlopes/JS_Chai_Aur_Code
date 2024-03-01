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


       /* One way is to add + between two variables
        var name1 = "Allen is a nerd Programmer,";
        var name2 = "Allen has less knowledge but passion for learning makes him worthy"
        document.write(name1+" "+name2);
    */

    // second is to add concat to join 2 variables
        var name1 = "Allen is a nerd Programmer,";
        var name2 = "Allen has less knowledge but passion for learning makes him worthy"
        document.write(name1.concat(" ", name2));


                var name = "Allen is a nerd Programmer";
        document.write(name[0]); // it will give the letter the 0th position

        document.write('<br/>');

        var name = "Allen is a nerd Programmer";
        document.write(name[12]); // it will give the letter the 12th position


        var name = "AlLEn lOpEs";
        document.write("Welcome " + name.toUpperCase()); // basically the user types his/her name in wierd format, so we can just add string function of toUpperCase, which will display the user's name in proper uppercase format.

        document.write("</br>");

        var html = "Dear %NAME%, Here are your tickets";
        var result = html.replace("%NAME%", "Allen"); // replace will basically replace the %NAME% inside the string to "Allen"
        document.write(result);


    var name =
      "Allen is a nerd Programmer, Allen has less knowledge but passion for learning makes him worthy";
    var r = name.replace("Allen", "Sal"); // replace basically replaces the first occuring word in our string which we want to replace, like suppose we want to replace "Allen" with "Sal" and there are total 10 words with "Allen" so it will only replace the first word "Allen"
    document.write(r);


    var name = "AlLEn lOpEs";
    document.write("Welcome " + name.toUpperCase()); // basically the user types his/her name in wierd format, so we can just add string function of toUpperCase, which will display the user's name in proper uppercase format.

    document.write("</br>");

    var html = "Dear %NAME%, Here are your tickets";
    var result = html.replace("%NAME%", "Allen"); // replace will basically replace the %NAME% inside the string to "Allen"
    document.write(result);


        //
        var str = "My name is AllenLopes23";
        var result = str.split(" "); // (" ") the blank space we left is because we are telling the function to split the string into array from that blank; means at blank space there will be comma(,).
        document.write(result); // basically it will give result as an array

document.write('<br/>');

    //
        var str1 = "My name is AllenLopes23";
        var result1 = str1.split("name"); // ("name") means it will split the string into array from that name; means at name there will be comma(,).
        document.write(result1); // basically it will give result as an array

document.write('<br/>');

/*
    Suppose we have an website wherein a user types his first name and last name while creating an account, and we take that input as string;
    so once the account is created the user should get a message of Welcome along with his/her first name only and not last name,
    so, we can use split function to convert an string to array and then display the index position of first name of that array element.
*/
        var name = "Allen Lopes";
        var arr = name.split(" "); // it will first convert the string to array, so the array will get it's index positions which we can print the first name of the person with the array element's index position.
        document.write("Welcome "+arr[0]); // printing the first name using the array's index position 0.


                var arr = ["Allen", "Sal", "Lopes", "Atomic", "Habits"];
                var result = arr.join(" "); // basically it converts the given array into an normal string
                document.write(result);


    // For getting the number of arrays inside the array
    /*
    var arr =["Allen", "Sal"];
    document.write(arr.length);
    */

    // For making the array blank with the help of length function
        var arr =["Allen", "Sal"];
        arr.length = 0;
        document.write(arr.length);

// Concat
        var arr = ["Allen", "Sal"];
        var arr1 = ["Lopes", "Dmello"];
        var result = arr.concat(arr1); // concat will combine arr with arr1
        document.write(result);

// Pop
        var arr = ["Allen", "Sal", "Lopes"];
        arr.pop(); // basically it will pop out the last element in our array, in this case it is Lopes.
        document.write(arr);

// Shift
        var arr = ["Allen", "Sal", "Lopes"];
        arr.shift(); // basically it will pop out the first element in our array, in this case it is Allen.
        document.write(arr);

// Push
        var arr = ["Allen", "Sal"];
        arr.push("Lopes"); // basically it will push the entered element(value) inside our array at the last, in this case it will add "Lopes".
        document.write(arr);

// Unshift
        var arr = ["Allen", "Sal"];
        arr.unshift("Lopes"); // basically it will push the entered element(value) inside our array at the first, in this case it will add "Lopes".
        document.write(arr);

// Splice
    //
        var arr =["Allen", "Sal", "Lopes"];
        arr.splice(1, 1); // basically (1, 1) means, it will remove the element(value) at index position 1 till element(value) at index position 1.
        document.write(arr);

document.write('<br/>');
    //
        var arr =["Allen", "Sal", "Lopes", "Atomic", "Habits"];
        arr.splice(2, 4); // basically (2, 3) means, it will remove the element(value) at index position 2 till element(value) at index position 3.
        document.write(arr);

// IndexOf
        var arr = ["Allen", "Sal", "Lopes", "Atomic", "Habits"];
        document.write(arr.indexOf("Atomic")); // it will display the index position of the element

        document.write("<br/>");

        // if we want to remove index position of an value which is not present in our array then it will give -1
        var arr = ["Allen", "Sal", "Lopes", "Atomic", "Habits"];
        document.write(arr.indexOf("Epic"));

// Array is Array
        var arr = ["Allen", "Sal", "Lopes", "Atomic", "Habits"];
        document.write(Array.isArray(arr)); // it will display true if it's array else it will display false if it's not an array

        document.write("<br/>");

        // let's see an ex. of not an array
        var arr1 = "qwerty";
        document.write(Array.isArray(arr1));

// Global Local Variable
    var x = 30 // Global variable which can be accessed anywhere inside our whole code including inside function
    function test(){
        document.write(x);
    }
    test();


document.write('<br/>')
document.write('<br/>')


    var x1 = 10 // Global variable which can be accessed anywhere inside our whole code including inside function
    function test1(){
        var x1 = 20 // Local variable which can be access only inside the function, i.e here in this case inside function test() only
        document.write(x1);
    }
    test1();
    document.write(x1); // It will display output of global variable x1 = 10.

// Anonymous Functions
// Anonymous function
(function () {
  let x = 10;
  let y = 20;
  document.write(x + y);
}) (); // () this indicated function is called.