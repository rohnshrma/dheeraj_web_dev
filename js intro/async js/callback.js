// Define a function named `sendRequest` that takes two parameters:
// - `url`: The URL to send the HTTP request to (e.g., an API endpoint).
// - `cb`: A callback function to handle the response or error once the request completes.
function sendRequest(url, cb) {
  // Create a new instance of XMLHttpRequest, a built-in browser API for making HTTP requests.
  // This object allows sending HTTP requests (e.g., GET, POST) and receiving responses.
  var request = new XMLHttpRequest();

  // Add an event listener for the "readystatechange" event, which fires when the request's state changes.
  // The arrow function (`=>`) is used as the event handler to process the request's progress.
  request.addEventListener("readystatechange", () => {
    // Check if the request is complete (readyState === 4) and successful (status === 200).
    // `readyState` indicates the request's progress (4 means "DONE", the request is complete).
    // `status` is the HTTP status code (200 means "OK", the request was successful).
    if (request.readyState === 4 && request.status === 200) {
      // Parse the response text (assumed to be JSON) into a JavaScript object using `JSON.parse`.
      // Call the callback function `cb` with `null` as the error (indicating no error) and the parsed data.
      cb(null, JSON.parse(request.responseText));
    }
    // Check if the request is complete (readyState === 4) but failed (status is not 200).
    // This handles cases like 404 (Not Found) or 500 (Server Error).
    if (request.readyState === 4 && request.status !== 200) {
      // Call the callback function `cb` with an error message and `null` as the data (indicating failure).
      cb("Failed to fetch data", null);
    }
  });

  // Initialize the HTTP request with the `open` method.
  // - "GET": The HTTP method (GET retrieves data from the server).
  // - `url`: The target URL for the request (passed as a parameter).
  // - The third parameter (optional, not used here) defaults to `true` for asynchronous requests.
  request.open("GET", url);

  // Send the HTTP request to the server.
  // For GET requests, no data is sent in the request body, so no arguments are needed.
  request.send();
}

// Call the `sendRequest` function with a sample API URL and a callback function.
// The URL points to a public API (JSONPlaceholder) that returns a list of user objects in JSON format.
// The callback function handles the response or error.
sendRequest("https://jsonplaceholder.typicode.com/users", (err, data) => {
  // Check if an error occurred (i.e., `err` is not null).
  if (err) {
    // Log the error message to the console if the request failed.
    console.log("ERROR => ", err);
  } else {
    // Log the retrieved data to the console if the request was successful.
    console.log("DATA => ", data);
  }
});
