# What are variables in JavaScript? How do you declare a variable using var, let,and const?

Variables in JavaScript are used to **store data values** that can be reused and modified throughout a program. They act as containers for information such as numbers, text, objects, or functions.

JavaScript variables help make code more readable, flexible, and efficient.

---

## Declaring Variables in JavaScript

JavaScript provides three main keywords to declare variables:
- `var`
- `let`
- `const`

---

## 1. Using `var`

`var` is the oldest way to declare variables in JavaScript.

### Characteristics:
- Function-scoped
- Can be re-declared and updated
- Hoisted (moved to the top of its scope)

### Example:
```js
var name = "Alice";
var age = 25;
```

## 2. Using `let`

The `let` keyword is used to declare variables in JavaScript that **can change their value** during program execution. It was introduced in **ES6 (2015)** and is now the preferred way to declare variables instead of `var`.

---

## Characteristics of `let`

- **Block-scoped** (limited to `{ }` blocks like loops and conditionals)
- Can be **updated** but **not re-declared** in the same scope
- Not hoisted in a usable way (cannot be used before declaration)

---

## Declaring a Variable with `let`

Syntax:
```js
let variableName = value;
```


## 3. Using `const` in JavaScript

The `const` keyword is used to declare variables whose values **should not be reassigned** after initialization. It was introduced in **ES6 (2015)** and is commonly used to create constants in JavaScript.

---

## Characteristics of `const`

- **Block-scoped**, like `let`
- **Cannot be re-declared** in the same scope
- **Cannot be reassigned**
- **Must be initialized** at the time of declaration

---

## Declaring a Variable with `const`

Syntax:
```js
const variableName = value;
```