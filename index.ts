#! /usr/bin/env node 

import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number guessing Game:")
const answer = await inquirer.prompt([
    {
        name: "Userguessnumber",
        type: "number",
        message: "Please guess a number between 1-6: "
    }
])
if (answer.Userguessnumber === randomNumber){
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("Oops! You guessed wrong number");
}









