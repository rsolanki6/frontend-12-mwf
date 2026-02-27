<!-- Explain the methods push(), pop(), shift(), and unshift() used in arrays. -->

# Array Method in Javascript
`push()`, `pop()`, `shift()`, and `unshift()`
These are built-in array methods used to add or remove elements from an array.

## 1. `push()`
**Purpose**
Adds one or more elements to the end of an array.

**Syntax**
``` javascript
array.push(element1, element2, ...);
```

**Example**
``` javascript
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
```

**Output**
```
["Apple", "Banana", "Mango"]
```


## 2. `pop()`
**Purpose**
Removes the last element from an array.

**Syntax**
``` javascript
array.pop();
```

**Example**
``` javascript
let fruits = ["Apple", "Banana", "Mango"];
let removed = fruits.pop();

console.log(fruits);
console.log(removed);
```

**Output**
["Apple", "Banana"]
"Mango"


## 3. `shift()`
**Purpose**
Removes the first element from an array.

**Syntax**
``` javascript
array.shift();
```

**Example**
``` javascript
let fruits = ["Apple", "Banana", "Mango"];
let removed = fruits.shift();

console.log(fruits);
console.log(removed);
```

**output**
["Mango", "Banana"]
"Apple"


## 4. `unshift()`
**Purpose**
Adds one or more element to the beginning of an array.

**Syntax**
``` javascript
array.unshift(element1, element2, ...);
```

**Example**
``` javascript
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits);
```

**Output**
["Apple", "Banana", "Mango"]