# How to change in components of React Js?

In **React JS**, components can be changed or updated by modifying their **state, props, or event handlers**.  
React automatically updates the **user interface (UI)** when component data changes.

---

# 1. Changing Components Using State

**State** is used to store data inside a component.
When the state changes, React automatically **re-renders the component**.

### Example
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
```
in this Example:
- `useState` stores the value.
- When the button is clicked, the **component updates automatically**.

---

# 2. Changing Components Using Props

**Props (Properties)** are used to pass data from **parent component to child component**.

### Example
```javascript
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Rohan" />
    </div>
  );
}
```
Here, the **name value can be changed** by updating the prop.

---

# 3. Changing Components Using Events
Components can also change when a **user inteacts with the UI**, such as clicking a button.

### Example
```javascript
function Message() {
  function showMessage() {
    alert("Welcome to React");
  }

  return (
    <button onClick={showMessage}>
      Click Me
    </button>
  );
}
```
When the button is clicked, the component perform an action.