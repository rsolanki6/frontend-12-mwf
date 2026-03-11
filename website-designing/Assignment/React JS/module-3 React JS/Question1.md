# What is React JS?

**React JS** is an open-source **JavaScript library** used for building **user interfaces (UI)**, especially for **single-page applications (SPAs)** where the page updates dynamically without reloading.

It helps developers create **fast, interactive, and reusable UI components**.

React was developed and manitained by **Facebook (Now meta)** and is widely used for modern web applications.

---

## Key Features of React

### 1. Component-Based Architecture
React applications are built using **components**, which are reuseable peices of UI.

Example:
```Jsx
function Welcome() {
     return <h1> Hello, World! </h1>;
}
```
Each Component manages its own logic and UI.

---

### 2. Virtual DOM 
React uses a **virtual DOM (Document Object Model)** to improve performance.

Process:
- React creates a virtual copy of the DOM.
- When data changes, React updates the Virtual DOM.
- It compares the new Virtual DOM with the previous one.
- Only the changed parts are updated in the real DOM.
This makes applications **Faster and more efficient**.


---

### 3. JSX (Javascript XML)
React usses **JSX**, which allows writing HTML-like code inside Javascript.

Example:
```javascript
const element = <h1> Hello World </h1>;
```
JSX made UI code **easier to read and maintain**.


---

### 4. Unidirectional Data Flow
Data in React flows **One way (pareny -> child)**, making applications easier to debug and maintain.

---

### 5. Reusable Components
Components can be reused across different parts of the application, reducing code duplication.

---

### WHy Use React?
- Fast performace with Virtual DOM
- Reusable components
- Easy to maintain large applications
- Strong community support
- Used by many large compaines

---

Example:

```javascript
import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>This is my first React application.</p>
    </div>
  );
}

export default App;
```

---

## Compaines Using React
- Facebook
- Instagram
- Netflix
- Aiebnb
- Uber