<!-- What are functions in JavaScript? Explain the syntax for declaring and calling a
function -->

# Function in javascript

## What Are Functions?
A Function in Javascript is a reusable block of code designed to perform a specific task.

Function:
- Help organize code
- Reduce repetition
- Improve readability
- Run only when they are **called(invoked)**


### 1. Decalring a Function (Function Definition)
**Syntax:**
``` javascript
function functionName(parameters) {
     // code to execute
}
```

**Example:**
``` javascript
function greet(name) {
     console.log("Hello" + name);
}
```


### 2. Calling a Function
To execute a function, use its name followed by parenthese:
**Syntax:**
``` javascript
greet("Alice");
```

**Output:**
```
Hello, Alice
```


### 3. Function With Return Value
Function can return a value using the `return` keyword.

**Example:**
``` javascript
function add(a,b){
     return a + b;
}
```

**Calling the Function**
``` javascript
let result = add(5,3);
console.log(result);
```

**Output:**
``` 
8
```

### 4. Function Expression
A function can also be stored in a a variable.

``` javascript
const multiply = function (a,b) {
     return a * b;
}
```

**Calling It**
``` javascript
console.log(multiply(4,2));
```

### 5. Arrow function(ES6)
A shorter syntax introduction in ES6.

**Basic Arrow Function**
``` javascript
const divide = (a,b) => {
     return a / b;
}
```

**Shorter Version (Implicit Return)**
``` javascript
const square = x => x * x;
```

## Summary

| Concept | Syntax |
|---------|--------|
| Decalre Function | `function name() {}` |
| Call Function | `name()` |
| With parameters | `function name(param) ` |
| Return value | `return value;` |
| Arrow Function | `() => {}` |