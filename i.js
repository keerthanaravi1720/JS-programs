// function factorial(n) {
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
  
//   // Calculate the factorial of 5
//   const factorialOf5 = factorial(5);
  
//   // Display the factorial of 5
//   console.log(`The factorial of 5 is ${factorialOf5}`);
  


// // Declare two variables to store the two numbers
// let num1 = 10;
// let num2 = 20;

// // Calculate the sum of the two numbers
// let sum = num1 + num2;

// // Display the sum of the two numbers
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

const readline = require('readline-sync');
let num1= readline.question("Enter a num?");
let num2= readline.question("Enter a num2?");
let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
