# Debug Common Errors

> A practical, beginner‑friendly guide to spotting and fixing **syntax**, **runtime**, and **logic** errors in JavaScript, with examples, checklists, and a repeatable workflow.

---

## Table of Contents

* [Introduction](#introduction)
* [Learning Objectives](#learning-objectives)
* [Types of Errors](#types-of-errors)

  * [Syntax Errors](#syntax-errors)
  * [Runtime Errors](#runtime-errors)
  * [Logic Errors](#logic-errors)
* [Debugging Tools & Techniques](#debugging-tools--techniques)

  * [Using `console.log()`](#using-consolelog)
  * [Reading Error Messages](#reading-error-messages)
  * [Testing in Small Steps](#testing-in-small-steps)
* [Debugging Workflow (5 Steps)](#debugging-workflow-5-steps)
* [Common Error Patterns (Cheat Sheet)](#common-error-patterns-cheat-sheet)
* [Mini Labs](#mini-labs)

  * [Lab 1: Fix the Output](#lab-1-fix-the-output)
  * [Lab 2: Guard Against `undefined` / `null`](#lab-2-guard-against-undefined--null)
  * [Lab 3: Prime Checker (Logic)](#lab-3-prime-checker-logic)
* [Peer-to-Peer Help Guide](#peer-to-peer-help-guide)
* [FAQ](#faq)
* [Conclusion](#conclusion)

---

## Introduction

Debugging is one of the most essential skills for any programmer. As you write and test your code, errors are inevitable, and learning how to identify and fix them is key to becoming a successful developer.

In this guide, you’ll learn to debug simple programs by recognizing **three common error types**—**syntax**, **runtime**, and **logic**—and apply practical techniques to find and fix issues faster.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Debug simple programs to recognize common errors.
2. Differentiate between **syntax**, **runtime**, and **logic** errors.
3. Correct the errors and **confirm** their correction.

---

## Types of Errors

### Syntax Errors

**What:** Code breaks the language’s grammar rules; the program typically won’t run.

**Typical causes:** Missing parentheses/braces/quotes/semicolons, misspelled keywords, invalid punctuation order.

**Example**

```js
// ❌ Missing closing parenthesis
console.log("Hello World" // ← missing )
```

**What you’ll see** (Node.js example):

```
SyntaxError: missing ) after argument list
```

**Fix**

```js
console.log("Hello World");
```

**Tip:** Read the first error message *carefully*; it often points very near the true cause.

---

### Runtime Errors

**What:** Code is syntactically valid, but something invalid happens **during execution** (e.g., calling a non‑existent method, accessing a property on `null`).

**Example A**

```js
let userName = "Alice";
console.log(userName[10]); // → undefined (length is 5)
```

**Safer variant**

```js
if (userName[10] !== undefined) {
  console.log("Character at position 10:", userName[10]);
}
```

**Example B**

```js
let num = 10;
console.log(num.toUpperCase()); // ❌ TypeError: toUpperCase is for strings
```

**Fix**

```js
console.log(String(num).toUpperCase());
```

---

### Logic Errors

**What:** Program runs without crashing but produces **incorrect results** because the logic is wrong.

**Example**

```js
let number = 10;
if (number = 5) { // ❌ assignment instead of comparison
  console.log("Number is 5");
}
```

**Fix**

```js
if (number === 5) {
  console.log("Number is 5");
}
```

**Prime checker example (common pitfall)**

```js
// ❌ Wrong: returns true when divisible
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true; // should be false
    }
  }
  return false; // should be true
}
```

**Corrected & optimized**

```js
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```

---

## Debugging Tools & Techniques

### Using `console.log()`

Instrument your code to inspect values and control flow.

```js
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
  console.log("Current total:", total); // Debug print
}
```

**Tips**

* Label your logs: `console.log("[calc] total:", total)`
* Log inputs and outputs near function boundaries.
* Remove or gate logs when done (e.g., behind `DEBUG` flag).

### Reading Error Messages

Read what happened, where, and why.

```js
let name = "John";
console.log(name.toUppercase()); // ❌ typo: toUpperCase
// → TypeError: name.toUppercase is not a function
```

**Fix**

```js
console.log(name.toUpperCase());
```

### Testing in Small Steps

Write and run **small chunks**. When something breaks, you know which small change did it.

* Start with a “happy path”.
* Add one condition/branch at a time.
* Run tests frequently.

---

## Debugging Workflow (5 Steps)

1. **Reproduce the error** — get a consistent failing case.
2. **Read the error message** — note the type, file, and line.
3. **Use `console.log()`** — inspect variables and branches.
4. **Fix the problem** — change one thing at a time.
5. **Test again** — confirm the fix and check for regressions.

> Pro tip: If the message is noisy, comment out code until the error disappears, then re‑enable sections to isolate the culprit (binary search your code).

---

## Common Error Patterns (Cheat Sheet)

| Pattern                      | Symptom                                        | Quick Fix                                             |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| Missing `)`, `]`, `}`        | `SyntaxError: unexpected token` or `missing )` | Balance brackets; use editor bracket‑matching         |
| Misspelled method            | `TypeError: x.yyy is not a function`           | Check docs / autocomplete; correct casing             |
| Access on `null`/`undefined` | `TypeError: Cannot read properties of null`    | Guard checks, optional chaining `?.`, defaults        |
| Wrong operator               | Code runs but wrong result                     | Use `===` for comparison, not `=`                     |
| Off‑by‑one loop              | Extra/missing iteration                        | Verify start/end; test on tiny inputs                 |
| Wrong data type              | Method not available                           | Convert types: `String(x)`, `Number(x)`, `Boolean(x)` |

---

