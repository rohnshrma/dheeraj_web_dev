// ---------------------------
// LOOP CONCEPT FOR BEGINNERS
// ---------------------------

// A loop is used to repeat a block of code multiple times without writing it again and again.
// Instead of copying the same line 10 times, we use loops to AUTOMATE repetition.

// There are mainly 2 kinds of loops in JavaScript:
// 1. FOR loop  -> Best when we know HOW MANY times the loop should run (fixed iteration).
// 2. WHILE loop -> Best when we DON'T exactly know how many times the loop will run (non-fixed),
//                  or we want to keep looping until a condition becomes false.

// ------------------------------------------
// How a for loop works (3 steps inside loop):
// for(initialization; condition; update){
//    // repeated code
// }
//
// 1. Initialization -> define the starting point (e.g., var i = 1).
// 2. Condition      -> check whether the loop should continue or stop.
// 3. Update         -> change the variable value in each step (e.g., i++ or i--).
// -------------------------------------------

// Example 1: Fill water up to 1000 in steps of 100
for (var water = 0; water < 1000; water += 100) {
  // STEP 1: water starts at 0
  // STEP 2: check condition → is water < 1000?
  // STEP 3: print water value
  // STEP 4: update (water += 100 means add 100 each time)
  console.log(water); // prints 0,100,200,...,900
}

// Example 2: Print numbers from 1 to 10
for (var i = 1; i <= 10; i += 1) {
  // i starts at 1
  // as long as i <= 10, loop keeps running
  // i increases by 1 each time
  console.log(i); // prints 1,2,3,...,10
}

// Example 3: Print numbers from 10 down to 1
for (var i = 10; i >= 1; i -= 1) {
  // i starts at 10
  // as long as i >= 1, loop keeps running
  // i decreases by 1 each time
  console.log(i); // prints 10,9,8... down to 1
}

// ------------------------------------------
// WHILE LOOP CONCEPT
// ------------------------------------------
// while(condition){
//    // repeated code
// }
//
// - While loop only checks the condition.
// - Initialization and Update must be written separately (outside or inside the loop).
// - It’s useful when we don’t know the exact number of repetitions beforehand.

// Example 4 (same as Example 2 but using while): Print numbers 1 to 10
var j = 1; // initialization outside
while (j <= 10) {
  // only condition here
  console.log(j); // print j
  j += 1; // update
}

// Example 5 (same as Example 3 but using while): Print numbers 10 to 1
var k = 10; // initialization outside
while (k >= 1) {
  // condition check
  console.log(k); // print k
  k -= 1; // update (decrement)
}

// ---------------------------
// SIMPLE SUMMARY FOR STUDENTS
// ---------------------------
// - Use FOR loop when you know exactly how many times to repeat.
// - Use WHILE loop when repetition depends on a condition and may not be fixed.
// Task 1: Print Numbers from 1 to 10
// A for loop is used to repeat a block of code a specific number of times.
// It has three parts: initialization, condition, and increment/decrement.
for (var i = 1; i <= 10; i += 1) {
  // 'var i = 1' declares a variable 'i' and sets it to 1 (starting point).
  // 'i <= 10' is the condition; the loop runs as long as i is less than or equal to 10.
  // 'i += 1' increases i by 1 after each loop iteration (same as i = i + 1).
  console.log(i);
  // console.log(i) prints the value of i to the console on a new line each time.
  // This will print: 1, 2, 3, ..., 10.
}

// Task 2: Print Numbers from 10 Down to 1
// This for loop counts downward from 10 to 1.
for (var i = 10; i >= 1; i -= 1) {
  // 'var i = 10' sets the starting value of i to 10.
  // 'i >= 1' means the loop continues as long as i is greater than or equal to 1.
  // 'i -= 1' decreases i by 1 after each iteration (same as i = i - 1).
  console.log(i);
  // Prints the value of i: 10, 9, 8, ..., 1, each on a new line.
}

