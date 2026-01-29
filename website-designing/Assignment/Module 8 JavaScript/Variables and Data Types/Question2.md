#  Explain the different data types in JavaScript. Provide examples for each.

JavaScript data types define the **kind of values** that can be stored and manipulated in a program. JavaScript has two main categories of data types: **Primitive** and **Non-Primitive (Reference)** types.

---

## 1. Primitive Data Types

Primitive data types store single, simple values.

### a) Number
Used for both integers and floating-point numbers.

```js
let age = 25;
let price = 99.99;
```

### b) String

Used to represent text. String are written inside quotes
``` js
let name = "Alice";
let message = "Hello World!";
```

### c) boolean

Represent logical values: true or false
```js
let isLoggedIn = true;
let hasAccess = flase;
```

### d) Undefined

A variable that has been declared but not assigned a value.
```js
let result;
console.log(result); //undefined
```

### e) Null

Represent an intentional absence of a value.
```js
let data = null;
```

### f) Bigint

Used to store very large integers beyond the safe limit of Number.
```js
let bigNumber = 1234567890987654321n;
```

### g) Symbol

Used to create unique identifiers.
```js
let  id = symbol("UserId");
```


---

## 2. Non-Primitive Data Types

These data type can store multiple values or complex structures.

### a) Object

Used to store data in key-value pairs.
```js
let person = {
     name: "John";
     age : 30;
}
```

### b) Array

Used to store multiple values in a single variable.
```js
let colors = ["red","blue","green"];
```

### c) Function

Used to define reusable block of code.
```js
function greet(){
     return "Hello!";
}
```