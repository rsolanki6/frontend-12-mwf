<!-- What is the difference between a function declaration and a function
expression? -->

# What is the difference between a function declaration and a function expression?

## 1. Function Declaration
A function declaration defines a function using the `function` keyword with a name.

**Syntax:**
``` javascript
function functionName(parameter) {
     // code to execute
}
```

**Example:**
``` javascript
function greet(name) {
     return "Hello" + name;
}
```

**Characteristics**
- Must have a name
- is hoisted
- Can be called before it is defined in the code

``` javascript
greet("Alice");

function greet(name) {
     return "Hello" + name;
}
```


## 2. Function Expression
A function expression defines a function and assigns it to a variable.

**Syntax:**
``` javascript
const variableName = function(parameter) {
     // code to execute
};
```

**Example:**
``` javascript
const greet = function(name) {
     return "Hello" + name;
};
```

**Characteristics**
- Can be anonymous (no funtion name)
- is not hoisted
-  cannot be called before it is define

``` javascript
greet("Alice");

function greet(name) {
     return "Hello" + name;
}
```