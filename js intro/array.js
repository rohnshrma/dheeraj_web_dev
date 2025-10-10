// arrays are reference data type used to store multiple values of similar or different data types
// [ ] are used to create an array

var names = ["rohan", "sohan", "mohan"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// add a new item at the end of an array
names.push("khush");

console.log(names);

// add a new item at the start of an array
names.unshift("zero");
console.log(names);

// remove last item from an array
names.pop();
console.log(names);

// remove first item from an array
names.shift();
console.log(names);

names.splice(1, 0, "hemant", "dheeraj"); // insert index , delete count , new items
console.log(names);

// names.splice(1, 1, "hemant", "dheeraj"); // insert index , delete count , new items
// console.log(names);
// reduce : return a single value
// Concept: The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// It takes a callback function (reducer) and an optional initial value for the accumulator.

// arr.reduce((acc, cv, i, arr) => {}, initialValue);
// acc: Accumulator - holds the accumulated value (updated after each iteration)
// cv: Current Value - the current element being processed
// i: Index - the index of the current element (optional)
// arr: The array reduce() was called on (optional)
// initialValue: Optional starting value for the accumulator

var marks = [34, 23, 2, 3, 45, 3, 4, 23, 33];
// Declares an array 'marks' containing numbers representing scores or values.

//// Using forEach to calculate sum (commented out)
// var sum = 0;
// Initializes a variable 'sum' to 0 to store the total.

// marks.forEach((m) => {
//   sum += m;
// });
// forEach iterates over each element 'm' in 'marks' and adds it to 'sum'.
// Concept: forEach loops through the array but doesn't return a value; it modifies external variables (like 'sum').

// console.log(sum);
// Logs the final value of 'sum' to the console (not executed since commented out).

// Case 1: Using reduce without an explicit initial value
var finalsum = marks.reduce((sum, cv) => {
  // reduce() iterates over 'marks', with 'sum' as the accumulator and 'cv' as the current value.
  // Since no initial value is provided, 'sum' starts with marks[0] (34), and 'cv' starts with marks[1] (23).
  console.log(sum, cv);
  // Logs the current values of 'sum' and 'cv' for each iteration to show how reduce works.
  return sum + cv; // Updates 'sum' by adding 'cv' and returns it as the new accumulator value.
  // Concept: The returned value becomes the accumulator for the next iteration.
});
// The final value of the accumulator is assigned to 'finalsum'.

console.log(finalsum);
// Logs the total sum of all elements in 'marks' (167).

// Finding the largest number without reduce
var largest = marks[0];
// Initializes 'largest' with the first element of 'marks' (34) as a starting point.

marks.forEach((m) => {
  // Iterates over each element 'm' in 'marks'.
  if (m > largest) {
    // Checks if the current element 'm' is greater than 'largest'.
    largest = m;
    // Updates 'largest' if 'm' is greater.
  }
});
// Concept: forEach is used to iterate and compare, modifying 'largest' externally.

console.log(largest);
// Logs the largest number found (45).

// Case 2: Using reduce to find the largest number with an explicit initial value
var largest = marks.reduce((largest, cv) => {
  // reduce() iterates over 'marks', with 'largest' as the accumulator and 'cv' as the current value.
  // Initial value is explicitly set to marks[0] (34) in the reduce call.
  if (cv > largest) {
    // If the current value is greater than the accumulator, return 'cv'.
    return cv;
  } else {
    // Otherwise, keep the current accumulator value.
    return largest;
  }
}, marks[0]);
// The final accumulator value (the largest number, 45) is assigned to 'largest'.
// Concept: Providing an initial value ensures the accumulator starts at a specific value.

var smallest = marks.reduce(
  (smallest, cv) => (cv < smallest ? cv : smallest),
  marks[0]
);
// Uses reduce with a ternary operator to find the smallest number.
// If 'cv' is less than 'smallest', returns 'cv'; otherwise, returns 'smallest'.
// Initial value is marks[0] (34).
// Concept: Ternary operator provides a concise way to handle conditional logic in reduce.
// Final value (smallest number, 2) is assigned to 'smallest'.

console.log(largest);
// Logs the largest number (45).
console.log(smallest);
// Logs the smallest number (2).

// Sorting the array
marks.sort((a, b) => {
  // sort() modifies the array in place, comparing pairs of elements 'a' and 'b'.
  return a - b;
  // Returns a negative value if 'a' should come before 'b' (ascending order).
  // Concept: sort() uses the comparison function to reorder elements.
});
// 'marks' is now sorted in ascending order: [2, 3, 3, 4, 23, 23, 33, 34, 45]

console.log(marks);
// Logs the sorted array in ascending order.

marks.sort((a, b) => {
  // Sorts 'marks' again, this time in descending order.
  return b - a;
  // Returns a positive value if 'b' should come before 'a' (descending order).
});
// 'marks' is now sorted in descending order: [45, 34, 33, 23, 23, 4, 3, 3, 2]

console.log(marks);
// Logs the sorted array in descending order.

// Tasks based on the concepts (reduce and sort):
// Task 1: Use reduce to calculate the product of all numbers in an array.
// Task 2: Use reduce to concatenate all strings in an array of strings into a single string.
// Task 3: Use reduce to count the occurrences of a specific number in an array.
// Task 4: Use reduce to find the second largest number in an array.
// Task 5: Use sort to arrange an array of strings in alphabetical order (case-insensitive).
// Task 6: Use reduce to create an object that groups array elements by their frequency.
// Task 7: Use sort to order an array of objects by a specific property (e.g., age or name).
// Task 8: Use reduce to compute the average of numbers in an array.
// Task 9: Use sort to arrange an array of numbers based on their absolute difference from a given target number.
// Task 10: Use reduce to find the longest string in an array of strings.
