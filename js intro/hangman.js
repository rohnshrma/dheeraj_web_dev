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

// Task 4: Initialize Game Variables
// - Create a variable to track the number of wrong guesses, initialized to 0.
// - Set the maximum number of wrong guesses allowed (e.g., 6).
// - Create an array or set to store all letters guessed so far.
// - Create a variable to represent the current word display (e.g., a string of underscores equal to the word's length).
var wrongGuesses = 0;
var maxWrongGuesses = 6;
var guessedLetters = [];
var displayWord = "_".repeat(secret.length).split("");

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

while (wrongGuesses < maxWrongGuesses && displayWord.includes("_")) {
  console.log(hangmanStages[wrongGuesses]);
  console.log(`Word : ${displayWord.join(" ")}`);
  console.log(`Guessed letters : ${guessedLetters.join(", ")}`);

  var guess = prompt("Guess a letter : ").toLowerCase();
  if (!/^[a-z]$/.test(guess)) {
    console.log(`Invalid Input! Enter a single alphabet`);
    continue;
  }

  if (guessedLetters.includes(guess)) {
    console.log(`You've already guessed '${guess}'. Try Another`);
    continue;
  }

  guessedLetters.push(guess);

  if (secret.includes(guess)) {
    for (var i = 0; i < secret.length; i++) {
      if (secret[i] === guess) {
        displayWord[i] = guess;
      }
    }
    console.log("Good Guess!");
  } else {
    wrongGuesses += 1;
    console.log("Wrong guess");
  }
}

if (displayWord.includes("_")) {
  console.log(hangmanStages[wrongGuesses]);
  console.log(`Game Over! The word was : ${secret} `);
} else {
  console.log(hangmanStages[wrongGuesses]);
  console.log(`Congratulations You've guessed the correct word : ${secret}`);
}
