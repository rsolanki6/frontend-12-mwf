<!-- What is control flow in JavaScript? Explain how if-else statements work withan example. -->
## Control Flow in JavaScript

**Control flow** in JavaScript refers to the order in which statements in a program are executed. By default, JavaScript runs code **from top to bottom**, but control flow structures let you change that order based on conditions, loops, or function calls.

Common control flow structures include:
- Conditional statements (`if`, `else if`, `else`)
- Loops (`for`, `while`, `do...while`)
- Switch statements
- Exception handling (`try...catch`)

---

## if–else Statements in JavaScript

The `if-else` statement is used to **make decisions** in code. It executes different blocks of code depending on whether a condition is `true` or `false`.

### Syntax
```javascript
if (condition) {
  // code runs if condition is true
} else {
  // code runs if condition is false
}
```

### Example
```javascript
let age = 18;
if(age >= 18){
     console.log("You are ELigible to vote");
}
else{
     console.log("You are not Eligible to vote");
}
```