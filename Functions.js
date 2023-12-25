// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}


function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius();

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
let text = "The temperature is " + toCelsius(77) + " Celsius";


function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9));
