// if
// The 'if' statement executes a block of code if the specified condition evaluates to true.

// syntax
// if (condition) {
//     code to be executed
// }
// - 'condition' is an expression that evaluates to true or false.
// - If true, the code inside the curly braces {} executes.
// - If false, the code inside the curly braces is skipped.

// var age = parseInt(prompt("Enter your age : "));
// - 'prompt' displays a dialog box to take user input as a string.
// - 'parseInt' converts the string input to an integer.
// - 'age' stores the user's input as a number.

// if (age > 18) console.log("Eligible");
// - Checks if 'age' is greater than 18.
// - If true, outputs "Eligible" to the console.
// - This is a single-line 'if' statement without curly braces (valid for one statement).

// if (age > 18) {
//   console.log("Krlo drive");
//   console.log("Eligible to drive");
// }
// - Same condition (age > 18), but with a block of code in curly braces {}.
// - If true, both console.log statements execute, outputting "Krlo drive" and "Eligible to drive".
// - Curly braces are required for multiple statements.

// else
// The 'else' block runs only if all conditions above it (in the 'if' statement) are false.

// syntax
// if (condition) {
//     // code to be executed if above condition is true
// } else {
//     // code to be executed if condition above is false
// }
// - 'else' does not take a condition; it executes when the 'if' condition is false.

// app 1
// if (age >= 18) console.log("Eligible");
// else console.log("Not Eligible");
// - Checks if 'age' is greater than or equal to 18.
// - If true, outputs "Eligible".
// - If false, the 'else' block executes, outputting "Not Eligible".
// - Single-line syntax without curly braces.

// app 2
// if (age >= 18) {
//   console.log("Eligible");
// } else {
//   console.log("Not Eligible");
// }
// - Same logic as 'app 1', but using curly braces for clarity.
// - If 'age' is 18 or more, outputs "Eligible".
// - Otherwise, outputs "Not Eligible".
// - Curly braces make the code block explicit, useful for multiple statements.

// var n = parseInt(prompt("Enter a number"));
// - Prompts the user to enter a number, converts it to an integer, and stores it in 'n'.

// if (n > 0) console.log("Positive");
// else if (n < 0) console.log("Negative");
// else console.log("Zero");

// - 'else if' allows checking additional conditions if the previous 'if' or 'else if' is false.
// - Checks if 'n' is greater than 0; if true, outputs "Positive".
// - If 'n' is not greater than 0, checks if 'n' is less than 0; if true, outputs "Negative".
// - If neither condition is true (i.e., n equals 0), the 'else' block outputs "Zero".
// - Single-line statements without curly braces.

// if (n > 0) {
//   console.log("Positive");
// } else if (n < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// - Same logic as the previous block, but using curly braces for clarity.
// - Checks if 'n' is positive, negative, or zero, and outputs accordingly.
// - Curly braces are optional for single statements but improve readability.

// Practice Tasks for Beginners
// Below are 10 simple tasks to practice 'if', 'else', and 'else if' statements.
// Each task should be solved using basic variables and conditions, without arrays, objects, or functions.

// Task 1: Check if a number is even or odd
// Prompt the user for a number and use the modulus operator (%) to check if it's divisible by 2.
// Output "Even" if the number is even, or "Odd" if it's not.

// var num = parseInt(prompt("Enter a number : "));
// if (num % 2 === 0) {
//   console.log(`${num} is even`);
// } else {
//   console.log(`${num} is odd`);
// }

// Task 2: Check if a person can vote
// Prompt the user for their age.
// If age is 18 or more, output "Can vote". Otherwise, output "Cannot vote".

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 18) console.log("Can Vote");
// else console.log("Cannot Vote");

// Task 3: Determine if a number is divisible by 3
// Prompt the user for a number.
// If the number is divisible by 3 (use %), output "Divisible by 3". Otherwise, output "Not divisible by 3".

// var num = parseInt(prompt("Enter a number : "));
// if (num % 3 === 0) {
//   console.log(`${num} is Divisible by 3`);
// } else {
//   console.log(`${num} is Not Divisible by 3`);
// }

// Task 4: Check if a temperature is hot, cold, or moderate
// Prompt the user for a temperature (in Celsius).
// If temperature is above 30, output "Hot". If below 15, output "Cold". Otherwise, output "Moderate".

// var temp = parseInt(prompt("Enter temperature : "));

// if (temp > 30) console.log("Hot");
// else if (temp <= 30 && temp >= 15) console.log("Moderate");
// else console.log("Cold");

