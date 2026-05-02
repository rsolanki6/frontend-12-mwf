<!--  What problems did hooks solve in React development? Why are hooks considered an important addition to React? -->

# Problems Hooks Solved in React
Before Hooks were introduced in React, developers mainly relied on **clss components** for managing state and lifecycle logic. This led to serveal issues:

## 1. Complex and Hard-to-Understand Class Components
- Class Components required understading `this`, constructor, binding methods, etc.
- Code became varbose and confusing especially for beginners.

``` javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
}
```
Hooks removed this complexity by allowing state in simple functions.

---

## 2. Logic Duplocation Across Lifecycle Mwthods
- This same logic was often repeated in multiple lifecycle methods like:
- `componentDidMount`
- `componentDidUpdate`

``` javascript
componentDidMount() {
  document.title = this.state.count;
}

componentDidUpdate() {
  document.title = this.state.count;
}
```
Hooks (like useEffect) combine this logic in one place.

---

## 3. Difficult to Reuse Stateful Logic
- Sharing logic between components required:
- Higher-Order Components (HOC)
- Render Props
- These patterns made code harder to follow (nested components -> "wrapper hell")
Hooks allow reusable logic using **custom hooks**.

---

## 4. Large and MEssy Components
- Different logic (UI, API calls, event handling) was mixed in one class.
- Hard to maintain and debug
Hooks let you split logic into smaller, cleaner functions.

---

## 5. Confusing Lifecycle Methods
- Understading lifecycle methods was difficult:
- When does `componentDidMount` run?
- What about `componentWillUnmount`?
Hooks provide a simpler model using `useEffect`.

---

# Why Hooks Are an important Addition to React

## 1. Simpler and Cleaner Code
- Functional components are easier to read and write
- No need for `this`, constructors, or binding.

---

## 2. Better Code Reusability
- Custom hooks allow sharing logic across components.
``` javascript
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
```

---

## 3. Improved Readability
- Releated logic stays together (not split across lifecycle methods).
- Easier to understand flow of data.

---

## 4. Encourages Functional Programming
- Promotes modern Javascript pratices.
- Makes code more predictable.

---

## 5. Reduces Boilerplate Code
- Less code compared to class components.
- Faster developement.

---

## 6. Easier Testing and Maintenance
- Smaller, focused functions are easier to test.
- Code becomes modular.