// Task 3: Print Even Numbers from 2 to 20
// This loop prints even numbers by incrementing by 2 each time.
for (var i = 2; i <= 20; i += 2) {
  // 'var i = 2' starts i at 2 (first even number in the range).
  // 'i <= 20' keeps the loop running until i reaches 20.
  // 'i += 2' increases i by 2, so we get only even numbers (2, 4, 6, ...).
  console.log(i);
  // Prints: 2, 4, 6, 8, ..., 20.
}

// Task 4: Print Odd Numbers from 1 to 19
// This loop prints odd numbers by incrementing by 2, starting from 1.
for (var i = 1; i <= 19; i += 2) {
  // 'var i = 1' starts at 1 (first odd number).
  // 'i <= 19' ensures the loop stops at 19 (last odd number in range).
  // 'i += 2' skips even numbers by adding 2, giving us 1, 3, 5, ....
  console.log(i);
  // Prints: 1, 3, 5, 7, ..., 19.
}

// Task 5: Print Squares from 1 to 10
// This loop calculates and prints the square of each number from 1 to 10.
for (var i = 1; i <= 10; i += 1) {
  // 'var i = 1' starts the loop at 1.
  // 'i <= 10' runs the loop until i reaches 10.
  // 'i += 1' increments i by 1 each time.
  console.log(i, i ** 2);
  // 'i ** 2' calculates the square of i (i * i).
  // console.log(i, i ** 2) prints both i and its square, e.g., "1 1", "2 4", ..., "10 100".
}

// Task 6: Print Countdown from 50 to 0 in Steps of 10
// This loop counts down in steps of 10, starting from 50.
for (var i = 50; i >= 0; i -= 10) {
  // 'var i = 50' starts at 50.
  // 'i >= 0' continues the loop until i reaches 0.
  // 'i -= 10' decreases i by 10 each time (50, 40, 30, ...).
  console.log(i);
  // Prints: 50, 40, 30, 20, 10, 0.
}

// Task 7: Print Multiplication Table for 5 (5x1 to 5x10)
// This loop creates a multiplication table for a user-entered number.
var num = parseInt(prompt("Enter a number : ")); // Prompts user for input and converts it to an integer.
// 'var num' stores the number entered by the user (e.g., 2).
// 'parseInt' converts the input string to an integer for calculations.
// 'prompt' shows a dialog box for user input.
for (var i = 1; i <= 10; i += 1) {
  // 'var i = 1' starts the loop at 1.
  // 'i <= 10' runs until i reaches 10.
  // 'i += 1' increments i by 1 each time.
  console.log(`${num} x ${i} = ${num * i}`);
  // Uses template literals (backticks) to format the output.
  // '${num} x ${i} = ${num * i}' creates a string like "2 x 1 = 2".
  // Prints: "2 x 1 = 2", "2 x 2 = 4", ..., "2 x 10 = 20" (if num is 2).
}

// Task 8: Print Numbers from 100 Down to 50
// This loop counts down from 100 to 50.
for (var i = 100; i >= 50; i -= 1) {
  // 'var i = 100' starts at 100.
  // 'i >= 50' continues until i reaches 50.
  // 'i -= 1' decreases i by 1 each time.
  console.log(i);
  // Prints: 100, 99, 98, ..., 50.
}

// Task 9: Print Sum of Numbers from 1 to 5
// This loop calculates the sum of numbers from 1 to 5.
var sum = 0; // Declares a variable 'sum' and sets it to 0 to store the running total.
for (var i = 1; i <= 5; i += 1) {
  // 'var i = 1' starts at 1.
  // 'i <= 5' runs until i reaches 5.
  // 'i += 1' increments i by 1.
  sum += i; // Adds the current value of i to sum (sum = sum + i).
  // After each iteration: sum = 0+1, 1+2, 3+3, 6+4, 10+5.
}
console.log(sum);
// Prints the final sum (15) after the loop finishes.

