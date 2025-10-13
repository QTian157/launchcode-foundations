## While Loop
- **Defination**: The while loop executes as long as its condition is true. The condition is checked before each iteration, so the loop body may never run if the condition is initially false.
```bash
while (booleanExpression) {
  // loop body
}
```
- **Flow of Execution**
    * Evaluate condition.
    * If false → skip body and continue after the loop.
    * If true → execute body, then go back to step 1.

## Do…While Loop
- Defination: The do…while loop executes the body once before evaluating the condition. This guarantees at least one execution.
- **Sytax**
```bash
do {
  // code to execute
} while (condition);
```
- How It Works (Step-By-Step)
    * Run the do { ... } block.
    * Evaluate the condition.
    * If true → repeat; if false → stop.

- What Makes Do…While Unique
    * Condition is checked after the body.
    * Use when you must do something at least once (e.g., prompt the user).

- When to Use Do…While (Use Cases)
    * Prompting for User Input

    ```bash
    let password;
    do {
    password = prompt("Enter your password:");
    } while (password !== "secret");
    console.log("Access granted.");
    ```
    * One-Time Initialization + Validate
    ```bash
    let number;
    do {
    number = Math.random();
    console.log(`Generated number: ${number}`);
    } while (number < 0.8);
    ```
    * Retry Logic
    ```bash
    let success = false;
    let attempts = 0;

    do {
    attempts++;
    console.log(`Attempting operation: Try ${attempts}`);
    // Simulate success on the third try
    if (attempts === 3) success = true;
    } while (!success);
    console.log("Operation successful!");
    ```
## Break Statement
- **Terminate a Loop Early**: break immediately stops the closest loop and continues execution after it.
```bash
for (let i = 0; i < 42; i++) {
  // ...
  if (i > 10) {
    break;               // loop runs for i = 0..11 (12 iterations)
  }
}
```
- Search Example with while + break
```bash
let numbers = [ /* some list of numbers */ ];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === searchVal) {
    break;               // found it → exit loop
  }
  i++;
}

if (i < numbers.length) {
  console.log("The value", searchVal, "was located at index", i);
} else {
  console.log("The value", searchVal, "is not in the array.");
}
```
---
- **Why Not for Here?**
    * We use while because the loop variable i is needed after the loop to report the result. In a typical for (let i = …) form, i is block-scoped to the loop.
# 🧠 Why Not `for` Here?

> “We use **while** because the loop variable **i** is needed after the loop to report the result.  
> In a typical `for (let i = …)` form, **i** is block-scoped to the loop.”

这句话解释了为什么在某些情况下要使用 **`while`** 循环，而不是 **`for`** 循环。  
下面我们来一步步拆解 👇

---

## 🧩 句子含义逐层讲解

### ✅ 1. “We use while because the loop variable i is needed after the loop to report the result.”

👉 **意思是：**  
我们使用 `while` 循环，是因为变量 **`i`** 在循环结束之后还需要继续使用。  

例如：

```bash
let numbers = [10, 22, 42, 55];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === searchVal) {
    break; // 找到目标就退出循环
  }
  i++;
}

// 🔹 循环结束后，这里还需要用 i
if (i < numbers.length) {
  console.log("Found at index", i);
} else {
  console.log("Not found");
}
```
- 在这段代码中：

    * 循环结束后，我们要判断 i 是否小于 numbers.length。
    * 如果是，说明找到了；i 就是找到的索引位置。
    * 因此，我们必须在循环外仍然能访问变量 i。

### ✅ 2. “In a typical for (let i = …) form, i is block-scoped to the loop.”
- 意思是：在标准写法 for (let i = 0; i < numbers.length; i++) 中，
let 定义的变量 i 是 块级作用域（block-scoped） 的，
也就是说它只在循环内部存在。
```bash
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // ❌ 报错：ReferenceError: i is not defined
// 因为 let i 只在 for 的 {} 代码块中有效，出了循环之后 i 就“消失”了。
// 如果一定想用 for, 我们可以提前定义 i，让它在循环外也可用：
```
---

## While vs Do…While (Quick Compare)

| Feature            | `while`                          | `do…while`                                             |
| ------------------ | -------------------------------- | ------------------------------------------------------ |
| Condition check    | **Before** body                  | **After** body                                         |
| Minimum executions | 0                                | **1**                                                  |
| Typical use        | Run only if condition is true    | Must run once before checking                          |
| Risk               | Forget to update → infinite loop | Unintended extra iteration if condition is rarely true |
