// if
// The 'if' statement executes a block of code if the specified condition evaluates to true.

// syntax
// if (condition) {
//     code to be executed
// }
// - 'condition' is an expression that evaluates to true or false.
// - If true, the code inside the curly braces {} executes.
// - If false, the code inside the curly braces is skipped.

var age = parseInt(prompt("Enter your age : "));
// - 'prompt' displays a dialog box to take user input as a string.
// - 'parseInt' converts the string input to an integer.
// - 'age' stores the user's input as a number.

if (age > 18) console.log("Eligible");
// - Checks if 'age' is greater than 18.
// - If true, outputs "Eligible" to the console.
// - This is a single-line 'if' statement without curly braces (valid for one statement).

if (age > 18) {
  console.log("Krlo drive");
  console.log("Eligible to drive");
}
// - Same condition (age > 18), but with a block of code in curly braces {}.
// - If true, both console.log statements execute, outputting "Krlo drive" and "Eligible to drive".
// - Curly braces are required for multiple statements.

// else
// The 'else' block runs only if all conditions above it (in the 'if' statement) are false.

// syntax
// if (condition) {
//     // code to be executed if above condition is true
// } else {
//     // code to be executed if condition above is false
// }
// - 'else' does not take a condition; it executes when the 'if' condition is false.

// app 1
if (age >= 18) console.log("Eligible");
else console.log("Not Eligible");
// - Checks if 'age' is greater than or equal to 18.
// - If true, outputs "Eligible".
// - If false, the 'else' block executes, outputting "Not Eligible".
// - Single-line syntax without curly braces.

// app 2
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
// - Same logic as 'app 1', but using curly braces for clarity.
// - If 'age' is 18 or more, outputs "Eligible".
// - Otherwise, outputs "Not Eligible".
// - Curly braces make the code block explicit, useful for multiple statements.

var n = parseInt(prompt("Enter a number"));
// - Prompts the user to enter a number, converts it to an integer, and stores it in 'n'.

if (n > 0) console.log("Positive");
else if (n < 0) console.log("Negative");
else console.log("Zero");
// - 'else if' allows checking additional conditions if the previous 'if' or 'else if' is false.
// - Checks if 'n' is greater than 0; if true, outputs "Positive".
// - If 'n' is not greater than 0, checks if 'n' is less than 0; if true, outputs "Negative".
// - If neither condition is true (i.e., n equals 0), the 'else' block outputs "Zero".
// - Single-line statements without curly braces.

if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// - Same logic as the previous block, but using curly braces for clarity.
// - Checks if 'n' is positive, negative, or zero, and outputs accordingly.
// - Curly braces are optional for single statements but improve readability.

// Practice Tasks for Beginners
// Below are 10 simple tasks to practice 'if', 'else', and 'else if' statements.
// Each task should be solved using basic variables and conditions, without arrays, objects, or functions.

// Task 1: Check if a number is even or odd
// Prompt the user for a number and use the modulus operator (%) to check if it's divisible by 2.
// Output "Even" if the number is even, or "Odd" if it's not.

// Task 2: Check if a person can vote
// Prompt the user for their age.
// If age is 18 or more, output "Can vote". Otherwise, output "Cannot vote".

// Task 3: Determine if a number is divisible by 3
// Prompt the user for a number.
// If the number is divisible by 3 (use %), output "Divisible by 3". Otherwise, output "Not divisible by 3".

// Task 4: Check if a temperature is hot, cold, or moderate
// Prompt the user for a temperature (in Celsius).
// If temperature is above 30, output "Hot". If below 15, output "Cold". Otherwise, output "Moderate".

// Task 5: Determine if a year is a leap year
// Prompt the user for a year.
// If the year is divisible by 4, output "Leap year". Otherwise, output "Not a leap year".
// (Note: This is a simplified check; actual leap year rules are more complex but not required here.)

// Task 6: Check if a number is positive, negative, or zero
// Prompt the user for a number.
// Use 'if', 'else if', and 'else' to output "Positive", "Negative", or "Zero" based on the number.

// Task 7: Determine if a person is a minor, adult, or senior
// Prompt the user for their age.
// If age is less than 18, output "Minor". If 18 to 64, output "Adult". If 65 or more, output "Senior".

// Task 8: Check if a number is greater than 100
// Prompt the user for a number.
// If the number is greater than 100, output "Greater than 100". Otherwise, output "100 or less".

// Task 9: Determine if a score is a pass or fail
// Prompt the user for a test score (0 to 100).
// If the score is 50 or more, output "Pass". Otherwise, output "Fail".

// Task 10: Check if a day number corresponds to a weekday or weekend
// Prompt the user for a day number (1 to 7, where 1 is Monday and 7 is Sunday).
// If the number is 1 to 5, output "Weekday". If 6 or 7, output "Weekend". Otherwise, output "Invalid day".
