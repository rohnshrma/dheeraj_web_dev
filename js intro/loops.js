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
// Write a for loop that initializes a variable i to 1, loops while i is less than or equal to 10, and increments i by 1 each time. Log each number on a new line.
// Task 2: Print Numbers from 10 Down to 1
// Write a for loop that initializes a variable i to 10, loops while i is greater than or equal to 1, and decrements i by 1 each time. Log each number on a new line.
// Task 3: Print Even Numbers from 2 to 20
// Write a for loop that initializes a variable to 2, loops while it’s less than or equal to 20, and increments by 2 each time. Log each even number on a new line.
// Task 4: Print Odd Numbers from 1 to 19
// Write a for loop that initializes a variable to 1, loops while it’s less than or equal to 19, and increments by 2 each time. Log each odd number on a new line.
// Task 5: Print Squares from 1 to 10
// Write a for loop that initializes i to 1 and loops up to 10 (increment by 1). Log the square of i (i * i) for each iteration.
// Task 6: Print Countdown from 50 to 0 in Steps of 10
// Write a for loop that initializes a variable to 50, loops while it’s greater than or equal to 0, and decrements by 10 each time. Log each value on a new line.
// Task 7: Print Multiplication Table for 5 (5x1 to 5x10)
// Write a for loop that initializes i to 1 and loops up to 10 (increment by 1). Log the result of 5 multiplied by i in the format “5 x i = result” for each iteration.
// Task 8: Print Numbers from 100 Down to 50
// Write a for loop that initializes a variable to 100, loops while it’s greater than or equal to 50, and decrements by 1 each time. Log each number on a new line.
// Task 9: Print Sum of Numbers from 1 to 5
// Write a for loop that initializes i to 1 and loops up to 5 (increment by 1). Use a variable to accumulate the sum (initialize sum to 0 outside the loop) and log the running sum after each addition inside the loop.
// Task 10: Print Every Third Number from 3 to 30
// Write a for loop that initializes a variable to 3, loops while it’s less than or equal to 30, and increments by 3 each time. Log each number on a new line.
