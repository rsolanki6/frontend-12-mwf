<!-- Describe how switch statements work in JavaScript. When should you use a switch statement instead of if-else? -->
## Switch Statements in JavaScript

A **switch statement** in JavaScript is used to execute different blocks of code based on the value of an expression. It provides a cleaner and more readable alternative to multiple `if-else` statements when comparing the same variable against several possible values.

---

## How Switch Satement Work

- The `expression` is evaluated once.
- Its value is compared with each `case` using strict equality (` === `).
- WHen a matching `case` is found, the associated block of code runs.
- The `break` statement stops further execution and exits the switch.
- If no case matches, the `default` block runs.

---
## Syntax

```javascript
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no case matches
}
```

## Example
```javascript
let day = 3;

switch (day) {
     case 1:
          console.log("Monday");
          break;
     case 2:
          console.log("Tuesday");
          break;
     case 3:
          console.log("Wednesday");
          break;
     case 4:
          console.log("Thrusday");
          break;
     case 5:
          console.log("Friday");
          break;
     default:
          console.log("Invalid day");
}
```