// Task 5: Determine if a year is a leap year
// Prompt the user for a year.
// If the year is divisible by 4, output "Leap year". Otherwise, output "Not a leap year".
// (Note: This is a simplified check; actual leap year rules are more complex but not required here.)

// Task 6: Check if a number is positive, negative, or zero
// Prompt the user for a number.
// Use 'if', 'else if', and 'else' to output "Positive", "Negative", or "Zero" based on the number.

// Task 7: Determine if a person is a minor, adult, or senior
// Prompt the user for their age.
// If age is less than 18, output "Minor". If 18 to 64, output "Adult". If 65 or more, output "Senior".

// Task 8: Check if a number is greater than 100
// Prompt the user for a number.
// If the number is greater than 100, output "Greater than 100". Otherwise, output "100 or less".

// Task 9: Determine if a score is a pass or fail
// Prompt the user for a test score (0 to 100).
// If the score is 50 or more, output "Pass". Otherwise, output "Fail".

// Task 10: Check if a day number corresponds to a weekday or weekend
// Prompt the user for a day number (1 to 7, where 1 is Monday and 7 is Sunday).
// If the number is 1 to 5, output "Weekday". If 6 or 7, output "Weekend". Otherwise, output "Invalid day".

// ====== nested conditions

// var age = parseInt(prompt("Enter your age : "));
// var hasLicense = prompt("Do Your Have License (yes) or (no) : ").toLowerCase();

// check if a person is 18 or over 18 , if he is check if he has license , if he  has
// print "eligble to drive", if he doesn't have a license , print("Cannot drive , No License found")

// if person is not 18 or above print , not eligible

// if (age > 18) {
//   if (hasLicense == "yes") {
//     console.log("Eligble to drive, License Checked");
//   } else {
//     console.log("Cannot drive , No License found");
//   }
// } else {
//   console.log("Not Eligible");
// }

// Here are 5 tasks involving nested conditions, similar to the provided example, without solutions:

// Task 1: Movie Ticket Eligibility
// Prompt the user for their age and whether they have a student ID (yes/no).
// If the user is 16 or older, check if they have a student ID. If they do,
// print "Eligible for student discount ticket." If they don’t,
// print "Eligible for regular ticket." If the user is under 16, print "Not eligible for movie ticket."

// var age = parseInt(prompt("Enter your age : "));
// var hasID = prompt("Do Your Have Student ID (yes) or (no) : ").toLowerCase();

// if (age >= 16) {
//   if (hasID === "yes") {
//     console.log("Eligible for student discount ticket.");
//   } else {
//     console.log("Eligible for regular ticket.");
//   }
// } else {
//   console.log("Not eligible for movie ticket.");
// }

// Task 2: Library Book Borrowing
// Prompt the user for their membership status (active/inactive)
//  and the number of books they want to borrow. If the membership is active,
//  check if they want to borrow 3 or fewer books. If yes, print "Books approved for borrowing."
// If more than 3, print "Cannot borrow more than 3 books." If membership is inactive, print "Please renew membership."

// var isMember = prompt("Are you a member (yes) or (no) : ");
// var no_of_book = parseInt(prompt("Enter no of books you want to borrow : "));

// if (isMember === "yes") {
//   if (no_of_book <= 3) {
//     console.log("Books approved for borrowing.");
//   } else {
//     console.log("Cannot borrow more than 3 books.");
//   }
// } else {
//   console.log("Please renew membership.");
// }

// Task 3: Job Application Eligibility
// Prompt the user for their years of experience and whether they have a relevant degree (yes/no).
//  If they have 2 or more years of experience, check if they have a degree.
// If they do, print "Eligible for senior role." If not, print "Eligible for junior role."
// If they have less than 2 years of experience, print "Not eligible for the job."

// Task 4: Online Course Enrollment
// Prompt the user for their subscription type (free/premium) and whether they have completed
// the prerequisite course (yes/no). If they have a premium subscription,
// check if they completed the prerequisite. If yes, print "Enrolled in advanced course."
// If not, print "Must complete prerequisite first." If they have a free subscription, print "Upgrade to premium to enroll."

// Task 5: Event Registration
// Prompt the user for their age and whether they have a VIP pass (yes/no).
// If the user is 18 or older, check if they have a VIP pass. If they do, print "Access to VIP lounge granted."
//  If not, print "General admission granted." If the user is under 18, print "Entry denied due to age restriction."

