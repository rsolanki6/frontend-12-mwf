<!--  Explain the different types of loops in JavaScript (for, while, do-while). Provide abasic
example of each. -->

## Loops in JavaScript

Loops in JavaScript are used to **repeat a block of code** as long as a specified condition is met. JavaScript provides several types of loops, but the most commonly used ones are `for`, `while`, and `do-while`.

---

## 1. for Loop

The `for` loop is used when the **number of iterations is known in advance**.

### Syntax
```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

### Example
```javascript
for(let i=1; i<=5; i++){
     console.log(i);
}
```

### Explanation
- `let i = 1` initilizes loop counter
- The loop runs while `i <= 5`.
- ` i++` increases the counter after each iteration.


---

## 2. while loop

The `while` loop is used when the number of iterations is not known beforehand. The condition is checked before each iteration.

### Syntax
```javascript
while(condition){
  // code to be executed
}
```

### Example
```javascript
let i = 1;
while (i <= 5){
  console.log(i);
  i++;
}
```

### Explanation
- The condition `i <= 5` is checked first.
- if the condition is `true`, the loop body executes.
- THe loop stops when the condition becomes `false`.

---

## 3. do-while loop

The `do-while` loop is similar to `while`, but the condition is checked after the loop body executes. This guarantees that the loop runs at least once.

### Syntax
```javascript
do {
  // code to be executed
} while (condition)
```

### Example
```javascript
let i = 1;
do{
  console.log(i);
  i++;
} while (i <= 5);
```

### Explanation
-   The loop body runs first.
- The condition is checked afterward.
- Even if the condition is `false`, the code executes once.