<!-- What is Redux, and why is it used in React applications? Explain the core concepts of actions, reducers, and the store. -->

# What is Redux?

**Redux** is a **state management library** used to manage and centralize the state of an application.

In React applications, Redux helps manage **global state** (data shared across multiple components) in a **predictable and organized way**


---

# Why is Redux Used in React?

Redux is used when :
- Many components need access to the same data
- State becomes complex and hard to manage with `useState`
- You want better debugging and predicatable state changes

### Problems Redux Solves:
- Prop drilling (passing data through many components)
- Scattred state logic
- Difficult debuggin

### Benefits:
- Centralized state
- Predicatable state updates
- Easier debugging
- Scalable for large applications

---

# Core Concepts of Redux

Redux has **three main concepts**:

---

## 1. Actions
An **Action** is a plain Javascript object that describes **What happened**.

### Syntax:
```javascript
{
     type: "INCREMENT"
}
```

### Example:
```javascript
{
     type: "ADD_TODO",
     payload: "Learn Redux"
}
```


---


## 2. Reducer

A **reducer** is a function that decides **how the state changes** based on the actions.

### Syntax:
```javascript
(state, action) => newState
```

### Example:
```javascript
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
```

### Key Points:
- Takes current state and action
- Returns new updated state
- Must be a **pure function** (no side effects)


---

## 3. Store

The **store** is the central place where the **entire applicatio state** is stored.

### Example:
```javascript
import {createStore} from "redux";

const store = createStore(counterReducer);
```

### Responsibilites:
- Holds application state
- Allow access to state (`getState()`)
- Allows updates via `dispatch()`
- Registers listeners (`subscribe()`)


---


# How Redux Works (Flow)

1. User interacts with UI
2. `dispatch(action)` is called
3. Actions is sent to reducer
4. Reducer updates state
5. Store saves new state
6. UI re-renders with updated data


---

# Visual Flow
```
Component -> Dispatch(Action) -> Reducer -> Store -> UI Update
```

---

# When to use Redux

Use Redux when:
- Applications is large
- State is shared across many components
- State logic is complex
- You need better debugging tools
