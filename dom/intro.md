DOM : Document Object Model

DOM Manipulation

1. Selection
2. Get
3. Set

I'll explain each line of the provided JavaScript code, including the concepts involved, using detailed comments. The code interacts with the Document Object Model (DOM) to select and manipulate HTML elements, handle styles, attributes, and events. Below is the code with comprehensive comments explaining each line and concept.

```javascript
// === Selectors ===
// Selectors are methods used to target HTML elements in the DOM for manipulation.

// --- Selecting by ID ---
// IDs are unique identifiers for HTML elements. getElementById returns a single element.

// Selects the element with id="main" and stores it in the variable mainDiv.
var mainDiv = document.getElementById("main");

// Logs the mainDiv element to the console to inspect it (an HTMLElement object).
console.log(mainDiv);

// --- Selecting by Class Name ---
// Classes can be applied to multiple elements. getElementsByClassName returns an HTMLCollection (array-like structure).

// Selects all elements with class="para" and stores them in paras (an HTMLCollection).
var paras = document.getElementsByClassName("para");

// Logs the entire HTMLCollection of elements with class="para".
console.log(paras);

// Logs the first element in the paras collection (index 0) to inspect it.
console.log(paras[0]);

// --- Selecting by Tag Name ---
// Tag names target elements by their HTML tag. getElementsByTagName also returns an HTMLCollection.

// Selects all <h1> elements, takes the first one (index 0), and stores it in mainHeading.
var mainHeading = document.getElementsByTagName("h1")[0];

// Logs the first <h1> element to the console.
console.log(mainHeading);

// Selects the first <img> element on the page and stores it in starImg.
var starImg = document.getElementsByTagName("img")[0];

// === innerText ===
// innerText gets or sets the text content of an element, ignoring HTML tags.

// Logs the text content of the mainHeading (<h1>) element, e.g., "Hello world".
console.log(mainHeading.innerText);

// Sets the text content of mainHeading to "Bye world". Only text is rendered, no HTML.
mainHeading.innerText = "Bye world";

// Attempts to set text with HTML tags. The tags are treated as plain text, not rendered as HTML.
mainHeading.innerText = "Bye <u>world</u>";

// === innerHTML ===
// innerHTML gets or sets the HTML content of an element, including tags, which are rendered.

// Logs the HTML content of mainHeading, including any nested tags, e.g., "Bye &lt;u&gt;world&lt;/u&gt;".
console.log(mainHeading.innerHTML);

// Sets the HTML content of mainHeading. The <u> tag is rendered, underlining "world".
mainHeading.innerHTML = "Bye <u>world</u>";

// === Style Property ===
// The style property allows direct manipulation of an element's CSS styles.

// Logs the CSSStyleDeclaration object of mainHeading, showing all inline styles.
console.log(mainHeading.style);

// Sets the text color of mainHeading to red using the style property (preferred method).
mainHeading.style.color = "red";

// Sets the background color of mainHeading to yellow (camelCase for CSS properties).
mainHeading.style.backgroundColor = "yellow";

// Sets multiple styles at once using the style property (less preferred due to overwriting).
// Applies green background and text shadow. Note: This overwrites previous inline styles.
mainHeading.style = "background-color:green;text-shadow: 2px 2px 0 black";

// === Attributes ===
// Attributes are properties in HTML tags (e.g., id, class, src). They can be accessed or modified.

// Logs the NamedNodeMap of all attributes on mainDiv (e.g., id, class).
console.log(mainDiv.attributes);

// Gets the value of the "class" attribute of mainDiv, e.g., "wrapper".
console.log(mainDiv.getAttribute("class"));

// Gets the "src" attribute of starImg, e.g., the URL of the image.
console.log(starImg.getAttribute("src"));

// Changes the "src" attribute of starImg to a new image URL, updating the displayed image.
starImg.setAttribute(
  "src",
  "https://png.pngtree.com/png-clipart/20250108/original/pngtree-cute-cartoon-golden-star-clipart-illustration-png-image_19854636.png"
);

// === Class List ===
// classList provides methods to manipulate an element's CSS classes without directly editing the class attribute.

// Logs the DOMTokenList of classes on mainDiv, e.g., ["wrapper"].
console.log(mainDiv.classList);

// Adds the class "bye_bye" to mainDiv's class list.
mainDiv.classList.add("bye_bye");

// Removes the class "wrapper" from mainDiv's class list.
mainDiv.classList.remove("wrapper");

// === Event Listeners ===
// Event listeners attach functions to elements to respond to user interactions (e.g., clicks).

// Selects the first <button> inside mainDiv and stores it in btn.
var btn = mainDiv.getElementsByTagName("button")[0];

// Adds a click event listener to btn. When clicked, the arrow function runs.
btn.addEventListener("click", () => {
  // Changes the "src" attribute of starImg to a new image URL, updating the image.
  starImg.setAttribute(
    "src",
    "https://marketplace.canva.com/q5EGo/MAGVVEq5EGo/1/tl/canva-three-dimensional-gold-star-graphic-MAGVVEq5EGo.png"
  );
});

// === Bulb Toggle Functionality ===
// Selects the element with id="bulb-area" (likely a container for the bulb image).
var bulb_area = document.getElementById("bulb-area");

// Selects the first <img> inside bulb_area, assumed to be the bulb image.
var bulb_img = bulb_area.getElementsByTagName("img")[0];

// Sets the background color of bulb_area to a dark gray (#333) to simulate "off" state.
bulb_area.style.backgroundColor = "#333";

// Selects the button with id="on" for turning the bulb on.
var btn_on = document.getElementById("on");

// Selects the button with id="off" for turning the bulb off.
var btn_off = document.getElementById("off");

// Adds a click event listener to btn_on to simulate turning the bulb on.
btn_on.addEventListener("click", () => {
  // Sets the bulb image to "on.png", showing a lit bulb.
  bulb_img.setAttribute("src", "on.png");
  // Changes the background color to white (#fff) to simulate light.
  bulb_area.style.backgroundColor = "#fff";
});

// Adds a click event listener to btn_off to simulate turning the bulb off.
btn_off.addEventListener("click", () => {
  // Sets the bulb image to "off.png", showing an unlit bulb.
  bulb_img.setAttribute("src", "off.png");
  // Changes the background color back to dark gray (#333) to simulate darkness.
  bulb_area.style.backgroundColor = "#333";
});
```

