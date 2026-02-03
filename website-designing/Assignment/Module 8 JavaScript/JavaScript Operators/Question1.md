<!--  
What are the different types of operators in JavaScript? Explain with examples.
• Arithmetic operators
• Assignment operators
• Comparison operators
• Logical operators 
-->

# Types of Operators in JavaScript

In JavaScript, **operators** are symbols used to perform operations on values (operands). Below are the main types of operators with explanations and examples.

---

## 1. Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.

| Operator | Description | Example |
|--------|-------------|---------|
| `+` | Addition | `5 + 2 = 7` |
| `-` | Subtraction | `5 - 2 = 3` |
| `*` | Multiplication | `5 * 2 = 10` |
| `/` | Division | `5 / 2 = 2.5` |
| `%` | Modulus (remainder) | `5 % 2 = 1` |
| `++` | Increment | `a++` |
| `--` | Decrement | `a--` |

**Example:**
```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a % b); // 1
```


## 2. Assignment Operator
Assignment operators are used to assign values to variables.

| Operator | Description | Example |
|--------|-------------|---------|
| `=` | Assign | `x = 5`|
| `+=` | Add and Assign | `x += 2` |
| `-=` | Subtract and Assign | `x -= 2` |
| `*=` | Multiply and Assign | `x *= 2` |
| `/=` | Divide and Assign | `x /= 2` |

**Example**
``` javascript
let x = 10;
x += 5;
console.log(x); //15
```


## 3. Comparison Operator
Comparison operator are used to compare two values and return a boolean result (true or false).

| Operator | Description | Example |
|--------|-------------|---------|
| `==` | Equal to (value only) | `5 == "5" -> true` |
| `===` | Strict equal (value and type) | `5 === "5" -> false` |
| `!=` | Not equal | `5 != 3 -> true` |
| `!==` | Strict not equal | `5 !== "5" -> true` |
| `>` | Greater than | `5 > 3 -> true` |
| `<` | Less than | `5 < 3 -> false` |
| `>=` | Greater than or equal | `5 >= 5 -> true` |
| `<=` | Less than or equal | `5 <= 4 -> false` |

**Example**
``` javascript
let a = 10;
let b = "10";
console.log(a == b); // true
console.log(a === b); // false
```


## 4. Logical Operator
Logical operator are used to combine multiple conditions/

| Operator | Description | Example |
|--------|-------------|---------|
| `&&` | Logical AND | `true && false -> flase` |
| `!` | Logical NOT | `!true -> flase` |

**Example**
``` javascript
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(!hasID); //false
```