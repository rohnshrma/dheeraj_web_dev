// ===================== Task 1: Setup =====================
// We are writing a simple Hangman game in JavaScript.
// File name: hangman.js

// ===================== Task 2: Word List =====================
// Create an array (list) of words. The game will choose one of these randomly.
var words = [
  "banana",
  "cherry",
  "food",
  "petrol",
  "pineapple",
  "car",
  "dog",
  "hero",
];

// ===================== Task 3: Select a Random Word =====================
// Math.random() gives a random number between 0 and 1.
// Multiplying by words.length gives a range between 0 and number of words.
// Math.floor() makes it a whole number (index).
// We then choose a random word from the list.
var secret = words[Math.floor(Math.random() * words.length)];

// ===================== Task 4: Initialize Game Variables =====================
// Number of wrong guesses made by the player (start at 0).
var wrongGuesses = 0;

// The maximum number of allowed wrong guesses (after that player loses).
var maxWrongGuesses = 6;

// A list of all letters the player has guessed so far.
var guessedLetters = [];

// Create a display word using underscores.
// Example: if secret = "dog", displayWord = ["_", "_", "_"]
// This shows how many letters are in the word without revealing it.
var displayWord = "_".repeat(secret.length).split("");

// ===================== Task 5: Hangman Stages =====================
// This array has the "drawing" of Hangman at each stage.
// The index of the array = number of wrong guesses.
var hangmanStages = [
  `
   +---+
   |   |
       |
       |
       |
       |
 =========
`, // stage 0
  `
   +---+
   |   |
   O   |
       |
       |
       |
 =========
`, // stage 1
  `
   +---+
   |   |
   O   |
   |   |
       |
       |
 =========
`, // stage 2
  `
   +---+
   |   |
   O   |
  /|   |
       |
       |
 =========
`, // stage 3
  `
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
 =========
`, // stage 4
  `
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
 =========
`, // stage 5
  `
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
 =========
`, // stage 6 (final - fully drawn)
];

// ===================== Task 6: Main Game Loop =====================
// Keep running the game until:
// 1. Player still has wrongGuesses < maxWrongGuesses
// 2. The word is not fully guessed (there are still underscores).
while (wrongGuesses < maxWrongGuesses && displayWord.includes("_")) {
  // ===================== Task 7: Display Game State =====================
  console.log(hangmanStages[wrongGuesses]); // Show Hangman drawing according to wrong guesses
  console.log(`Word : ${displayWord.join(" ")}`); // Show word with guessed letters and underscores
  console.log(`Guessed letters : ${guessedLetters.join(", ")}`); // Show all letters guessed so far

  // ===================== Task 8: Get Player Input =====================
  // prompt() asks the user to type something. Convert it to lowercase to be consistent.
  var guess = prompt("Guess a letter : ").toLowerCase();

  // Check if input is valid: It should be exactly one English alphabet letter.
  if (!/^[a-z]$/.test(guess)) {
    console.log(`Invalid Input! Enter a single alphabet`);
    continue; // Skip this round and ask again
  }

  // ===================== Task 9: Already Guessed Check =====================
  // If letter was already tried, tell the player and skip to next loop.
  if (guessedLetters.includes(guess)) {
    console.log(`You've already guessed '${guess}'. Try Another`);
    continue;
  }

  // ===================== Task 10: Process the Guess =====================
  // Add the new guess into guessedLetters array.
  guessedLetters.push(guess);

  // If the secret word contains the guessed letter:
  if (secret.includes(guess)) {
    // Loop through each letter of the secret word
    for (var i = 0; i < secret.length; i++) {
      if (secret[i] === guess) {
        // Replace underscore with the correct letter
        displayWord[i] = guess;
      }
    }
    console.log("Good Guess!");
  } else {
    // If guess is wrong, increase wrongGuesses count.
    wrongGuesses += 1;
    console.log("Wrong guess");
  }
}

// ===================== Task 11: Final Result =====================
// When loop ends, either user has guessed the word or lost.
if (displayWord.includes("_")) {
  // Still underscores left → player did not solve word in time
  console.log(hangmanStages[wrongGuesses]); // Show final hangman drawing
  console.log(`Game Over! The word was : ${secret} `);
} else {
  // All letters revealed → player won
  console.log(hangmanStages[wrongGuesses]); // Show current stage
  console.log(`Congratulations You've guessed the correct word : ${secret}`);
}
