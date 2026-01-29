# What is the difference between undefined and null in JavaScript?

## Difference Between `undefined` and `null` in JavaScript

In JavaScript, `undefined` and `null` are both used to represent the absence of a value, but they have different meanings and uses.

---

## 1. `undefined`

- **Meaning:** A variable that has been declared but **has not been assigned a value** automatically has the value `undefined`.  
- **Type:** `undefined`  
- **Use:** Indicates that a variable exists but has no value yet.  

### Example:
```js
let x;
console.log(x); // undefined

function test() {}
console.log(test()); // undefined
```

---

## 2. `null`

- **Meaning:** Represent an **intentional absence of any value**
- **Type:** `Object`(this is a historical quirk in javascript)
- **Use:** Used when you want to explicitly say "no value" or "empty".

### Example:
```js
let y = null;
console.log(y); //null

let person = {
     name: "Alice";
     age: null // age is intentionally empty
}
```