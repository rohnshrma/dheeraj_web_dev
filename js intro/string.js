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

javascript; // == String Concept ==
// A string is a sequence of characters (letters, numbers, symbols, or spaces) used to represent text.
// Strings can be enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// Example: "hello", 'world', `123` are all valid strings.

// == Checking Data Type with `typeof` ==
// The `typeof` operator returns the data type of a value or variable as a string (e.g., "string", "number").

var txt = "hello world"; // Declares a variable `txt` and assigns it the string "hello world".
// console.log(txt, typeof txt); // Would print: "hello world string"
// `console.log` outputs to the console. Here, it shows `txt` ("hello world") and its type ("string").

// console.log(typeof "hello@123"); // Would print: "string"
// `typeof` checks the type of "hello@123". It’s a string because it’s enclosed in quotes.

// console.log(typeof "hello@12"); // Would print: "string"
// Similarly, "hello@12" is a string, as it’s enclosed in quotes.

// console.log(typeof `hello @123`); // Would print: "string"
// Backticks (` `) also create strings. This is a string, just like single or double quotes.
// Backticks are special because they allow embedding expressions (template literals).

// == String Length ==
// The `.length` property returns the total number of characters in a string, including spaces.

// console.log(txt.length); // Would print: 11
// `txt` ("hello world") has 11 characters: 5 for "hello", 1 space, 5 for "world".

// == Prompt and Input Data Type ==
// The `prompt()` function opens a dialog box to collect user input, which is always returned as a string.

// var fName = prompt("Enter your first name : "); // Prompts user for input (e.g., "John") and stores it in `fName`.
// console.log(fName, typeof fName); // Would print: e.g., "John string"
// Outputs the user’s input and confirms its type is "string".

// == Converting String to Number ==
// Since `prompt()` returns strings, we use `Number()`, `parseInt()`, or `parseFloat()` to convert strings to numbers.

// var age = Number(prompt("Enter your age : ")); // Prompts for age (e.g., "25") and converts it to a number (25).
// `Number()` converts a string to a number (handles integers and decimals).
// console.log(age, typeof age); // Would print: e.g., 25 "number"
// Outputs the converted number and confirms its type is "number".

// var age = parseFloat(prompt("Enter your age : ")); // Prompts for age (e.g., "25.5") and converts to a float (25.5).
// `parseFloat()` converts a string to a floating-point number, preserving decimals.
// console.log(age, typeof age); // Would print: e.g., 25.5 "number"

// var age = parseInt(prompt("Enter your age : ")); // Prompts for age (e.g., "25.5") and converts to an integer (25).
// `parseInt()` converts a string to an integer, discarding any decimal parts.
// console.log(age, typeof age); // Would print: e.g., 25 "number"

// == String Concatenation ==
// Concatenation combines strings using the `+` operator to form a single string.

// var fName = prompt("Enter your first name : "); // Stores user’s first name (e.g., "John") as a string.
// var lName = prompt("Enter your last name : "); // Stores user’s last name (e.g., "Doe") as a string.
// var age = parseInt(prompt("Enter your age : ")); // Stores user’s age as an integer (e.g., 25).

// console.log(
//   "Hello world! my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old."
// ); // Would print: e.g., "Hello world! my name is John Doe and i am 25 years old."
// The `+` operator concatenates strings and variables. `age` (a number) is automatically converted to a string.

// console.log(23 + 23); // Would print: 46
// With numbers, `+` performs arithmetic addition (23 + 23 = 46).

// console.log(23 + "23"); // Would print: "2323"
// When `+` involves a number and a string, the number is converted to a string, and they are concatenated.

// console.log("23" + "23"); // Would print: "2323"
// With two strings, `+` concatenates them into one string ("23" + "23" = "2323").

// == Template Literals ==
// Template literals use backticks (` `) and `${}` to embed variables or expressions in strings.

