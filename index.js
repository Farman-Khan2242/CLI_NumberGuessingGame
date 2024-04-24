#! /usr/bin/env node 
import inquirer from "inquirer";
let condition = true;
let randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);if we show the random number than uncomment this line
console.log("Welcome to Number guessing Game:");
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "Userguessnumber",
            type: "number",
            message: "Please guess a number between 1-6: "
        }
    ]);
    if (answer.Userguessnumber === randomNumber) {
        console.log("Congratulation You Guessed Right Number");
        condition = false;
    }
    else if (answer.Userguessnumber > 6) {
        console.log("Please select Valid Number");
    }
    else {
        console.log("Oops! You guessed wrong number quess again:");
    }
}
