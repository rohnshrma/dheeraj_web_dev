// arithmetic operators
// These operators perform mathematical operations on numbers.

var a = 12; // Declares variable 'a' and assigns it the value 12 (integer).
var b = 3; // Declares variable 'b' and assigns it the value 3 (integer).

console.log(a + b); // Addition: 12 + 3 = 15. Outputs 15 to the console.
console.log(a - b); // Subtraction: 12 - 3 = 9. Outputs 9 to the console.
console.log(a * b); // Multiplication: 12 * 3 = 36. Outputs 36 to the console.
console.log(a / b); // Division (quotient): 12 / 3 = 4. Outputs 4 to the console.
console.log(a % b); // Modulus (remainder): 12 % 3 = 0 (no remainder). Outputs 0 to the console.
console.log(a ** b); // Exponentiation: 12 raised to the power of 3 (12^3 = 1728). Outputs 1728 to the console.

// assignment operators
// These operators assign values to variables, often combining with arithmetic operations.

// "=" : regular assignment
// The '=' operator assigns a value to a variable.

var x = 34; // Declares variable 'x' and assigns it the value 34.
console.log(x); // Outputs 34 to the console.
x += 10; // Addition assignment: x = x + 10 (34 + 10 = 44). Updates x to 44.
console.log(x); // Outputs 44 to the console.
x -= 10; // Subtraction assignment: x = x - 10 (44 - 10 = 34). Updates x to 34.
console.log(x); // Outputs 34 to the console.
x *= 10; // Multiplication assignment: x = x * 10 (34 * 10 = 340). Updates x to 340.
console.log(x); // Outputs 340 to the console.
x /= 3; // Division assignment: x = x / 3 (340 / 3 ≈ 113.333...). Updates x to approximately 113.333.
console.log(x); // Outputs approximately 113.333 to the console.
x **= 3; // Exponentiation assignment: x = x^3 (113.333^3 ≈ 1453327.161). Updates x to approximately 1453327.161.
console.log(x); // Outputs approximately 1453327.161 to the console.
x %= 3; // Modulus assignment: x = x % 3 (1453327.161 % 3 ≈ 1.161). Updates x to approximately 1.161.
console.log(x); // Outputs approximately 1.161 to the console.

// comparison operators
// These operators compare two values and return a boolean (true or false).

console.log(12 > 2); // Greater than: Checks if 12 is greater than 2. Outputs true.
console.log(12 < 2); // Less than: Checks if 12 is less than 2. Outputs false.
console.log(12 <= 12); // Less than or equal to: Checks if 12 is less than or equal to 12. Outputs true.
console.log(12 >= 12); // Greater than or equal to: Checks if 12 is greater than or equal to 12. Outputs true.

// equals to (compare values)
// The '==' operator checks for equality of values, ignoring data types (type coercion occurs).

console.log(12 == 12); // Checks if 12 equals 12. Outputs true.
console.log(12 == "12"); // Checks if 12 equals string "12". Type coercion converts "12" to number 12. Outputs true.

// strict equals to (compare values and data types)
// The '===' operator checks for equality of both value and type (no type coercion).

console.log(12 === 12); // Checks if 12 (number) strictly equals 12 (number). Outputs true.
console.log(12 === "12"); // Checks if 12 (number) strictly equals "12" (string). Different types, so outputs false.

// not equals to (compare values)
// The '!=' operator checks for inequality of values, ignoring data types (type coercion occurs).

console.log(12 != 11); // Checks if 12 is not equal to 11. Outputs true.
console.log(12 != "11"); // Checks if 12 is not equal to string "11". Type coercion converts "11" to 11. Outputs true.

// strict not equals to (compare values and data types)
// The '!==' operator checks for inequality of value or type (no type coercion).

console.log(12 !== 13); // Checks if 12 (number) is not strictly equal to 13 (number). Outputs true.
console.log(12 !== "12"); // Checks if 12 (number) is not strictly equal to "12" (string). Different types, so outputs true.

// logical operators
// These operators combine boolean expressions to produce a boolean result.

// and ( && )
// The '&&' operator returns true only if all operands are true; otherwise, it returns false.

var x = 123; // Declares variable 'x' and assigns it the value 123.
var y = 33; // Declares variable 'y' and assigns it the value 33.

console.log(x > y && y < x); // Checks if x > y (123 > 33, true) AND y < x (33 < 123, true). true && true = true. Outputs true.
console.log(x < y && y < x); // Checks if x < y (123 < 33, false) AND y < x (33 < 123, true). false && true = false. Outputs false.
console.log(x < y && y > x); // Checks if x < y (123 < 33, false) AND y > x (33 > 123, false). false && false = false. Outputs false.

// or ( || ) expects any one condition to be true to give a true answer
// The '||' operator returns true if at least one operand is true; otherwise, it returns false.

console.log(x > y || y < x); // Checks if x > y (123 > 33, true) OR y < x (33 < 123, true). true || true = true. Outputs true.
console.log(x < y || y < x); // Checks if x < y (123 < 33, false) OR y < x (33 < 123, true). false || true = true. Outputs true.
console.log(x < y || y > x); // Checks if x < y (123 < 33, false) OR y > x (33 > 123, false). false || false = false. Outputs false.

// not ( ! )
// The '!' operator inverts the boolean value (true becomes false, false becomes true).

console.log(!true); // Inverts true to false. Outputs false.
console.log(!false); // Inverts false to true. Outputs true.

console.log(!12 > 10); // Evaluates 12 > 10 (true), then inverts it with '!'. !true = false. Outputs false.
