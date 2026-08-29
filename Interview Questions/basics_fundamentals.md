<!-- 
1. → (Right arrow)
2. ← (Left arrow)
3. ↑ (Up arrow)
4. ↓ (Down arrow)
5. ↔ (Doule arrow)
 -->
# Basic Fundamentals Questions for IT Software Developers

## Programming Concepts

### 1. What are variables and data types?

Variable : A `Variables` is a name place in memory used to store vlaue. Think of it like a labeled conatiner.

**Example**
```
age = 20
name = "John"
```
- `age` is a variable storing value `20`.
- `name` is a variable storing the value `"john"`.

---

Data Type : A Data type tells computer **what kind of value** a variable conatins.

| Data type | Meaning | Example |
| --------- | ------- | ------- |
|Integer (int) | Whole numbers | 10, -5, 100 |
|Float (float) | Decimal numbers |	3.14, 9.5 |
|String (str) | Text | "Hello" |
|Boolean (bool) | True or false | True, False |
|List | Collection of values | [10, 20, 30] |

**Example**
```
name = "Alice"      # String
age = 18            # Integer
height = 1.65       # Float
is_student = True   # Boolean
```
- **In simple terms: a variable** is the container/name used to store information, while **a data type** describes the kind of information being stored
- For Example, in `age = 18`, `age` **is the variable**, `18` **is the value**, and **integer is the data type**


---


### 2. Explain the difference between primitive and non-primitive data types.

**Primitive VS Non-primitive Data Type**

1. **Primitive Data Type** : **Primitive data type** are the basic, built-in types provided directly by a programming language. They generally represent **one simple value**.

Common Example:

- `Integer` → `10`, `-5`
- `Float/Double` → `3.14`, `5.5`
- `character` → `A`. `b`
- `Boolean` → `true`, `false`
- `String` → `Hello` *(depending on the language, String may be treated as primitive or as objects)*

---

2. **Non-Primitive Data Type** : **Non-Primitive data type** are more complex types that are generally built primitive types or provided as higher-level structures by the language.

- Example

- Array
- Structure
- Class
- Object
- Interface
- Collection
- Map/Dictionary



**Main Differance**

| Primitive | Non-Primitive |
| --------- | ------------- |
| Basic data type | Complex/derived data type |
| Usually stores a single value | Can store multiple values or complex data |
| Usually provided directly by the language | Often created from or built upon basic types |
| Generally simpler | Generally more complex |
| Examples: int, float, char, boolean | Examples: array, class, object, structure |

- Important point :
     The exact classification depends on the programming language. For example, a String is considered primitive in some languages but an object/non-primitive type in others. So "primitive" and "non-primitive" are useful general concepts, but there isn't one universal list that applies identically to every programming language.



---

### 3. What is a function and why do we use them?

**What is a Function** : A **function is a block of reusable code** design to perform a specific task.
instead of writing the same code again and again, we put it inside a function and **call function whenever we need it**

- Example:
```
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
```

Here:
- `add` → function name
- `a,b` → parameters (inputs)
- `a + b` → work performed by the function
- `return` → send the result back.
- `10, 20` → argument passed to the function

---

**Why Do We Use Function**

1. Code Reusability
- Write code once and use it multiple times.
```
function greet() {
    console.log("Hello!");
}

greet();
greet();
greet();
```
- instead of writing `console.log("Hello!")` three times, we write it once and call the function three times.

---

2. Avoid Repetition 
- Functions help prevent writing the same code repeatedly.
```
Without function:
    Code → Code → Code → Code

With function:
    Function → call it whenever needed
```

---

3. Makes Code Easier to Understand
- A Function can represent a specific task:
```
calculateSalary()
loginUser()
sendEmail()
calculateTotal()
printReport()
```
- When you see `calculateSalary()`, you immeditely understand what that part of the program is doing.

---

4. Makes Debugging Easier
- If there is a problem with calculating the total, you can check the `calculateTotal()` function instead of searching through thr entire program.

---

5. Makes Large Programs Manageable
- A large program can be divided into smaller functions:
```
Program
│
├── login()
├── getUserData()
├── calculateTotal()
├── processPayment()
└── generateReceipt()
```
- Each function handels one particular task.