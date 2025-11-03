// Send an HTTP GET request using `fetch` to the JSONPlaceholder API.
// `fetch` returns a Promise that resolves to a Response object.
fetch("https://jsonplaceholder.typicode.com/users")
  // Handle the Response object in the first `.then`.
  // `response` contains the HTTP response details (status, headers, body).
  .then((response) => {
    // Check if the response was successful (status in the range 200–299).
    if (!response.ok) {
      // Throw an error to trigger the `.catch` block for HTTP errors (e.g., 404, 500).
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON and return the resulting Promise.
    // This ensures the next `.then` receives the parsed data.
    return response.json();
  })
  // Handle the parsed JSON data (e.g., an array of user objects).
  .then((data) => {
    // Log the data to the console.
    console.log(data);
  })
  // Handle any errors from the `fetch` call or JSON parsing.
  .catch((err) => {
    // Log the error message to the console (e.g., network error or HTTP error).
    console.log("ERROR => ", err.message);
  });
