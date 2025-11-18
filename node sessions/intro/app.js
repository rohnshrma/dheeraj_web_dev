// Importing the Express.js framework
// "express" is a popular web framework for Node.js that makes creating servers and handling HTTP requests much easier
import express from "express";

// Creating an instance of the Express application
// This 'app' object is the main entry point for building our web server
// It allows us to define routes, middleware, and start the server
const app = express();

// Defining the port number where our server will run
// Port 3000 is commonly used for local development (instead of 80 which requires admin rights)
// You can access the server at http://localhost:3000 in your browser
const port = 3000;

// ====================================================================
// HTTP METHODS EXPLAINED (these are the main ones you mentioned):
// GET     → Retrieve data from server (most common, used when you visit a webpage)
// POST    → Send data to server (like submitting a form or registering)
// DELETE  → Remove something from server
// PUT     → Update/replace an existing resource completely
// PATCH   → Partially update a resource
// ====================================================================

// =========================== ROUTES SECTION ===========================
// A "route" defines what happens when a user visits a specific URL

// Setting up the root route (also called home route)
// "/" means the main page of your website → http://localhost:3000/
app
  .route("/")
  // Chainable route handler: we can add multiple HTTP methods to the same path
  .get((req, res) => {
    // This function runs when someone visits http://localhost:3000 using GET method

    // 'req' = request object → contains info about the incoming request (headers, body, URL params, etc.)
    // 'res' = response object → used to send back data to the client (browser)

    // Send first line of text to the browser
    // res.write() allows sending multiple chunks of data
    res.write("hello world");

    // Send second line
    // Note: In real apps, we usually use res.send() or res.json() instead of multiple res.write()
    res.write("this is my homepage");

    // Actually send the response and end the HTTP request
    // Without res.send() or res.end(), the browser would keep waiting forever (loading spinner)
    // When using res.write(), you MUST call res.send() or res.end() to finalize the response
    res.send();
  });

// You can also write the same route like this (more common style):
// app.get("/", (req, res) => {
//   res.send("hello world<br>this is my homepage");
// });

// ====================================================================
// STARTING THE SERVER

// Tell Express to start listening for incoming requests on the specified port
app.listen(port, () => {
  // This callback function runs once when the server successfully starts

  // Log a message to the terminal/console to confirm server is running
  console.log("server started on port :", port);

  // You will see: "server started on port : 3000"
  // Then go to your browser and visit: http://localhost:3000
});

// ====================================================================
// BONUS: Better version of the GET route (recommended way)

app.get("/", (req, res) => {
  // Using res.send() once is cleaner and automatically sets headers + ends response
  res.send(`
    <h1>hello world</h1>
    <p>this is my homepage</p>
    <small>Server running on port ${port}</small>
  `);
});
