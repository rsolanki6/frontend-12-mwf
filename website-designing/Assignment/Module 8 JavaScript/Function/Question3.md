<!--  Discuss the concept of parameters and return values in functions. -->
# Parameter and Return Values in Functions (javascript)
Function often need input values to work with and may produce an output value after execution.
These are handling using parameters and return values.

## 1. Parameters
### What Are Parameters?
Parameters are variables listed inside the parentheses of a function definition.
They act as placeholder for value that will be passed into the function.

**Syntax:**
``` javascript
function functionName(parameter1, parameter2) {
     // code to execute
}
```

**Example:**
``` javascript
function greet(name) {
     console.log("Hello" + name);
}
```

**Here:**
- `name` is a parameter
- It receives a value when the function is called

**Calling the Function**
``` javascript
greet("Alice");
```
- `"Alice"` is called an argument 
- The argument is passed into the parameter `name`


## 2. Return Values
### What Is a Return Value?
A return value is the result that a function sends back after execution.
The `return` keyword is used to send a value back to where the function was called.

**Syntax:**
``` javascript
function functionName() {
     return value;
}
```

**Example:**
``` javascript
function add(a,b) {
     return a + b;
}
```
**Using the Returned Value**
``` javascript
let result = add(5,3);
console.log(result);
```

**Here:**
- `a` and `b` are parameters
- `a + b` is the returned value
- The returned value is stored in `result`