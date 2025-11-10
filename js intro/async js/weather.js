// Function to send an HTTP request to fetch weather data for a given city
function sendRequest(city) {
  // Template literal to construct the API URL with the city name, API key, and metric units
  // Concept: Template literals (`) allow embedding expressions using ${} for dynamic string creation
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;

  // Returns a Promise to handle asynchronous HTTP request
  // Concept: Promises represent the eventual completion (or failure) of an async operation
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object to make HTTP requests
    // Concept: XMLHttpRequest is a built-in browser API for making HTTP requests
    const request = new XMLHttpRequest();

    // Add an event listener for the 'readystatechange' event, triggered when the request state changes
    // Concept: Event listeners allow handling asynchronous events like network responses
    request.addEventListener("readystatechange", () => {
      // Check if the request is complete (readyState 4) and successful (status 200)
      // Concept: readyState 4 means the request is done; status 200 indicates success
      if (request.readyState === 4 && request.status === 200) {
        // Parse the JSON response into a JavaScript object and resolve the Promise
        // Concept: JSON.parse converts a JSON string into a usable JavaScript object
        resolve(JSON.parse(request.responseText));
      }
      // Check if the request is complete but failed (status is not 200)
      if (request.readyState === 4 && request.status !== 200) {
        // Reject the Promise with an error message
        // Concept: reject is used to indicate Promise failure, passing an error
        reject(`Could not fetch weather of ${city}`);
      }
    });

    // Initialize the HTTP request as a GET request to the specified URL
    // Concept: request.open configures the request method and URL
    request.open("GET", url);

    // Send the HTTP request to the server
    // Concept: request.send triggers the network request
    request.send();
  });
}

// Async function to fetch and process weather data for a city
// Concept: async functions allow using await to handle Promises more cleanly
async function fetchWeather(city) {
  // Try-catch block to handle potential errors during async operations
  // Concept: try-catch is used for error handling in synchronous and async code
  try {
    // Await the Promise returned by sendRequest, pausing until it resolves
    // Concept: await pauses async function execution until the Promise settles
    const data = await sendRequest(city);

    // Log the resolved weather data to the console
    console.log(data);
  } catch (err) {
    // Log any errors that occur during the request (e.g., network failure or invalid city)
    console.log(err);
  }
}

// Call fetchWeather for three different cities to retrieve their weather data
// Concept: Function calls initiate the async process for each city
fetchWeather("gurgaon");
fetchWeather("delhi");
fetchWeather("haridwar");
