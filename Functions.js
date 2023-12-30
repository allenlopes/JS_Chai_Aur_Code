let employee = {
  details: function (designation, experience) {
    return this.name + " " + this.id + designation + experience;
  },
};

// Objects declaration
let emp1 = {
  name: "A",
  id: "123",
};
let emp2 = {
  name: "B",
  id: "456",
};
let x = employee.details.call(emp2, "Manager", "4 years");
console.log(x);

//// SOME COMPLEX


// Function to calculate the factorial of a number using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to find the nth Fibonacci number using iteration
function fibonacci(n) {
  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

// Example usage
const numberForFactorial = 5;
const numberForFibonacci = 7;

console.log(`Factorial of ${numberForFactorial}: ${factorial(numberForFactorial)}`);
console.log(`Fibonacci number at position ${numberForFibonacci}: ${fibonacci(numberForFibonacci)}`);


// binding a function to an object.

let obj = { a: 12, b: 13 };
function sum() {
  return this.a + this.b;
}
console.log(sum.call(obj));
