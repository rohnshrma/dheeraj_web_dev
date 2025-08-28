// ===== PRIMITIVE DATA TYPES (SIMPLE DATA TYPES)
// Primitive data types are the most basic types of data in JavaScript.
// They are "simple" because they hold a single value and are not composed of other values (unlike objects or arrays).
// JavaScript has five main primitive data types: string, number, boolean, undefined, and null.

// string : a sequence of characters (alpha, num, special symbol or whitespace) enclosed in single, double quotes or backticks
// - A *string* is a data type used to store text, such as letters, numbers, symbols, or spaces.
// - Strings must be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`\``).
// - Backticks allow for template literals (advanced string formatting), but all three work similarly for basic strings.
// - Concept: Strings are used for things like names, messages, or any text-based data.
// - Examples provided below show valid strings:
"123hfjfj##"; // A string with numbers, letters, and special characters (#).
"kfnjfv34343@@@" // A string with letters, numbers, and special characters (@).
`nsnsj34454j`; // A string using backticks, same as above but could support template literals.
("  "); // A string containing only spaces (still valid, as spaces are characters).

// boolean | bool
// true | false
// - A *boolean* is a data type that can only have one of two values: `true` or `false`.
// - Concept: Booleans are used for decision-making (e.g., is something on or off, yes or no).
// - Example: `true` might mean a light is on, `false` means it’s off.
// - No code is executed here; this is just explaining the boolean type.

// number
// int : numbers without decimal
// float : numbers with decimal
// - The *number* data type represents numerical values in JavaScript.
// - JavaScript doesn’t strictly distinguish between integers (whole numbers, e.g., 5) and floats (decimal numbers, e.g., 5.7).
// - Both are treated as the `number` type, but the comment uses "int" and "float" to clarify the concept.
// - Concept: Numbers are used for calculations, measurements, or counting.
// - Examples: 42 (integer), 3.14 (float), -10 (integer), 0.001 (float).
// - No code is executed here; this is just explaining the number type.

// undefined : unintentional absence of value
// - The *undefined* data type represents a variable that has been declared but not assigned a value.
// - Concept: It’s like an empty box that exists but hasn’t been filled yet.
// - JavaScript automatically assigns `undefined` to variables that are declared without a value.

// variable exists without value
// - This comment emphasizes that `undefined` occurs when a variable is created but not given a value.

// var hello;
// - Declares a variable named `hello` using the `var` keyword.
// - Since no value is assigned, `hello` is automatically `undefined`.
// - Concept: Declaring a variable reserves space in memory, but without a value, it’s `undefined`.
var hello;

// console.log(hello);
// - Prints the value of `hello` to the console.
// - Since `hello` is `undefined` (no value assigned), the console will output: `undefined`.
// - Concept: `console.log()` is used to check the value of a variable, often for debugging.
console.log(hello);

// null : intentional absence of value
// - The *null* data type represents an intentional empty value.
// - Unlike `undefined`, `null` is explicitly set by the programmer to indicate "no value" or "nothing."
// - Concept: Think of `null` as a box you deliberately left empty to show it has no meaningful content.

// variable exists with a null value
// - This comment clarifies that `null` is assigned to a variable on purpose to indicate it has no value.

// var hello = null;
// - Declares a variable named `hello` and initializes it with the value `null`.
// - Concept: Assigning `null` explicitly says, “This variable is intentionally empty.”
// - Note: This re-declares `hello` (overwriting the previous `undefined` value), which is allowed with `var` but might cause confusion in larger programs.
var hello = null;

// console.log(hello);
// - Prints the value of `hello` to the console.
// - Since `hello` is now `null`, the console will output: `null`.
// - Concept: This shows the difference between `undefined` (unintentional absence) and `null` (intentional absence).
console.log(hello);

// hello = 23;
// - Assigns the number `23` to the variable `hello`, overwriting the previous `null` value.
// - Concept: Variables can change values during a program’s execution. Here, `hello` goes from `null` to a number.
hello = 23;

// console.log(hello);
// - Prints the new value of `hello` to the console.
// - Since `hello` is now `23`, the console will output: `23`.
// - Concept: This demonstrates how a variable’s value can be updated and checked.
console.log(hello);
