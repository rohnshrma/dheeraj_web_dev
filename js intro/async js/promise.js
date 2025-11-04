// Function that checks age eligibility using a Promise
function checkEligibility(url) {
  // Return a new Promise object to handle asynchronous code
  return new Promise((resolve, reject) => {
    // Prompt user for their age, convert the input to an integer value
    var age = parseInt(prompt("Enter age : "));

    // Simulate a 5 second delay using setTimeout (asynchronous task)
    setTimeout(() => {
      // If age is 18 or older, resolve the promise as "Eligible"
      if (age >= 18) {
        resolve("Eligible");

        // Otherwise, reject the promise as "Not Eligible"
      } else {
        reject("Not Eligible");
      }
    }, 5000); // 5000 milliseconds = 5 seconds delay
  }); // End of Promise constructor
}

// Example usage of the checkEligibility function:
/*
checkEligibility()
  .then((data) => {
    // Runs if the promise was resolved (Eligible)
    console.log(data);
  })
  .catch((err) => {
    // Runs if the promise was rejected (Not Eligible)
    console.log(err);
  });
*/

// Function to send an HTTP GET request using XMLHttpRequest wrapped in a Promise
function sendRequest(url) {
  // Return a new Promise that will complete when the request is done
  return new Promise((resolve, reject) => {
    // Create a new XMLHttpRequest object for AJAX
    const request = new XMLHttpRequest();

    // Register an event listener for changes in the request's state
    request.addEventListener("readystatechange", () => {
      // If the request is done (readyState === 4) and response was successful (status === 200)
      if (request.readyState === 4 && request.status === 200) {
        // Parse the JSON response and resolve the promise with the data
        resolve(JSON.parse(request.responseText));
      }

      // If the request is done but status is not 200 (error or failure)
      if (request.readyState === 4 && request.status !== 200) {
        // Reject the promise, passing an error message
        reject(`Failed to fetch data from ${url}`);
      }
    });

    // Initialize the GET request to the given URL
    request.open("GET", url);

    // Send the request to the server
    request.send();
  }); // End of Promise constructor
}

// Example usage: sendRequest to fetch users data from API
sendRequest("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data)) // If successful, log the resulting users data
  .catch((err) => console.log(err)); // If failed, log the error message

//   Concepts Explained
// Promise: Represents a future value from an asynchronous operation. It can be pending, resolved (fulfilled), or rejected.​

// resolve: Function called when the asynchronous operation is successful.

// reject: Function called when the asynchronous operation fails.

// setTimeout: Simulates a delayed asynchronous operation (useful for demo/testing).

// XMLHttpRequest: Core browser API to make AJAX HTTP requests.

// readystate/status: Tracks the progress and result of the HTTP request; readyState 4 = complete; status 200 = OK response.​

// then/catch: Promise methods to handle resolved or rejected outcomes.
