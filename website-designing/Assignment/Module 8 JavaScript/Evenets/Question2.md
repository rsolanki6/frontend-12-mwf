<!-- How does the addEventListener() method work in JavaScript? Provide an example -->

# How addEventListener() Work in Javascript?
The `addEventListener()` method in javascript is used to attach an event handler to specific HTML element.This allows your web page to respond to user interactions like clicks, keypress, mouse movements, etc. One of the advantages of `addEventListener()` over older methods (like `onclick`) is that you can attach multiple event listener to the same elememt without overwriting existing ones.

**Syntax**
``` javascript
element.addEventListener(event, function, useCapture);
```

- element - The HTML element you want to attach the event to.
- event - A string representing the event type (e.g., `click`, `mouseover`, `keydown`).
- function - The callback function that will execute when the event occurs.
- useCapture(optional) - Boolean value. Default to `false`. Determine whether the event should be capture in the capturing phase (`true`) or bubbling phase (`flase`).

**Example**

<!DOCTYPE html>
<html>
<head>
  <title>addEventListener Example</title>
</head>
<body>

<button id="myButton">Click Me!</button>

<script>
  // Select the button element
  const button = document.getElementById("myButton");

  // Attach a click event listener
  button.addEventListener("click", function() {
    alert("Button was clicked!");
  });

  // You can add multiple listeners
  button.addEventListener("click", function() {
    console.log("Another click handler running!");
  });
</script>

</body>
</html>

**Explanation:**

- Clicking the button triggers both event handlers.
- The first shows an alert.
- The second logs a message to the console.
- `addEventListener()` does not overwrite previous listeners, unlike using `onclick`.