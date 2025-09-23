// Task 1: Set Up the Environment
// - Create a new JavaScript file (e.g. hangman.js).
// - Open it in your code editor.

// Task 2: Define the Word List
// - Create an array of simple words (e.g., 5–10 words like fruits or animals).

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

// Task 3: Select a Random Word
// - Choose one word randomly from the array and store it as the secret word.
// - Convert the secret word to lowercase for consistency.

var secret = words[Math.floor(Math.random() * words.length)];
console.log(secret);

// Task 4: Initialize Game Variables
// - Create a variable to track the number of wrong guesses, initialized to 0.
// - Set the maximum number of wrong guesses allowed (e.g., 6).
// - Create an array or set to store all letters guessed so far.
// - Create a variable to represent the current word display (e.g., a string of underscores equal to the word's length).
var wrongGuesses = 0;
var maxWrongGuesses = 6;
var guessedLetters = [];
var displayWord = "_".repeat(secret.length).split("");
console.log(displayWord, secret);

// Task 5: Define the Hangman Stages
// - Create an array of strings representing each stage of the hangman drawing.
// - Each stage should correspond to the number of wrong guesses (from 0 up to the max).

var hangmanStages = [
  `
   +---+
   |   |
       |
       |
       |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
       |
       |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
   |   |
       |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
  /|   |
       |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
       |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  /    |
       |
 =========
`,
  `
   +---+
   |   |
   O   |
  /|\\  |
  / \\  |
       |
 =========
`,
];

console.log(hangmanStages[6]);

// Task 6: Set Up the Main Game Loop
// - Write a while loop that runs until the player either wins or loses.

// Task 7: Display the Game State
// - Inside the loop, print the current hangman stage based on wrong guesses.
// - Print the current display word (e.g., "_ _ p _ e").
// - Print the list of guessed letters.

// Task 8: Get Player Input
// - Prompt the player to enter a single letter.
// - Convert input to lowercase.
// - Validate: make sure it’s a single alphabet letter.
// - If invalid, show an error and prompt again (do not count as a guess).

// Task 9: Check if the Letter Has Been Guessed
// - Check if the letter is already in the guessed letters list.
// - If yes, inform the player and ask for another letter (do not penalize).

// Task 10: Process the Guess
// - Add the valid letter to the guessed letters list.
// - Check if it’s in the secret word:
//   - If yes, update the display word to reveal the letter.
//   - If not, increment the wrong guess counter.

// Task 11: Check Win or Loss Conditions
// - After every guess, check if the display word is fully guessed (player wins).
// - Check if wrong guesses have reached the maximum (player loses).
// - If either condition is met, break the loop.

// Task 12: Display the Final Result
// - If the player wins, print a congratulations message and show the word.
// - If the player loses, print a game-over message, show the last hangman stage, and reveal the word.

// Task 13: Test the Game
// - Run the script and make sure it works as expected.
// - Test different words, invalid inputs, repeated guesses, winning and losing.
