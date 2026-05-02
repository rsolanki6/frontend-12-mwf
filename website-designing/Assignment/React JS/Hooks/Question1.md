<!--  What are React hooks? How do useState() and useEffect() hooks work in functional components? -->

# What are React hooks?
`React Hooks` are special functions introduced in React (v16.8) that let you use `state` and other React featires inside **functional components** without writing class components.

## Before Hooks :
- Functional components -> only UI (no stare, no lifecycle)
- Class components -> state + lifecycle methods

## After Hooks :
- Functional components can do **everthing** (state, side effects, etc.)

---

# Why Hooks ?
- Simpler and cleaner code
- No need for class components
- Reusable logic (custome hooks)
- Better readability and maintainability

---

# Common Hooks

- useState() -> manage state
- useEffect() -> handle side effcets
- useContext() -> access context
- useRef() -> access DOM elements

---

# useState() Hook
## What it does:
Allows you to add **state** to a functional component.

### Syntax:

``` javascript
const [state, setState] = useState(initialValue);
```

### Example:
``` javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

--- 

# useEffect() Hook
## What it does:
Handles **side effects** in functional components.

Examples of side effects:

- API calls
- DOM updates
- Timers
- Event listener

### Syntax:
``` javascript
useEffect(()=> {
     // side effect code

     return () => {
          // cleanup (optional)
     };
}, [dependencies]);
```


---

# Difference Between useState & useEffect

| Feature | useState | useEffect |
|---------|----------|-----------|
| Purpose | Manage state | Handle side effects |
| Return | State + setter function | Nothing (just executes logic) |
| Trigger | On state update | Based on dependency array |
| Example Use | Counter, from input | API calls, timers, DOM updates |