### Key Concepts Explained

1. **DOM (Document Object Model)**:

   - The DOM is a programming interface for web documents. It represents the page as a tree of objects, allowing JavaScript to interact with HTML elements.
   - Methods like `getElementById`, `getElementsByClassName`, and `getElementsByTagName` are used to select elements from this tree.

2. **Selectors**:

   - `getElementById`: Returns a single element with the specified ID.
   - `getElementsByClassName`: Returns an HTMLCollection of elements with the specified class.
   - `getElementsByTagName`: Returns an HTMLCollection of elements with the specified tag name.
   - HTMLCollection is array-like but not a true array, requiring indexing (e.g., `[0]`) to access elements.

3. **innerText vs. innerHTML**:

   - `innerText`: Handles plain text content, ignoring HTML tags (tags are displayed as text).
   - `innerHTML`: Handles HTML content, rendering tags as part of the document structure.

4. **Style Property**:

   - The `style` property allows inline CSS modifications. Properties use camelCase (e.g., `backgroundColor` instead of `background-color`).
   - Setting `style` directly (e.g., `style = "..."`) overwrites all inline styles, so individual property assignments are preferred.

5. **Attributes**:

   - `getAttribute` retrieves an attribute's value; `setAttribute` modifies it.
   - Common for manipulating properties like `src` on images or `class` on elements.

6. **classList**:

   - A convenient way to add, remove, or toggle CSS classes without parsing the `class` attribute manually.
   - Methods include `add`, `remove`, `toggle`, and `contains`.

7. **Event Listeners**:

   - `addEventListener` attaches a function to an event (e.g., `click`) on an element.
   - Arrow functions (`() => {}`) are used here for concise event handling.

8. **Dynamic Interactivity**:
   - The code demonstrates dynamic updates, such as changing an image's `src` or a container's background color, to create interactive effects (e.g., star image swap, bulb on/off toggle).

This code assumes an HTML structure with elements like a `div` with `id="main"`, `h1`, `img`, buttons with `id="on"` and `id="off"`, and a `div` with `id="bulb-area"`. The functionality includes changing text, styles, attributes, and handling user clicks to update the page dynamically.
