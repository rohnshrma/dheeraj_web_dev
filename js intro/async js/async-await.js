// =========================================
// 1. HANDLING FETCH API WITHOUT ASYNC/AWAIT (Promise Chain)
// =========================================
// fetch() returns a Promise that resolves to a Response object
// Concept: fetch is a modern browser API for making HTTP requests (replaces XMLHttpRequest)
fetch("https://v2.jokeapi.dev/joke/Any")
  // .then() handles the resolved Response object from fetch()
  // Concept: .then() is called when Promise resolves, receives Response object
  .then((response) => {
    // response.json() returns another Promise that resolves to parsed JSON data
    // Concept: Response.json() parses the response body as JSON
    return response.json();
  })
  // Second .then() handles the parsed JSON data
  // Concept: Chaining .then() allows sequential async operations
  .then((data) => console.log(data))
  // .catch() handles any errors from any step in the Promise chain
  // Concept: .catch() catches rejections from any previous Promise in the chain
  .catch((err) => console.log(err));

// =========================================
// 2. HANDLING FETCH API WITH ASYNC/AWAIT
// =========================================
async function handleJoke() {
  // try-catch block for error handling in async functions
  // Concept: try-catch works with async/await like regular synchronous code
  try {
    // await fetch() waits for the Response object
    // Concept: await pauses function until Promise resolves
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");

    // await response.json() waits for JSON parsing to complete
    // Concept: Each await handles one Promise at a time sequentially
    const data = await response.json();

    // Log the final parsed joke data
    console.log(data);
  } catch (err) {
    // Catches network errors, JSON parsing errors, etc.
    console.log("Error => ", err);
  }
}

// Multiple calls create concurrent requests (fire-and-forget)
// Concept: async functions return Promises, so calls run in parallel
handleJoke();
handleJoke();
handleJoke();
handleJoke();

// =========================================
// 3. CUSTOM AJAX FUNCTION USING XMLHTTPRequest
// =========================================
function sendRequest(url) {
  // Returns a Promise wrapper around XMLHttpRequest
  // Concept: Promises provide a standardized way to handle async operations
  return new Promise((resolve, reject) => {
    // Create XMLHttpRequest object (traditional AJAX)
    // Concept: XMLHttpRequest is the original browser API for async HTTP requests
    const request = new XMLHttpRequest();

    // Event listener for request state changes
    // Concept: 'readystatechange' fires whenever request progress changes
    request.addEventListener("readystatechange", () => {
      // readyState 4 = request complete; status 200 = HTTP success
      // Concept: readyState values: 0=unsent, 1=opened, 2=headers_received, 3=loading, 4=done
      if (request.readyState === 4 && request.status === 200) {
        // Parse JSON string response into JavaScript object
        // Concept: responseText is raw string; JSON.parse() converts to object
        resolve(JSON.parse(request.responseText));
      }

      // Request complete but HTTP error (404, 500, etc.)
      if (request.readyState === 4 && request.status !== 200) {
        // Reject with descriptive error message
        // Concept: reject() signals Promise failure, stops .then() chain
        reject(`Failed to fetch data from ${url}`);
      }
    });

    // Configure GET request (method, URL)
    // Concept: open() prepares request but doesn't send it
    request.open("GET", url);

    // Actually send the request to server
    // Concept: send() triggers the network request asynchronously
    request.send();
  }); // End Promise constructor
}

// =========================================
// 4. USING CUSTOM sendRequest() WITH PROMISE CHAIN
// =========================================
// Each call returns a Promise, handled independently
sendRequest("https://v2.jokeapi.dev/joke/Any")
  .then((data) => console.log(data)) // Success: log joke data
  .catch((err) => console.log(err)); // Error: log failure

sendRequest("https://v2.jokeapi.dev/joke/Any")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

sendRequest("https://v2.jokeapi.dev/joke/Any")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

sendRequest("https://v2.jokeapi.dev/joke/Any")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// =========================================
// 5. USING CUSTOM sendRequest() WITH ASYNC/AWAIT
// =========================================
async function handleRequest(url) {
  try {
    // await our custom Promise-based XMLHttpRequest
    // Concept: async/await works with any Promise, not just fetch()
    const data = await sendRequest(url);
    console.log(data);
  } catch (err) {
    // Catches errors from our custom Promise rejection
    console.log("Error => ", err);
  }
}

// Concurrent calls (4 parallel requests)
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
handleRequest("https://v2.jokeapi.dev/joke/Any");
