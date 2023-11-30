const readline = require('readline-sync');
let num = readline.question("Enter a number?");
let num1 = readline.question("Enter a number2?");
let sum=parseInt(num)+parseInt(num1);
console.log("is sum" + " " + sum);
console.log(num +" +"  + num1 +" = " +sum );