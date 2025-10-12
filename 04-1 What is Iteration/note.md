# What Is Iteration?

## Introduction

Programming often involves tasks that require repeating certain actions, such as:
- Processing a list of items  
- Generating sequences  
- Performing calculations multiple times  

In **JavaScript**, this repetition is achieved using **iteration**.

Iteration allows your code to **cycle through a block of instructions repeatedly**, enabling efficient handling of repetitive tasks.  
However, it’s important to understand **how iteration interacts with JavaScript’s top-to-bottom code evaluation**.

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Explain how iteration affects the top-to-bottom evaluation of code.  
2. Describe how loops temporarily change the normal control flow.  
3. Recognize the efficiency and flexibility iteration brings to programming.

---

## Iteration in JavaScript

- In most JavaScript programs, code executes **line by line**, from top to bottom.  
For example:

```bash
console.log("Start");
console.log("End");
```
- Output
```bash
Start
End
```
- This is **sequential execution** — the default control flow in JavaScript.

## Introducing Iteration (Loops)
- Iteration temporarily **disrupts this linear flow**.
- When JavaScript encounters a loop, it repeatedly executes the code block until a condition is no longer true. After the loop finishes, it resumes normal top-to-bottom execution.
- Example:
```bash
console.log("Start");
for (let i = 0; i < 3; i++) {
  console.log("Iteration", i);
}
console.log("End");
```
- How It Works:
    * Initialization → let i = 0
    * Condition Check → i < 3
    * Code Execution → console.log("Iteration", i)
    * Increment → i++
    * Repeats until the condition becomes false.
- Output
```bash
Start
Iteration 0
Iteration 1
Iteration 2
End
```
## Understanding the Impact on Control Flow
- Iteration **temporarily pauses** the normal top-to-bottom execution.
- While inside the loop:
    * The loop body runs repeatedly.
    * Each iteration follows its own mini-sequence (init → check → run → update).
    * Once the condition fails, execution resumes where it left off.
- This allows for:
    Predictable, repetitive operations
    Reduced redundancy
    Cleaner, more maintainable code
- However, **incorrect placement of statements inside or outside loops** can cause issues, such as:
    * Skipped iterations
    * Incorrect variable updates
    * Unexpected behavior

## Control Flow in JavaScript
- Control flow determines the order in which statements execute.
---
| Type          | Definition & Description                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| **Sequence**  | The default flow of execution where code runs line by line, top to bottom, in the order it appears.    |
| **Iteration** | Repeatedly executes a block of code while a condition remains true or for a specified number of times. |
---
