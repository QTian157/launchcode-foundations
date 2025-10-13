# Common Array Methods

## Introduction

Arrays are one of the most versatile and essential data structures in programming.  
Whether you're building a web application, analyzing data, or solving algorithmic problems, understanding how to manipulate arrays is a foundational skill that will serve you throughout your coding journey.

In this lesson, you’ll learn how to use several **common array methods** that make working with arrays more efficient and expressive.

JavaScript provides a rich set of built-in methods for arrays, each designed to solve specific problems or streamline operations. These methods allow you to **modify arrays**, **access elements**, and **transform data** with ease.  
By mastering these tools, you’ll gain the ability to write code that is both concise and powerful.

---

## Learning Objectives

By the end of this lesson, you’ll be able to confidently use these array methods to manipulate data and streamline your code.

**You will learn to use:**

`concat`, `join`, `split`, `push`, `pop`, `shift`, `unshift`, `slice`, `reverse`, `sort`, `indexOf`.

---

## 🔹 Add and Remove Elements

Array manipulation is a common task in JavaScript, and the following methods make it easy to add or remove elements from the beginning or end of an array:

### **push()**

**Purpose:** Adds one or more elements to the end of an array.  
**Returns:** The new length of the array.  
**Mutates:** Yes

```bash
let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry", "grape");
console.log(fruits);    // ["apple", "banana", "cherry", "grape"]
console.log(newLength); // 4
```
**Use Cases**:
- Building a list dynamically (e.g., shopping cart)
- Adding data to the end of a queue

### **pop()**

**Purpose**: Removes the last element from an array.
**Returns**: The removed element.
**Mutates**: ✅ Yes
```bash
let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop();
console.log(fruits);    // ["apple", "banana"]
console.log(lastFruit); // "cherry"
```

**Use Cases**:

- Undo feature in apps
- Processing items in LIFO order (stack)

### **unshift()**

**Purpose**: Adds one or more elements to the beginning of an array.
**Returns**: The new length of the array.
**Mutates**: Yes

```bash
let fruits = ["banana", "cherry"];
let newLength = fruits.unshift("apple", "mango");
console.log(fruits);    // ["apple", "mango", "banana", "cherry"]
```
**Use Cases**:

- Adding high-priority tasks to a to-do list
- FIFO (First-In-First-Out) queue simulation

### **shift()**

**Purpose**: Removes the first element from an array.
**Returns**: The removed element.
**Mutates**: Yes

```bash
let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift();
console.log(fruits);     // ["banana", "cherry"]
console.log(firstFruit); // "apple"
```
**Use Cases**:

- FIFO queue processing
- Removing oldest entries from logs

### **Comparison Table**

| Method      | Action               | Mutates | Returns          | Position  |
| ----------- | -------------------- | ------- | ---------------- | --------- |
| `push()`    | Add elements         | ✅ Yes   | New array length | End       |
| `pop()`     | Remove last element  | ✅ Yes   | Removed element  | End       |
| `unshift()` | Add elements         | ✅ Yes   | New array length | Beginning |
| `shift()`   | Remove first element | ✅ Yes   | Removed element  | Beginning |

### **Real-Life Example**
```bash
let toDoList = [];
toDoList.push("Task 1");
toDoList.unshift("Urgent Task");
console.log(toDoList); // ["Urgent Task", "Task 1"]

let completedTask = toDoList.shift();
console.log(completedTask); // "Urgent Task"
console.log(toDoList);      // ["Task 1"]
```

## Query and Access Methods
### **includes()**

**Purpose**: Checks if a specific value exists in an array.
**Returns**: true or false

```bash
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```
### **indexOf()**

**Purpose**: Finds the first occurrence of a value.
**Returns**: Index or -1 if not found.

```bash
let fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape"));  // -1
```

### **lastIndexOf()**

**Purpose**: Finds the last occurrence of a value.
**Returns**: Index or -1.

```bash
let fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.lastIndexOf("banana")); // 3
```
### **Comparison Table**

| Method          | Purpose                | Returns      | Direction    | Feature                |
| --------------- | ---------------------- | ------------ | ------------ | ---------------------- |
| `includes()`    | Checks if value exists | true / false | N/A          | Simple existence check |
| `indexOf()`     | Finds first occurrence | Index / -1   | Left → Right | Stops at first match   |
| `lastIndexOf()` | Finds last occurrence  | Index / -1   | Right → Left | Stops at last match    |

### **Real-Life Examples**

```bash
let allowedColors = ["red", "green", "blue"];
let userColor = "yellow";
if (allowedColors.includes(userColor)) {
  console.log("Color is valid.");
} else {
  console.log("Color is not valid.");
}
```

## Combine and Extract Methods
### **concat()**

**Combines arrays into a new one (does not mutate).**

```bash
let fruits = ["apple", "banana"];
let veggies = ["carrot", "broccoli"];
let food = fruits.concat(veggies);
console.log(food); // ["apple", "banana", "carrot", "broccoli"]
```
### **slice()**

**Extracts a portion of an array (non-destructive).**

```bash
let fruits = ["apple", "banana", "cherry", "date"];
let someFruits = fruits.slice(1, 3);
console.log(someFruits); // ["banana", "cherry"]
```

### **splice()**

**Adds, removes, or replaces elements (mutates).**

```bash
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "blueberry");
console.log(fruits); // ["apple", "blueberry", "cherry"]
```
### **Comparison Table**

| Method     | Purpose                        | Mutates | Returns                   |
| ---------- | ------------------------------ | ------- | ------------------------- |
| `concat()` | Combines arrays                | ❌ No    | New array                 |
| `slice()`  | Extracts a portion             | ❌ No    | Extracted array           |
| `splice()` | Adds/removes/replaces elements | ✅ Yes   | Removed elements (if any) |

### **Real-Life Applications**

**Pagination Example:**

```bash
let items = ["item1", "item2", "item3", "item4", "item5"];
let page1 = items.slice(0, 2);
let page2 = items.slice(2, 4);
```

## Sorting and Reversing
### **sort()**

**Sorts elements (mutates array).**

```bash
let fruits = ["banana", "cherry", "apple"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
```

**For numerical sorting**:

```bash
let numbers = [10, 5, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 8, 10]
```
### **reverse()**

**Reverses order of elements (mutates).**

```bash
let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // ["cherry", "banana", "apple"]
```

### **Comparison Table**

| Method      | Purpose        | Mutates | Key Feature                       |
| ----------- | -------------- | ------- | --------------------------------- |
| `sort()`    | Sorts elements | ✅ Yes   | Supports custom compare function  |
| `reverse()` | Reverses order | ✅ Yes   | Flips order regardless of sorting |

## Summary

| Category            | Methods                                    |
| ------------------- | ------------------------------------------ |
| **Add/Remove**      | `push()`, `pop()`, `unshift()`, `shift()`  |
| **Query/Access**    | `includes()`, `indexOf()`, `lastIndexOf()` |
| **Combine/Extract** | `concat()`, `slice()`, `splice()`          |
| **Sort/Reverse**    | `sort()`, `reverse()`                      |

