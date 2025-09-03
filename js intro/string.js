// == String Concept ==
// A string is a sequence of characters (letters, numbers, symbols, or spaces) used to represent text.
// Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// Example: "hello", 'world', `123` are all strings.

// == Checking Data Type with `typeof` ==
// The `typeof` operator is used to find out the data type of a value or variable.
// It returns a string indicating the type, such as "string", "number", "boolean", etc.

var txt = "hello world"; // Declares a variable `txt` and assigns it the string "hello world".
console.log(txt, typeof txt); // Prints: "hello world string"
// `console.log` displays output in the console.
// Here, it shows the value of `txt` ("hello world") and its type ("string").

console.log(typeof "hello@123"); // Prints: "string"
// Checks the type of the string "hello@123". It’s a string because it’s in quotes.

console.log(typeof "hello@12"); // Prints: "string"
// Checks the type of the string "hello@12". It’s also a string.

console.log(typeof `hello @123`); // Prints: "string"
// Checks the type of the string created with backticks (` `). It’s still a string.
// Note: Single quotes, double quotes, and backticks all create strings; they differ in usage (e.g., backticks allow expressions).

// == String Length ==
// The `.length` property returns the number of characters in a string (including spaces).

console.log(txt.length); // Prints: 11
// `txt` contains "hello world" (5 letters for "hello", 1 space, 5 letters for "world" = 11 characters).

// == Prompt and Input Data Type ==
// The `prompt()` function displays a dialog box to collect user input.
// Input from `prompt()` is always a string, even if the user enters numbers.

var fName = prompt("Enter your first name : "); // Opens a prompt asking for the first name.
// User types a name (e.g., "John"), which is stored in `fName` as a string.
console.log(fName, typeof fName); // Prints: e.g., "John string"
// Shows the entered name and confirms its type is "string".

// == Converting String to Number ==
// User input from `prompt()` is a string, but we can convert it to a number for calculations.
// `Number()`, `parseInt()`, and `parseFloat()` are used to convert strings to numbers.

var age = Number(prompt("Enter your age : ")); // Prompts for age and converts input (e.g., "25") to a number (25).
// `Number()` converts a string to a number (works for both integers and decimals).
console.log(age, typeof age); // Prints: e.g., 25 "number"
// Shows the converted number and confirms its type is "number".

var age = parseFloat(prompt("Enter your age : ")); // Prompts for age and converts input to a floating-point number.
// `parseFloat()` converts a string to a number, keeping decimal points (e.g., "25.5" becomes 25.5).
console.log(age, typeof age); // Prints: e.g., 25.5 "number"

var age = parseInt(prompt("Enter your age : ")); // Prompts for age and converts input to an integer.
// `parseInt()` converts a string to an integer, ignoring decimals (e.g., "25.5" becomes 25).
console.log(age, typeof age); // Prints: e.g., 25 "number"

// == String Concatenation ==
// Concatenation means combining strings using the `+` operator to create a single string.

var fName = prompt("Enter your first name : "); // Stores user’s first name (e.g., "John").
var lName = prompt("Enter your last name : "); // Stores user’s last name (e.g., "Doe").
var age = parseInt(prompt("Enter your age : ")); // Stores user’s age as an integer (e.g., 25).

console.log(
  "Hello world! my name is " +
    fName +
    " " +
    lName +
    " and i am " +
    age +
    " years old."
); // Prints: e.g., "Hello world! my name is John Doe and i am 25 years old."
// The `+` operator joins strings and variables into one string.
// Note: `age` (a number) is automatically converted to a string during concatenation.

console.log(23 + 23); // Prints: 46
// When `+` is used with numbers, it performs addition (23 + 23 = 46).

console.log(23 + "23"); // Prints: "2323"
// When `+` is used with a number and a string, it concatenates them as strings.
// The number 23 is converted to the string "23", then joined with "23" to make "2323".

console.log("23" + "23"); // Prints: "2323"
// When `+` is used with two strings, it concatenates them into one string ("23" + "23" = "2323").

// == Template Literals ==
// Template literals use backticks (` `) to create strings and allow embedding variables/expressions using `${}`.
// They make it easier to write readable strings with dynamic values.

console.log(
  `Hello world! my name is ${fName} ${lName} and i am ${age} years old.`
); // Prints: e.g., "Hello world! my name is John Doe and i am 25 years old."
// `${fName}`, `${lName}`, and `${age}` insert the values of the variables directly into the string.

console.log(
  `Hello world! my name is ${fName} ${lName} and i am ${age ** 2} years old.`
); // Prints: e.g., "Hello world! my name is John Doe and i am 625 years old."
// `${age ** 2}` is an expression (age squared, e.g., 25 * 25 = 625).
// Expressions inside `${}` are evaluated, and the result is inserted into the string.
