// Importing the Express.js framework
// "express" is a lightweight and flexible web framework for Node.js
// It simplifies creating servers, handling routes, and processing HTTP requests
import express from "express";

// Creating an instance of the Express application
// This 'app' object represents our entire web application
// We use it to define routes, middleware, configure settings, and start the server
const app = express();

// Defining the port number on which the server will listen
// Port 3000 is a convention for local development (ports below 1024 usually need admin/root privileges)
// When running locally, you'll access the site via http://localhost:3000
const port = 3000;

// Array to store user-submitted data temporarily in memory
// In a real app, you would save this to a database (e.g., MongoDB, PostgreSQL)
// Warning: Data will be lost when the server restarts because it's stored in RAM only
const userdata = [];

// ====================================================================
// MIDDLEWARE SECTION
// Middleware functions have access to the request (req), response (res), and next()
// They can modify requests, end the response, or pass control to the next handler
// ====================================================================

// Serve static files (CSS, JS, images, etc.) from the "public" folder
// Example: a file at public/css/style.css will be accessible at http://localhost:3000/css/style.css
app.use(express.static("public"));

// Parse incoming URL-encoded form data (from HTML forms with method="POST")
// { extended: true } allows rich objects and arrays to be encoded in form fields
// Without this, req.body would be undefined when receiving form submissions
app.use(express.urlencoded({ extended: true }));

// ====================================================================
// HTTP METHODS EXPLAINED (the 5 most common ones):
// GET     → Safely retrieve data (idempotent - can be called multiple times with same result)
// POST    → Send data to server to create a new resource (e.g., form submission, user registration)
// PUT     → Replace an entire resource with new data (idempotent)
// PATCH   → Partially update a resource (also idempotent in most cases)
// DELETE  → Remove a resource from the server
// ====================================================================

// =========================== ROUTES SECTION ===========================
// Routes define what happens when a client makes a request to a specific URL + HTTP method

// Route for the homepage ("/")
// When someone visits http://localhost:3000/, this handler runs
// .get() specifies that this only responds to GET requests
app.route("/").get((req, res) => {
  // __dirname is not available in ES modules by default, so we use process.cwd()
  // process.cwd() returns the current working directory
  // This sends the index.html file located in the pages folder
  res.sendFile(process.cwd() + "/pages/index.html");
});

// Route for /contact page - handles both GET and POST requests using method chaining
app
  .route("/contact") // Defines the path: http://localhost:3000/contact
  .get((req, res) => {
    // When user visits the contact page (GET request)
    // Sends the contact form HTML file to the browser
    res.sendFile(process.cwd() + "/pages/contact.html");
  })
  .post((req, res) => {
    // When user submits the contact form (POST request)
    // req.body contains the form data (thanks to express.urlencoded middleware)
    // Example: { name: "John", email: "john@example.com", message: "Hello!" }
    console.log("New form submission:", req.body);

    // Store the submitted data in our in-memory array
    userdata.push(req.body);

    // Log all collected user data so far
    console.log("All stored data:", userdata);

    // Send a friendly response back to the user
    // You could also redirect: res.redirect("/thank-you") or render a template
    res.send(
      `Dear ${req.body.name}! Thank you for submitting the form. We’ll get back to you soon!`
    );
  });

// ====================================================================
// START THE SERVER
// ====================================================================

// Start listening for incoming connections on the specified port
// The callback function runs once the server successfully starts
app.listen(port, () => {
  console.log(`Server is running and listening at http://localhost:${port}`);
  console.log("Server started on port:", port);
});
