// When a function is passed into another function as an argument, the passed function becomes a "callback function"
// This means the function is passed to be executed later within the receiving function.
// Callbacks are commonly used in JavaScript for asynchronous operations or to customize behavior.

// Creating a function to calculate age
var calcAge = function () {
  // Defines a function expression named 'calcAge' and assigns it to a variable.
  // Function expressions are not hoisted like function declarations, so they can't be called before definition.
  return (
    new Date().getFullYear() - parseInt(prompt("Enter your year of birth : "))
  );
  // Returns the calculated age:
  // - new Date().getFullYear() gets the current year (e.g., 2025).
  // - prompt("Enter your year of birth : ") displays a dialog box asking the user to input their birth year.
  // - parseInt converts the user's input (a string) to an integer.
  // - Subtracts the birth year from the current year to calculate the age.
};

// calcAge();
// This line is commented out, so it doesn't execute.
// If uncommented, it would call calcAge(), prompting the user for their birth year and returning their age.

// Function to log the remaining years, months, weeks, and days left
// Parameters:
// - averageAge: The expected lifespan (e.g., 90 years).
// - cb: A callback function that returns the user's age.
var lifeSpan = function (averageAge, cb) {
  // Defines a function expression named 'lifeSpan' that takes two parameters.
  // 'cb' is expected to be a function that calculates and returns the user's age.
  var yearsLeft = averageAge - cb();
  // Calls the callback function cb() to get the user's age and subtracts it from averageAge.
  // Stores the result (remaining years) in the variable 'yearsLeft'.
  console.log(
    `Years Left : ${yearsLeft}\nMonths Left : ${yearsLeft * 12}\nWeeks Left : ${
      yearsLeft * 52
    }\nDays Left: ${yearsLeft * 365}`
  );
  // Logs the remaining time in different units using template literals:
  // - Years Left: The calculated years left.
  // - Months Left: Years left multiplied by 12 (approximating months in a year).
  // - Weeks Left: Years left multiplied by 52 (approximating weeks in a year).
  // - Days Left: Years left multiplied by 365 (approximating days in a year, ignoring leap years).
};

// Calling lifeSpan with calcAge as the callback
lifeSpan(90, calcAge);
// Calls the lifeSpan function with:
// - averageAge set to 90 (assuming a lifespan of 90 years).
// - calcAge as the callback function.
// When executed, calcAge() will prompt the user for their birth year, calculate their age,
// and lifeSpan will use that age to compute and log the remaining time.

// Calling lifeSpan with an anonymous function as the callback
lifeSpan(90, function () {
  // Passes an anonymous function (a function without a name) directly as the callback.
  // This achieves the same result as calcAge but is defined inline.
  return (
    new Date().getFullYear() - parseInt(prompt("Enter your year of birth : "))
  );
  // The anonymous function does the same thing as calcAge:
  // - Prompts for the birth year, converts it to an integer, and subtracts it from the current year.
});

// callback => calcAge
// This is a comment indicating that calcAge is used as a callback function in the first lifeSpan call.
// It reinforces the concept that calcAge is passed to lifeSpan to be executed within it.
