// ===== OUTPUT
// The following lines demonstrate different ways to display/output information to the user in JavaScript.

// console.log("hello world");
// - `console.log()` is a function that prints text or data to the console (a tool developers use to debug or see output).
// - `"hello world"` is a string (text) enclosed in quotes. This specific text will be printed in the console.
// - Concept: The console is part of the browser's developer tools (accessible via F12 or right-click → Inspect → Console).
console.log("hello world");

// alert("hello world");
// - `alert()` is a function that creates a pop-up dialog box in the browser with a message and an "OK" button.
// - `"hello world"` is the message displayed in the pop-up.
// - Concept: Alerts are used to show simple messages to users, but they pause the program until the user clicks "OK."
alert("hello world");

// window.alert("hello world");
// - `window.alert()` is the same as `alert()`. The `window` object represents the browser window, and `alert()` is a method of `window`.
// - Writing `window.alert()` explicitly shows that `alert()` belongs to the `window` object.
// - Concept: In JavaScript, many functions like `alert()` are part of the global `window` object in browsers.
window.alert("hello world");

// document.write("hello world");
// - `document.write()` is a method that writes text directly to the HTML document (web page).
// - `"hello world"` will appear on the web page itself, not in a console or pop-up.
// - Concept: The `document` object represents the web page’s content. This method is less commonly used today because it can overwrite the entire page if called after the page loads.
document.write("hello world");

// ===== INPUT
// The following line shows how to get input from the user.

// prompt("enter your name: ", "john doe");
// - `prompt()` is a function that displays a dialog box with a message, an input field, and "OK"/"Cancel" buttons.
// - `"enter your name: "` is the message shown to the user, prompting them to type something.
// - `"john doe"` is the default text that appears in the input field (optional; user can change it).
// - Concept: The `prompt()` function returns the text entered by the user (or `null` if they click Cancel). You can store this input in a variable for later use.
// - Example: If the user types "Alice" and clicks OK, the function returns "Alice."
prompt("enter your name: ", "john doe");

// ===== VARIABLES
// Variables are like labeled boxes that store data (e.g., numbers, text) for use in your program.
// Concept: Variables allow you to save, retrieve, and manipulate data dynamically.

// how to create a variable ?
// Variables are created using keywords like `var`, followed by a name, and can optionally be assigned a value.

// var age;
// - `var` is a keyword used to declare (create) a variable.
// - `age` is the variable name, which acts as a label for the data.
// - This line only declares the variable; it doesn’t assign a value, so `age` is `undefined` (a special value meaning "no value").
// - Concept: Declaring a variable reserves a space in memory for storing data later.
var age; // declaration

// age = 23;
// - This assigns the value `23` to the variable `age`.
// - The `=` is the assignment operator, which stores the value on the right into the variable on the left.
// - Concept: Initialization means giving a variable its first value.
age = 23; // initialization

// var yourAge = 34;
// - This line declares a variable called `yourAge` and initializes it with the value `34` in one step.
// - Concept: Combining declaration and initialization is common when you know the value upfront.
var yourAge = 34; // declaration and initialization

// console.log(yourAge, age);
// - This prints the values of `yourAge` and `age` to the console.
// - Multiple values can be passed to `console.log()`, separated by commas, and they’ll be printed with a space between them.
// - Output: `34 23` (because `yourAge` is 34 and `age` is 23).
// - Concept: This is useful for checking the current values of variables during debugging.
console.log(yourAge, age);

// console.log(yourAge + age);
// - This adds the values of `yourAge` (34) and `age` (23) and prints the result to the console.
// - The `+` operator performs addition for numbers.
// - Output: `57` (34 + 23).
// - Concept: Variables can be used in calculations, and the result can be displayed or stored.
console.log(yourAge + age);

// ===== VARIABLE NAMING CONVENTIONS
// Naming conventions are rules and suggestions for naming variables to make code clear and avoid errors.

// RULES
// These are strict requirements enforced by JavaScript.

// 1. No spaces in variable names
// var my name;
// - ❌ This is invalid because variable names cannot contain spaces.
// - Concept: Spaces break the syntax, as JavaScript expects a single, continuous name.
var my name; // ❌

// var myname;
// - ✅ This is valid because it uses a single word with no spaces.
// - Concept: Combine words into one to follow the rule.
var myname; // ✅

// 2. Variable names cannot start with a number but can include or end with numbers
// var 1name;
// - ❌ This is invalid because variable names cannot *start* with a number.
// - Concept: JavaScript reserves names starting with numbers for other purposes.
var 1name; // ❌

// var my1name;
// - ✅ This is valid because the name starts with a letter (`my`) and includes a number (`1`).
var my1name; // ✅

// var my1name1;
// - ✅ This is also valid; numbers can appear anywhere except the start.
var my1name1; // ✅

// 3. Variable names cannot start, include, or end with special symbols, except `_` (underscore) and `$`
// var %name;
// - ❌ This is invalid because `%` is not an allowed special character.
// - Concept: Most special characters (like `%`, `#`, `@`) are reserved for JavaScript operators or syntax.
var %name; // ❌

// var my$name;
// - ✅ This is valid because `$` is an allowed special character.
// - Concept: `$` is often used in libraries like jQuery, but it’s valid for any variable name.
var my$name; // ✅

// var my_name_;
// - ✅ This is valid because `_` (underscore) is an allowed special character.
// - Concept: `_` is commonly used to separate words in variable names (snake_case).
var my_name_; // ✅

// 4. Do not use RESERVED KEYWORDS as variable names
// var var;
// - ❌ This is invalid because `var` is a reserved keyword used to declare variables.
// - Concept: Reserved keywords (like `var`, `if`, `for`, `function`) have special meanings in JavaScript and cannot be used as variable names.
var var; // ❌

// var myvar;
// - ✅ This is valid because `myvar` is not a reserved keyword; it’s just a name that includes `var`.
var myvar; // ✅

// var yourVar;
// - ✅ This is valid and follows the pattern of creating a unique, non-reserved name.
var yourVar; // ✅

// SUGGESTIONS
// These are not strict rules but best practices to make your code readable and maintainable.

// 1. Start your variable name with a lowercase letter
// - Suggestion: Starting with a lowercase letter (e.g., `myVar`) is a common convention in JavaScript.
// - Concept: This distinguishes variables from constructor functions or classes, which typically start with uppercase letters.

// 2. In case of multiword variable names, use camelCasing or snake_casing
// var helloworldmynameis;
// - This is valid but hard to read because it’s one long word with no clear separation.
// - Concept: Readability is important in coding, so multiword names should be formatted for clarity.
var helloworldmynameis; // normal casing 

// var helloWorldMyNameIs;
// - This uses *camelCasing*, where the first word is lowercase, and subsequent words start with an uppercase letter.
// - Example: `hello` + `World` + `My` + `Name` + `Is`.
// - Concept: Camel casing is the most common convention in JavaScript for variable names.
var helloWorldMyNameIs; // camelCasing

// var hello_world_my_name_is;
// - This uses *snake_casing*, where words are separated by underscores (`_`) and all letters are lowercase.
// - Example: `hello` + `_` + `world` + `_` + `my` + `_` + `name` + `_` + `is`.
// - Concept: Snake casing is less common in JavaScript but widely used in other languages like Python.
var hello_world_my_name_is; // snake_casing