// if else ladder
// var today = parseInt(prompt("Enter the day today (0-6) : "));
// if (today === 0) {
//   console.log("Sunday");
// } else if (today === 1) {
//   console.log("Monday");
// } else if (today === 2) {
//   console.log("Tuesday");
// } else if (today === 3) {
//   console.log("Wednesday");
// } else if (today === 4) {
//   console.log("Thursday");
// } else if (today === 5) {
//   console.log("Friday");
// } else if (today === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day!");
// }

// SWITCH STATEMENT

// switch (key) {
//   case value:
//     code to be executed
//     break;

//   default:
//     code to be executed if none of the case above happen
//     break;
// }

// 1

// The 'switch' statement evaluates an expression (here, 'today') and executes the code block associated with the matching case.
// 'today' is assumed to be a variable holding a number (0 to 6) representing a day of the week.
switch (today) {
  // Case 0 checks if 'today' equals 0 (representing Sunday).
  case 0:
    // Outputs "Sunday" to the console if the case matches.
    console.log("Sunday");
    // The 'break' statement exits the switch block, preventing execution of subsequent cases.
    break;
  // Case 1 checks if 'today' equals 1 (representing Monday).
  case 1:
    console.log("Monday");
    break;
  // Case 2 checks if 'today' equals 2 (representing Tuesday).
  case 2:
    console.log("Tuesday");
    break;
  // Case 3 checks if 'today' equals 3 (representing Wednesday).
  case 3:
    console.log("Wednesday");
    break;
  // Case 4 checks if 'today' equals 4 (representing Thursday).
  case 4:
    console.log("Thursday");
    break;
  // Case 5 checks if 'today' equals 5 (representing Friday).
  case 5:
    console.log("Friday");
    break;
  // Case 6 checks if 'today' equals 6 (representing Saturday).
  case 6:
    console.log("Saturday");
    break;
  // The 'default' case executes if none of the above cases match.
  default:
    // Outputs an error message for any value outside 0-6.
    console.log("Invalid Day!");
    break;
}

// 2

// 0-4 : free
// 5-10 : $ 2
// 11-15 : $ 5
// > 15 : $ 10

// The comments (e.g., // 0-4 : free) outline the pricing rules based on age ranges.
// These are not executable but serve as documentation for the logic below.

// Prompts the user to input their age and converts the string input to an integer using parseInt.
// 'prompt' displays a dialog box for user input; 'parseInt' ensures the input is treated as a number.
var age = parseInt(prompt("Enter your age : "));

// Switch statement evaluates the 'age' variable.
switch (age) {
  // Multiple case labels (0, 1, 2, 3, 4) are listed without statements, allowing fall-through.
  // If age is 0, 1, 2, 3, or 4, execution falls through to the console.log statement.
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    // Outputs "~ FREE ~" for ages 0–4, as per the pricing rule.
    console.log("~ FREE ~");
    break;
  // Cases for ages 5 through 10, which all share the same output ("~ $ 2 ~").
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("~ $ 2 ~");
    break;
  // Cases for ages 11 through 14, which share the output "~ $ 5 ~".
  case 11:
  case 12:
  case 13:
  case 14:
    console.log("~ $ 5 ~");
    break;
  // Default case handles any age not covered above (e.g., ages 15 and above, or negative ages).
  default:
    console.log("~ $ 10 ~");
    break;
}

// 3.

// Prompts the user to input their marks and converts the string to an integer.
var marks = parseInt(prompt("Enter your marks : "));

// Switch statement with 'true' as the expression, allowing boolean conditions in case clauses.
switch (true) {
  // Case evaluates a condition: if marks is greater than 90 and less than or equal to 100.
  case marks > 90 && marks <= 100:
    // Outputs "~ A ~" for marks in the range 91–100.
    console.log("~ A ~");
    break;
  // Case for marks greater than 80 and less than or equal to 90.
  case marks > 80 && marks <= 90:
    console.log("~ B ~");
    break;
  // Case for marks greater than 70 and less than or equal to 80.
  case marks > 70 && marks <= 80:
    console.log("~ C ~");
    break;
  // Case for marks greater than or equal to 60 and less than or equal to 70.
  case marks >= 60 && marks <= 70:
    console.log("~ D ~");
    break;
  // Case for marks greater than or equal to 0 and less than 60.
  case marks >= 0 && marks < 60:
    console.log("~ F ~");
    break;
  // Default case for invalid marks (e.g., negative, above 100, or non-numeric inputs).
  default:
    console.log("~ INVALID MARKS ~");
    break;
}
