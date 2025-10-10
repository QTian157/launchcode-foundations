// const readline = require('readline-sync');
const readline = require('readline-sync');

let name = readline.question("What is your name? ");
console.log("Hello, " + name + "!");

let num1 = readline.questionInt("Enter the first numeber: ");
let num2 = readline.questionInt("Enter the second numeber: ");
console.log("The sum is " + (num1 + num2));

let num3 = readline.questionFloat("Enter the first numeber: ");
let num4 = readline.questionFloat("Enter the second numeber: ");
console.log("The sum is " + (num3 + num4));

let num5 = Number(readline.question("Enter the first numeber: "));
let num6 = Number(readline.question("Enter the second numeber: "));
console.log("The sum is " + (num5 + num6));