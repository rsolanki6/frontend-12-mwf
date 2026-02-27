<!--  What is an array in JavaScript? How do you declare and initialize an array? -->
# Array in javascript

## What Is an Array?
An array in javascript is a special variable used to store multiple values in a single variable.

**Instead of creating seperate variable like:**
``` javascript
let item1 = "Apple";
let item2 = "Mango";
let item3 = "Banana";
```

**You can store them in one array:**
``` javascript
let fruits = ["Apple", "Mango", "Banana"];
```

**Array:**
- Store multiple values
- Keep values in an ordered list
- Use index number staring from `0`


# Declaring an Array
## 1. Using Array Literal (Most Common Method)

**Syntax:**
``` javascript
let arrayName = [value1, value2, value3];
```

**Example:**
``` javascript
let number = [10, 20, 30, 40, 50];
```

## 2. Using the `Array` Constructor
The array literal `[]` method is recommended and more commonly used.
**Syntax:**
``` javascript
let arrayName = new array(value1, value2, value3);
```

**Example:**
``` javascript
let colors = new Array("Red", "Green", "Blue");
```

## Initializing an Array
initializing means assigning values to the array when it is created.

**Example (Initialized Immediately)**
``` javascript
let fruits = ["Apple", "Mango", "Banana"]
```

**Example (Declare first, Initialize Later)**
``` javascript
let fruits = [];
fruits[0] = "Apple";
fruits[1] = "Mango";
fruits[2] = "Banana";
```

## Accessing Array Elements
Each element in an array has an index (staring at 0).
``` javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); //Apple
console.log(fruits[2]); //Banana
```