// Task 10: Print Every Third Number from 3 to 30
// This loop prints numbers in steps of 3, starting from 3.
for (var i = 3; i <= 30; i += 3) {
  // 'var i = 3' starts at 3.
  // 'i <= 30' runs until i reaches 30.
  // 'i += 3' increments i by 3 each time (3, 6, 9, ...).
  console.log(i);
  // Prints: 3, 6, 9, 12, ..., 30.
}

//======= ========================================    tasks

// Print numbers from 1 to 50 that are divisible by 3
// Print numbers from 1 to 100 that are greater than 50
// Print numbers from 1 to 20 that are less than 10
// Print numbers from 1 to 100 that end with 5
// Print numbers from 1 to 30 that are divisible by 5
// Print numbers from 1 to 100 that are multiples of 7
// Print numbers from 1 to 50 that are not divisible by 2
// Print numbers from 1 to 100 that are greater than 25 but less than 75
// Print numbers from 1 to 40 that are divisible by 4
// Print numbers from 1 to 100 that are even and greater than 50
// Print numbers from 1 to 60 that are divisible by 6
// Print numbers from 1 to 100 that are odd and less than 30
// Print numbers from 1 to 50 that are multiples of 3 and 5
// Print numbers from 1 to 100 that are not divisible by 3
// Print numbers from 1 to 20 that are greater than 15
// Print numbers from 1 to 100 that end with 0
// Print numbers from 1 to 50 that are even and divisible by 4
// Print numbers from 1 to 100 that are odd and divisible by 5
// Print numbers from 1 to 30 that are greater than 10 but not divisible by 3
// Print numbers from 1 to 100 that are multiples of 2 or 3
// Print numbers from 1 to 50 that are less than 25 and odd
// Print numbers from 1 to 100 that are divisible by 7 or 11
// Print numbers from 1 to 40 that are not multiples of 5
// Print numbers from 1 to 100 that are even or greater than 90

// == While loop non fixed iteration
// var yourName = prompt("Enter name :");

// while (yourName.length < 3) {
//   yourName = prompt("Enter correct name :");
// }

// console.log(yourName);

// var yourName = prompt("Enter full name :");

// while (yourName.trim().split(" ").length !== 2) {
//   yourName = prompt("Enter correct full name :");
// }

// console.log(yourName);

// Task 1: Guess a number between 1 and 10
// Generate a random number (1-10). Use prompt() to let the user guess until correct, showing "Correct!" with alert() when they guess it.

// Task 2: Count positive numbers
// Prompt user for numbers and count how many are positive until they enter 0, then show the count with alert().

var total = 0;

while (true) {
  var n = parseInt(prompt("Enter a number : "));
  if (n > 0) {
    total += n;
  } else {
    console.log(`You entered zero or negative`);
    break;
  }
}

console.log(total);
// Task 3: Password retry
// Set a password (e.g., "pass123"). Let user try entering it via prompt() until correct, then show "Success!" with alert().

// Task 4: Double a number until over 100
// Prompt user for a starting number, double it until it exceeds 100, then show the final number with alert().

// Task 5: Simple bank balance
// Start with a balance of 500. Let user subtract amounts via prompt() until balance is 0 or less, showing the new balance each time with alert().

// Task 6: Collect names until empty
// Use prompt() to collect names in an array until the user enters an empty string, then show all names with alert() or console.log().

// Task 7: Roll a die until 5 or 6
// Simulate rolling a 6-sided die (using Math.random()) until a 5 or 6 is rolled, then show the number of rolls with alert().

// Task 8: Sum numbers up to a limit
// Prompt user for a limit, add consecutive integers (1, 2, 3, ...) until the sum exceeds the limit, then show the sum with alert().

// Task 9: Halve a number until below 10
// Prompt user for a positive number, divide it by 2 until it’s less than 10, then show how many steps it took with alert().

// Task 10: Simple menu with two options
// Use prompt() to show a menu (1: Show "Hi!", Q: Quit). Keep showing the menu until user enters 'Q', using alert() for responses.