// console.log(
//   `Hello world! my name is ${fName} ${lName} and i am ${age} years old.`
// ); // Would print: e.g., "Hello world! my name is John Doe and i am 25 years old."
// `${fName}`, `${lName}`, and `${age}` insert variable values directly into the string.

// console.log(
//   `Hello world! my name is ${fName} ${lName} and i am ${age ** 2} years old.`
// ); // Would print: e.g., "Hello world! my name is John Doe and i am 625 years old."
// `${age ** 2}` computes age squared (e.g., 25 * 25 = 625) and inserts the result.

// == String Indexing ==
// Strings are zero-based indexed (first character at index 0).
// Positive indexing: 0 to length-1 (left to right).
// Negative indexing: -1 (last character) to -length (first character), supported by some methods.

// Example: for `txt` = "hello world":
// Positive: h(0) e(1) l(2) l(3) o(4) (5) w(6) o(7) r(8) l(9) d(10)
// Negative: -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

// console.log(txt[0]); // Would print: "h"
// Square brackets access the character at index 0 ("h").

// console.log(txt[-1]); // Would print: undefined
// Square brackets don’t support negative indexing; returns `undefined`.

// console.log(txt[txt.length - 1]); // Would print: "d"
// `txt.length` is 11, so `txt[10]` accesses the last character ("d").

// == String Methods ==
// String methods perform operations like transforming or extracting parts of strings.

// .toUpperCase() converts all characters to uppercase.
console.log(txt.toUpperCase()); // Prints: "HELLO WORLD"
// Converts "hello world" to all uppercase. Returns a new string; `txt` is unchanged.

// .toLowerCase() converts all characters to lowercase.
console.log(txt.toLowerCase()); // Prints: "hello world"
// Since `txt` is already lowercase, returns the same string. Returns a new string.

// == charAt() Method ==
// .charAt(index) returns the character at the specified positive index. Negative indices return "".

console.log(txt.charAt(0)); // Prints: "h"
// Returns the character at index 0 ("h").

console.log(txt.charAt(3)); // Prints: "l"
// Returns the character at index 3 (first "l" in "hello").

console.log(txt.charAt(-1)); // Prints: ""
// `charAt` doesn’t support negative indices; returns an empty string.

// == at() Method ==
// .at(index) returns the character at the specified index, supporting both positive and negative indices.

console.log(txt.at(0)); // Prints: "h"
// Returns the character at index 0 ("h").

console.log(txt.at(3)); // Prints: "l"
// Returns the character at index 3 (first "l").

console.log(txt.at(-1)); // Prints: "d"
// Supports negative indexing; -1 refers to the last character ("d", index 10).

// == indexOf() Method ==
// .indexOf(substring, startPosition) returns the index of the first occurrence of `substring`.
// Returns -1 if not found. `startPosition` (optional) sets the starting index for the search.

console.log(txt.indexOf("l")); // Prints: 2
// Finds the first "l" in "hello world" at index 2.

console.log(txt.indexOf("l", 4)); // Prints: 9
// Searches for "l" starting from index 4 ("o"). Finds "l" in "world" at index 9.

// == lastIndexOf() Method ==
// .lastIndexOf(substring, endPosition) returns the index of the last occurrence of `substring`.
// Returns -1 if not found. `endPosition` (optional) limits search to indices 0 to `endPosition`.

console.log(txt.lastIndexOf("l")); // Prints: 9
// Finds the last "l" in "hello world" (in "world" at index 9).

console.log(txt.lastIndexOf("l", 6)); // Prints: 3
// Searches for the last "l" from index 0 to 6 ("hello w"). Finds "l" at index 3.

// == Additional String Methods ==

var str = "hello world this is john doe"; // Declares a new string for further examples.

// .split() splits a string into an array based on a delimiter.
console.log(str.split()); // Prints: ["hello world this is john doe"]
// No delimiter provided; returns an array with the entire string as the only element.

