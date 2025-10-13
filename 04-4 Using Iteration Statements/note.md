# 🌀 Using Iteration Statements in JavaScript

## Introduction
Iteration is a cornerstone of programming, enabling you to perform repetitive tasks efficiently. Whether you're processing a list of items, searching through data, or generating patterns, iteration statements let you **loop through and manipulate data dynamically**.

JavaScript provides several types of loops — `for`, `for...of`, `for...in`, `while`, and `do...while`.  
Each has its own ideal use case, depending on what you’re trying to achieve.

By the end of this lesson, you’ll understand **when and how to choose the right loop** for any situation.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Identify the proper iteration statement for a given problem.
2. Distinguish between different types of loops and their purposes.
3. Apply each loop correctly in practical examples.

---

## Types of Iteration Statements

### 1. **for loop**
- Used when the number of iterations is **known beforehand** or you need control over the loop counter.

```bash
for (let i = 0; i < 5; i++) {
  console.log(i); // Logs 0, 1, 2, 3, 4
}
```
- **Best for**: Counting or iterating through arrays with index control.
- **Example use case**: Display numbers 1 through 10.


### 2. **for...of loop**
- Used to iterate directly over **values** in iterable objects such as arrays or strings.
```bash
let colors = ["red", "blue", "green"];
for (let color of colors) {
  console.log(color); // Logs "red", "blue", "green"
}
```
- **Best for**: Arrays, strings, maps, or sets.
- **Avoid using** on plain objects (non-iterable).

### 3. **for...in loop**
- Used to iterate through **keys (property names)** of an object.

```bash
let user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Logs: name: Alice, age: 25
```
- **Best for**: Objects.
- **Avoid using for arrays** — it may include unexpected prototype properties.

### 4. **while loop**
- Used when the number of iterations is **not known beforehand** and depends on a condition.
```bash
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```
- **Best for**: Condition-based repetition.
- **Example use case**: Repeat until a random number greater than 0.9 is generated.

### 5. **do...while loop**
- Executes the loop **at least once**, even if the condition is false.
```bash
let count = 5;
do {
  console.log(count);
} while (count < 5); // Logs 5 once
```
- **Best for**: When you must perform the action before checking the condition.
- **Example use case**: User input validation.

## How to Choose the Right Loop

| Scenario                              | Recommended Loop | Example                                     |
| ------------------------------------- | ---------------- | ------------------------------------------- |
| Known number of iterations            | `for`            | Counting from 1 to 100                      |
| Condition determines iteration count  | `while`          | Generate random numbers until > 0.9         |
| Iterating over object keys            | `for...in`       | Logging keys and values of a user object    |
| Iterating over array or string values | `for...of`       | Printing each fruit or each character       |
| Loop body must run at least once      | `do...while`     | Prompting user input until correct password |

## Summary
- **for** → when you know how many times to loop.
- **for...of** → when looping through iterable values.
- **for...in** → when looping through object keys.
- **while** → when looping until a condition becomes false.
- **do...while** → when loop must run at least once.