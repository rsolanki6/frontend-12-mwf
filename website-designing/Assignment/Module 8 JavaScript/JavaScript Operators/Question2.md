<!-- What is the difference between == and === in JavaScript? -->

# Difference Between `==` and `===` in JavaScript

In JavaScript, `==` and `===` are comparison operators, but they behave differently.

---

## `==` (Equality Operator)
- Compares **values only**
- Performs **type conversion (type coercion)** if the operands are of different types

### Example:
```javascript
5 == "5"     // true
true == 1    // true
null == undefined // true
```

## `===` (Strict Equality Operator)
- Compares **both value and data type**
- Does **not perform type conversion**

### Example"
``` javascript
5 === "5" // false
true === 1 // false
null === undefined // false
```

## Key difference

| Feature | == | === |
|--------|-------------|---------|
| Type conversion | Yes | No |
| Compares data type | No | Yes |
| Compares value | Yes | Yes |
| Recommended | Less safe | Safer and prefered |