// == String Concept ==
// A string is a sequence of characters (letters, numbers, symbols, or spaces) used to represent text.
// Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// Example: "hello", 'world', `123` are all strings.

// == Checking Data Type with `typeof` ==
// The `typeof` operator is used to find out the data type of a value or variable.
// It returns a string indicating the type, such as "string", "number", "boolean", etc.

var txt = "hello world"; // Declares a variable `txt` and assigns it the string "hello world".
// console.log(txt, typeof txt); // Prints: "hello world string"
// `console.log` displays output in the console.
// Here, it shows the value of `txt` ("hello world") and its type ("string").

// console.log(typeof "hello@123"); // Prints: "string"
// Checks the type of the string "hello@123". It’s a string because it’s in quotes.

// console.log(typeof "hello@12"); // Prints: "string"
// Checks the type of the string "hello@12". It’s also a string.

// console.log(typeof `hello @123`); // Prints: "string"
// Checks the type of the string created with backticks (` `). It’s still a string.
// Note: Single quotes, double quotes, and backticks all create strings; they differ in usage (e.g., backticks allow expressions).

// == String Length ==
// The `.length` property returns the number of characters in a string (including spaces).

// console.log(txt.length); // Prints: 11
// `txt` contains "hello world" (5 letters for "hello", 1 space, 5 letters for "world" = 11 characters).

// == Prompt and Input Data Type ==
// The `prompt()` function displays a dialog box to collect user input.
// Input from `prompt()` is always a string, even if the user enters numbers.

// var fName = prompt("Enter your first name : "); // Opens a prompt asking for the first name.
// User types a name (e.g., "John"), which is stored in `fName` as a string.
// console.log(fName, typeof fName); // Prints: e.g., "John string"
// Shows the entered name and confirms its type is "string".

// == Converting String to Number ==
// User input from `prompt()` is a string, but we can convert it to a number for calculations.
// `Number()`, `parseInt()`, and `parseFloat()` are used to convert strings to numbers.

// var age = Number(prompt("Enter your age : ")); // Prompts for age and converts input (e.g., "25") to a number (25).
// `Number()` converts a string to a number (works for both integers and decimals).
// console.log(age, typeof age); // Prints: e.g., 25 "number"
// Shows the converted number and confirms its type is "number".

// var age = parseFloat(prompt("Enter your age : ")); // Prompts for age and converts input to a floating-point number.
// `parseFloat()` converts a string to a number, keeping decimal points (e.g., "25.5" becomes 25.5).
// console.log(age, typeof age); // Prints: e.g., 25.5 "number"

// var age = parseInt(prompt("Enter your age : ")); // Prompts for age and converts input to an integer.
// `parseInt()` converts a string to an integer, ignoring decimals (e.g., "25.5" becomes 25).
// console.log(age, typeof age); // Prints: e.g., 25 "number"

// == String Concatenation ==
// Concatenation means combining strings using the `+` operator to create a single string.

// var fName = prompt("Enter your first name : "); // Stores user’s first name (e.g., "John").
// var lName = prompt("Enter your last name : "); // Stores user’s last name (e.g., "Doe").
// var age = parseInt(prompt("Enter your age : ")); // Stores user’s age as an integer (e.g., 25).

// console.log(
//   "Hello world! my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old."
// ); // Prints: e.g., "Hello world! my name is John Doe and i am 25 years old."
// The `+` operator joins strings and variables into one string.
// Note: `age` (a number) is automatically converted to a string during concatenation.

// console.log(23 + 23); // Prints: 46
// When `+` is used with numbers, it performs addition (23 + 23 = 46).

// console.log(23 + "23"); // Prints: "2323"
// When `+` is used with a number and a string, it concatenates them as strings.
// The number 23 is converted to the string "23", then joined with "23" to make "2323".

// console.log("23" + "23"); // Prints: "2323"
// When `+` is used with two strings, it concatenates them into one string ("23" + "23" = "2323").

// == Template Literals ==
// Template literals use backticks (` `) to create strings and allow embedding variables/expressions using `${}`.
// They make it easier to write readable strings with dynamic values.

// console.log(
//   `Hello world! my name is ${fName} ${lName} and i am ${age} years old.`
// ); // Prints: e.g., "Hello world! my name is John Doe and i am 25 years old."
// `${fName}`, `${lName}`, and `${age}` insert the values of the variables directly into the string.

