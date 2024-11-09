// Declare the secret number as a random integer between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0; // Initialize attempts counter
let guessedNumber; // Variable to store the player's guess

console.log("Welcome to the Guessing Game!");
console.log("I'm thinking of a number between 1 and 10. Can you guess it?");

do {
    // Prompt the player for their guess
    guessedNumber = parseInt(prompt("Enter your guess:"));
    attempts++; // Increment the attempt counter

    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else if (guessedNumber === secretNumber) {
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
        console.log(`It took you ${attempts} attempts.`);
    } else {
        console.log("Please enter a valid number.");
    }
} while (guessedNumber !== secretNumber);