// Calculate the square root of a given number
const number = 25;
const squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`); 

// Generate a random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNum}`);

// Convert a string representation of a number to an actual number
const strNumber = "42";
const actualNumber = Number(strNumber);
console.log(`Converted string "${strNumber}" to number: ${actualNumber}`);

// Check if a value is not a number
const value = "Hello";
const isNotNumber = isNaN(value);
console.log(`Is "${value}" not a number? ${isNotNumber}`); 

// Convert a number to a string
const num = 123;
const numToString = num.toString();
console.log(`Converted number ${num} to string: "${numToString}"`);
