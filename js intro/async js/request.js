// === Synchronous and Blocking Example (Commented Out) ===
// This part isn’t running (it’s commented with //), but let’s walk through it to get the idea.

// console.log("Start");
// This would print "Start" to the console, kicking things off.

// function heavyTask() {
//   // A function that does a big, slow job.
//   for (var i = 0; i <= 1000000000; i++) {}
//   // This loop counts to 1 billion, doing nothing each time. It’s like a car stuck in mud—takes forever!
//   // JavaScript can only do one thing at a time, so this hogs the show, blocking everything else.
//   console.log("Heavy task done");
//   // When the loop finally finishes, this prints "Heavy task done".
// }

// console.log("before heavy task");
// This would print "before heavy task".

// heavyTask();
// Calls the heavyTask function. JavaScript waits for the whole 1 billion loops to finish before moving on.

// console.log("after heavy task");
// Prints "after heavy task", but only after the slow loop is done.

// console.log("End");
// Prints "End" to wrap it up.

// === What’s the Deal with Synchronous/Blocking? ===
// JavaScript normally runs line by line, waiting for each line to finish (synchronous).
// A heavy job like that 1 billion loop blocks the next lines from running until it’s done.
// If you ran this, you’d see:
// Start
// before heavy task
// (long pause while the loop chugs)
// Heavy task done
// after heavy task
// End
// That pause is the “blocking” part—your program’s stuck until the heavy work finishes.

// === AJAX Example (The Running Code) ===
// Now we’re onto the actual code that runs, using AJAX to grab data from a server without freezing the program.

var url = "https://jsonplaceholder.typicode.com/todos";
// var url = "https://v2.jokeapi.dev/joke/Any";

// Sets up a variable with the web address of an API.
// This API gives us fake “to-do” lists, like {id: 1, title: "buy milk", completed: false}.
// Think of it as a website we’re asking for a list of tasks.

const request = new XMLHttpRequest(); // step: 1
// Creates an XMLHttpRequest object—basically a tool to talk to servers and get data.
// Step 1: The request is brand new but not set up yet (readyState = 0, called “UNSENT”).
// ‘const’ means we can’t change what ‘request’ points to later.

request.addEventListener("readystatechange", () => {
  // Step 4: Sets up a listener to watch for changes in the request’s status.
  // Every time the request moves to a new stage, this function runs.

  console.log(request.readyState);
  // Prints the current stage of the request (readyState). The stages are:
  // 0: UNSENT - Just created, not ready.
  // 1: OPENED - Set up with open().
  // 2: HEADERS_RECEIVED - Sent the request, got some server info back.
  // 3: LOADING - Getting the data bit by bit.
  // 4: DONE - Got everything, request’s over.

  if (request.readyState === 4 && request.status === 200) {
    // Checks if the request is done (readyState = 4) and worked (status = 200, meaning “all good”).
    console.log(JSON.parse(request.responseText));
    // The server sends back a string of data (in JSON format). JSON.parse turns it into a JavaScript array.
    // Here, it’s a list of to-do objects, like [{id: 1, title: "do stuff", ...}, ...], which we print.
  } else if (request.readyState === 4 && request.status !== 200) {
    // Checks if the request is done but failed (like status 404 = “not found” or 500 = “server messed up”).
    console.log("Failed to fetch joke");
    // Prints an error. Heads-up: it says “joke” but should say “todos” since we’re getting to-dos, not jokes.
  }
});
// This whole block watches the request and deals with the data (or errors) when it comes back.

request.open("GET", url); // step 2
// Step 2: Sets up the request.
// “GET” means we’re asking to grab data. The ‘url’ is where we’re sending the request.
// This moves the request to readyState = 1 (OPENED).

request.send(); // step 3
// Step 3: Sends the request to the server.
// For GET, we’re not sending any extra data, just asking for the to-dos.
// The request moves through readyState 2 (SENT), 3 (LOADING), and 4 (DONE) as the server responds.

// === How It All Fits Together ===
// Step 1: Make the XMLHttpRequest object.
// Step 2: Set it up with the URL and GET method.
// Step 3: Send the request.
// Step 4: Listen for updates and handle the response when it’s ready.

// === Why Asynchronous? ===
// Unlike the slow loop in heavyTask, AJAX doesn’t make JavaScript wait.
// After request.send(), the program keeps going while the server does its thing.
// When the data arrives, the listener (from step 4) jumps in to handle it.
// This means your app stays snappy, not stuck waiting for the server.

// === What You’ll See When You Run It ===
// You’ll get:
// - readyState numbers (probably 1, 2, 3, 4) as the request moves along.
// - If it works (status 200), a big array of to-do objects printed to the console.
// - If it fails (like if the URL’s wrong), it’ll print “Failed to fetch joke” (should say “todos”!).

// === Quick Notes ===
// - The commented code mentions a joke API (v2.jokeapi.dev), but we’re using jsonplaceholder for to-dos.
// - The error message saying “joke” is a typo—it’s fetching to-dos, not jokes.
// - AJAX is old-school but useful. Nowadays, people often use ‘fetch’ or ‘axios’ for cleaner code.
// - Try running this in a browser’s DevTools (F12, console tab) to see it in action!
