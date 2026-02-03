<!-- What is the difference between a while loop and a do-while loop? -->

## Difference Between while Loop and do-while Loop in JavaScript

Both `while` and `do-while` loops are used to **repeat a block of code** based on a condition, but they differ in when the condition is checked.

---

## while Loop

- The condition is checked **before** the loop body executes.
- If the condition is `false` initially, the loop body **will not execute at all**.

### Syntax
```javascript
while (condition) {
  // code to execute
}
```

### Example
```javascript
let i = 5;
while (i < 3){
     console.log(i);
     i++;
}
```

### Output:
*No output (condition is false at the start)*

---

## do-while Loop

- The condition is checked after the loop body executes.
- The loop body executes at least once, even if the condition is `false`.

### Syntax
```javascript
do {
     // code to be execute
} while (condition);
```

### Example
```javascript
let i = 5;
do {
     console.log(i);
     i++
} while (i < 3)
```


### Key differences

| Features | While loop | do-while loop |
|----------|------------|---------------|
| Condition check | Before execution | After execution |
| Guaranted run | No | Yes (at least once) |
| Use case | When loop may not run | When loop must run once |