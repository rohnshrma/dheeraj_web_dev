// Function declaration: A way to define a reusable block of code that performs a specific task.
// Functions are created using the 'function' keyword, followed by a name, parameters (optional), and a code block.
// The code inside a function only executes when the function is called.

// Syntax for creating a function:
// function functionName(parameters) {
//   // Code to be executed
// }

// Syntax for calling a function:
// functionName(arguments);

// // Function to calculate BMI (Body Mass Index) based on weight (kg) and height (m).
// function calcBmi(weight, height) {
//   // Declare a variable 'bmi' to store the BMI calculation.
//   // BMI formula: weight (kg) divided by height (m) squared.
//   // The ** operator is used for exponentiation (height * height).
//   var bmi = weight / height ** 2;

//   // Conditional statement (if-else) to categorize BMI based on standard ranges.
//   // If bmi is less than 18.5, classify as "Underweight".
//   if (bmi < 18.5) {
//     // console.log outputs the category and BMI value to the console.
//     console.log(`Underweight`, bmi);
//     // Else if bmi is between 18.5 (inclusive) and 25 (exclusive), classify as "Normal weight".
//   } else if (bmi >= 18.5 && bmi < 25) {
//     // The && operator checks if both conditions are true.
//     console.log(`Normal weight`, bmi);
//     // Else if bmi is between 25 (inclusive) and 30 (exclusive), classify as "Overweight".
//   } else if (bmi >= 25 && bmi < 30) {
//     console.log(`overweight`, bmi);
//     // If none of the above conditions are met (bmi >= 30), classify as "Obese".
//   } else {
//     console.log(`obese`, bmi);
//   }
// }

// // Function calls (commented out to prevent execution):
// // calcBmi(100, 1.8); // Would calculate BMI for weight=100kg, height=1.8m.
// // calcBmi(90, 1.8);  // Would calculate BMI for weight=90kg, height=1.8m.

// // Function to calculate the square of a number.
// function calcSquare(num) {
//   // Takes a single parameter 'num' and logs its square.
//   // The ** operator raises 'num' to the power of 2.
//   console.log(num ** 2);
// }

// // Function calls (commented out to prevent execution):
// // calcSquare(23); // Would log 529 (23 * 23).
// // calcSquare(22); // Would log 484 (22 * 22).
// // calcSquare(2);  // Would log 4 (2 * 2).

// // Return keyword:
// // The 'return' statement terminates a function's execution and optionally sends a value back to the caller.
// // Any code after a 'return' statement in a function is not executed.

// function prints() {
//   // Logs the number 1 to the console.
//   console.log(1);
//   // Logs the number 2 to the console.
//   console.log(2);
//   // Return statement terminates the function here; no value is returned.
//   return;
//   // The following lines are unreachable due to the return statement above.
//   console.log(3);
//   console.log(4);
// }

// // Function call (commented out to prevent execution):
// // prints(); // Would log 1 and 2, then stop due to return.

// // Scope:
// // Scope determines the visibility and accessibility of variables.
// // - Global scope: Variables declared outside functions, accessible everywhere.
// // - Local scope: Variables declared inside a function, accessible only within that function.

// // Global variable: Declared outside any function, accessible globally.
// var myName = "john doe"; // Global scope, can be accessed inside and outside functions.

// // Function to calculate age based on year of birth (yob).
// function calcAge(yob) {
//   // Local variable: 'age' is calculated and only accessible within this function.
//   // Uses Date().getFullYear() to get the current year and subtracts yob to calculate age.
//   var age = new Date().getFullYear() - yob;
//   // Returns a template literal (string) combining the global variable 'myName' and local variable 'age'.
//   // Template literals use backticks (`) and ${} for embedding expressions.
//   return `Hey ${myName}, you're ${age} years old.`;
// }

// // Stores the returned value from calcAge in a variable.
// var result = calcAge(1999); // Assuming current year is 2025, calculates age as 2025 - 1999 = 26.
// // Logs the returned string to the console.
// console.log(result); // Outputs: "Hey john doe, you're 26 years old."

// // Function call (commented out to prevent execution):
// // calcAge(1999); // Would calculate age for year of birth 1999.
// // console.log(age); // Would cause an error because 'age' is local to calcAge and not accessible here.

// // ======================== JavaScript Tasks

// // Task 1: Write a function that takes two numbers and returns their sum.
// // Task 2: Create a function to check if a number is even or odd and log the result.
// // Task 3: Write a function that converts Celsius to Fahrenheit using the formula: (C * 9/5) + 32.
// // Task 4: Create a function that takes a string and returns it in reverse order.
// // Task 5: Write a function to find the maximum of three numbers using if-else statements.
// // Task 6: Create a function that calculates the factorial of a given number using a loop.
// // Task 7: Write a function to check if a string is a palindrome (reads the same forward and backward).
// // Task 8: Create a function that takes a number and returns the sum of all numbers from 1 to that number.

// function calcSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calcSum(5));

// // Task 9: Write a function that generates a random number between a given min and max (inclusive).
// // Task 10: Create a function that takes an array of numbers and returns the average of those numbers.

// function avg(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(avg([44, 45, 4, 443, 5, 2, 3, 2, 323]));

// ===================== function expressions
// Function expressions are functions defined and assigned to a variable or passed as arguments.
// Unlike function declarations, they are not hoisted and must be defined before use.

// 1. Anonymous function (function without name)
// An anonymous function is a function without a name, often used in function expressions or as callbacks.

// syntax
// The syntax for an anonymous function is shown below. It’s a function expression without a name.
// function (parameters) {
//   code to be executed
// }
// This defines a function with optional parameters and a body, but no name.
// It can be assigned to a variable or passed as an argument.

// 1 => assign it as a value to a variable
// Example of an anonymous function assigned to a variable.
var addition = function (a, b) {
  // Defines a function expression where an anonymous function is assigned to the variable 'addition'.
  // The function takes two parameters, 'a' and 'b'.
  return a + b;
  // Returns the sum of 'a' and 'b'.
};
// The variable 'addition' now holds a function that can be called like any named function.

// 2 => use it as a callback function
// Comment indicating that anonymous functions can be used as callbacks.
// The comment references 'callback.js', likely the previous code you shared, where 'calcAge'
// and an anonymous function were passed to 'lifeSpan' as callbacks.
// In that context, callbacks are functions passed as arguments to be executed later.

// Variables to test the 'addition' function
var num1 = 12;
// Declares a variable 'num1' and assigns it the value 12.
var num2 = 56;
// Declares a variable 'num2' and assigns it the value 56.

// Calling the 'addition' function and logging the result
console.log(addition(num1, num2));
// Calls the 'addition' function with 'num1' (12) and 'num2' (56) as arguments.
// The function returns 12 + 56 = 68, which is logged to the console.

// 2. arrow function
// This is a comment indicating the next topic, arrow functions, but no code is provided for it.
// Arrow functions are a concise syntax for function expressions, introduced in ES6.
// Syntax: (parameters) => { code to be executed }
// Example: var add = (a, b) => a + b; // Implicit return for single expressions
// Arrow functions are often anonymous and can be used similarly to regular function expressions.
