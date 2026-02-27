<!--  What are JavaScript events? Explain the role of event listeners. -->

# Javascript Events and Events Listener

## 1. What Are Javascript Evenets?
Events in javascript are actions or occurrences that happen in the browser, usually as a result of user interaction on browser activity.

**Example of Events:**
- User actions: `click`, `mouseover`, `keydown`, `submit`
- Browser actions: `load`, `resize`, `scroll`
- Form actions: `change`, `focus`, `blur`

javascript can respond to these events to create interactive web pages.

## 2. Event Listener
An event listener is a function in javascript that waits for a specific events to occur on an element and then executes code in response.

**Syntax**
``` javascript
element.addEventListener(event, function, useCapture);
```

- `element` -> HTML element to attach the listener to 
- `event` -> Type of event(e.g.,`"click"`, `"mouseover"`)
- `function` -> Function to execute when the event occurs
- `useCapture` -> Optional boolean, default is `false`

**Example:Click Event**
``` javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
     alert("Button was clicked!")
});
```

**Explanation:**
- `getElementById("myButton")` -> Selects the button element
- `addEventListener("click", ...)` -> Runs the function when the button is clicked
- The function shows an alert message


**Example:Mouseover Event**
``` javascript
let box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});
```

**Explanation:**
- Changes the box’s background color when the mouse hovers over it