console.log(str.split("")); // Prints: ["h", "e", "l", "l", "o", ..., "e"]
// Splits on empty string; returns an array of individual characters.

console.log(str.split(" ")); // Prints: ["hello", "world", "this", "is", "john", "doe"]
// Splits on space; returns an array of words.

console.log(str.split("o")); // Prints: ["hell", " w", "rld this is j", "hn d", "e"]
// Splits on "o"; each "o" separates the string into substrings.

console.log(str.split("", 2)); // Prints: ["h", "e"]
// Splits on empty string but limits to 2 elements; returns first two characters.

console.log(str.split(" ", 3)); // Prints: ["hello", "world", "this"]
// Splits on space, limits to 3 elements; returns first three words.

console.log(str.split("o", 1)); // Prints: ["hell"]
// Splits on "o", limits to 1 element; returns the first substring before "o".

// .trim() removes leading and trailing whitespace.
console.log("        hello world         ".trim()); // Prints: "hello world"
// Removes all spaces before and after the string.

// .trimEnd() removes trailing whitespace.
console.log("        hello world         ".trimEnd()); // Prints: "        hello world"
// Removes spaces only at the end of the string.

// .trimStart() removes leading whitespace.
console.log("        hello world         ".trimStart()); // Prints: "hello world         "
// Removes spaces only at the start of the string.

// .substring(start, end) extracts a portion of the string from `start` (inclusive) to `end` (exclusive).
console.log(str.substring(0, 5)); // Prints: "hello"
// Extracts from index 0 to 4 (5 is exclusive), giving "hello".

// .slice(start, end) works like `substring` but supports negative indices.
console.log(str.slice(0, 5)); // Prints: "hello"
// Extracts from index 0 to 4, same as `substring` for positive indices.

// .replace(old, new) replaces the first occurrence of `old` with `new`.
console.log(str.replace("o", "x")); // Prints: "hellx world this is john doe"
// Replaces the first "o" (at index 4) with "x".

// .replaceAll(old, new) replaces all occurrences of `old` with `new`.
console.log(str.replaceAll("o", "x")); // Prints: "hellx wxrld this is jxhn dxe"
// Replaces every "o" with "x".

// .repeat(n) repeats the string `n` times.
console.log(str.repeat(3)); // Prints: "hello world this is john doehello world this is john doehello world this is john doe"
// Repeats the entire string three times.

// .search(regex) returns the index of the first match of the regex pattern or -1 if not found.
console.log(str.search(/o/g)); // Prints: 4
// Searches for "o" using a regex with global flag; returns index of first "o" (4).

// .replace(regex, new) replaces matches of the regex with `new`.
console.log(str.replace(/o/g, "x")); // Prints: "hellx wxrld this is jxhn dxe"
// Replaces all "o" matches (global regex) with "x", same as `replaceAll`.

// .match(regex) returns an array of all matches of the regex or null if none.
console.log(str.match(/o/g)); // Prints: ["o", "o", "o", "o"]
// Finds all "o" characters; returns an array of four matches.

// .includes(substring) returns true if the substring exists in the string, else false.
console.log(str.includes("o")); // Prints: true
// Checks if "o" exists in the string; it does, so returns true.

console.log(str.includes("z")); // Prints: false
// Checks if "z" exists; it doesn’t, so returns false.

// .padEnd(targetLength, padString) pads the string’s end to reach `targetLength` using `padString` (optional).
console.log(str.padEnd(30)); // Prints: "hello world this is john doe   "
// Pads with spaces to reach length 30 (adds 3 spaces, as `str` is 27 characters).

console.log(str.padEnd(40, "-")); // Prints: "hello world this is john doe-------------"
// Pads with "-" to reach length 40 (adds 13 "-").

console.log(str.padEnd(40, "-").padStart(52, "*")); // Prints: "************hello world this is john doe-------------"
// First pads end to length 40 with "-", then pads start with "*" to reach length 52 (adds 12 "*").Key Concepts Explained