// console.log(
//   `Hello world! my name is ${fName} ${lName} and i am ${age ** 2} years old.`
// ); // Prints: e.g., "Hello world! my name is John Doe and i am 625 years old."
// `${age ** 2}` is an expression (age squared, e.g., 25 * 25 = 625).
// Expressions inside `${}` are evaluated, and the result is inserted into the string.
// == String Indexing ==
// Indexing is a way to access individual characters in a string using their position.
// JavaScript uses zero-based indexing, meaning the first character is at position 0.
// Strings can be indexed from left to right (positive indexing) or right to left (negative indexing, with some methods).

// Example string: "hello world"
// Positive indexing (left to right):
//  h  e  l  l  o     w  o  r  l  d
//  0  1  2  3  4  5  6  7  8  9 10
// Negative indexing (right to left, supported by some methods like `at`):
// -11-10 -9 -8 -7 -6 -5 -4 -3 -2 -1

// == Key Notes on Indexing ==
// - The first character is always at index 0.
// - The last character is at index [string.length - 1].
// - Negative indexing is not supported with square brackets ([ ]) or some methods like `charAt`.

// The following lines are commented out in your code but included for explanation:
// console.log(txt[0]); // Would print: "h"
// Using square brackets [ ] accesses the character at the specified index.
// Here, `txt[0]` gets the first character of "hello world", which is "h".

// console.log(txt[-1]); // Would print: undefined
// Square brackets [ ] do NOT support negative indexing in JavaScript.
// Trying to use a negative index returns `undefined` because it’s invalid.

// console.log(txt[txt.length - 1]); // Would print: "d"
// `txt.length` is 11 for "hello world" (11 characters).
// `txt.length - 1` is 10, so `txt[10]` gets the last character, "d".

// == String Methods ==
// String methods are built-in functions that perform operations on strings, like transforming or extracting parts of them.

// .toUpperCase() converts all characters in the string to uppercase.
console.log(txt.toUpperCase()); // Prints: "HELLO WORLD"
// `txt` ("hello world") is converted to all uppercase letters.
// Note: The original string `txt` is unchanged; this method returns a new string.

// .toLowerCase() converts all characters in the string to lowercase.
console.log(txt.toLowerCase()); // Prints: "hello world"
// `txt` is already lowercase, so it returns the same string.
// Like `toUpperCase`, it returns a new string without modifying `txt`.

// == charAt() Method ==
// .charAt(index) returns the character at the specified index.
// It only supports positive indexing; negative indices return an empty string.

console.log(txt.charAt(0)); // Prints: "h"
// Gets the character at index 0 of "hello world", which is "h".

console.log(txt.charAt(3)); // Prints: "l"
// Gets the character at index 3, which is the first "l" in "hello".

console.log(txt.charAt(-1)); // Prints: ""
// Negative indices are not supported by `charAt`; it returns an empty string ("").

// == at() Method ==
// .at(index) returns the character at the specified index.
// Unlike `charAt`, it supports both positive and negative indexing.

console.log(txt.at(0)); // Prints: "h"
// Gets the character at index 0, which is "h" (same as `charAt(0)`).

console.log(txt.at(3)); // Prints: "l"
// Gets the character at index 3, which is the first "l".

console.log(txt.at(-1)); // Prints: "d"
// Negative indexing works with `at`! -1 refers to the last character, "d".
// For "hello world", -1 is the same as index 10 (txt.length - 1).

// == indexOf() Method ==
// .indexOf(substring, startPosition) returns the index of the first occurrence of the specified substring.
// If the substring is not found, it returns -1.
// The optional `startPosition` tells it where to start searching (inclusive).

console.log(txt.indexOf("l")); // Prints: 2
// Finds the first "l" in "hello world". It’s at index 2 (h-e-l).

console.log(txt.indexOf("l", 4)); // Prints: 9
// Starts searching for "l" from index 4 (inclusive).
// In "hello world", index 4 is "o". The next "l" is in "world" at index 9.

// == lastIndexOf() Method ==
// .lastIndexOf(substring, endPosition) returns the index of the last occurrence of the specified substring.
// If not found, it returns -1.
// The optional `endPosition` limits the search to the substring up to that index (inclusive).

console.log(txt.lastIndexOf("l")); // Prints: 9
// Finds the last "l" in "hello world", which is in "world" at index 9.

console.log(txt.lastIndexOf("l", 6)); // Prints: 3
// Searches for the last "l" from index 0 to 6 (inclusive).
// In "hello w" (indices 0 to 6), the last "l" is at index 3 (in "hello").
