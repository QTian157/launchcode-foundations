## Creating Arrays with Array(n)
- You can create arrays using **array literals**, But sometimes, you may not know the array values in advance — you only know how many elements you’ll need.
- That’s where the **Array(n) constructor** comes in.

## What Is the Array(n) Constructor?
- The Array(n) constructor in JavaScript creates an array with n **empty** slots.These slots exist, but they are **uninitialized** — meaning they don’t even contain undefined!

```bash
let newArray = Array(5);
console.log(newArray); // [ <5 empty items> ]
// Array(5) creates an array with 5 positions.
// Each position is empty, not undefined or null.
```
- These “empty” slots can’t be accessed directly until you fill them, but they reserve space for future data.

## Declaring an Array Using Array(n)
- This method of creating arrays doesn’t use square brackets.
- Here’s a step-by-step example of creating an array to store 10 pet names later:
```bash
// 1. Declare your variable
let myPets;

// 2. Assign a value using Array(n)
myPets = Array(10);

// 3. Log it to confirm
console.log(myPets); // [ <10 empty items> ]
```

## Behavior of Empty Slots in JavaScript

| Type           | Created How                                | Meaning                             | Skipped by `.map()` / `.forEach()`? |
| -------------- | ------------------------------------------ | ----------------------------------- | ----------------------------------- |
| **Empty Slot** | `Array(n)`                                 | Uninitialized, not even `undefined` | ✅ Yes (Skipped)                     |
| **Undefined**  | Explicitly assigned (`arr[i] = undefined`) | No value assigned                   | ❌ No                                |
| **Null**       | Explicitly assigned (`arr[i] = null`)      | Intentional “nothing” placeholder   | ❌ No                                |

| 项目        | 你的说法       | 实际机制                                |
| --------- | ---------- | ----------------------------------- |
| empty     | ✅ 没有值、只是空槽 | ✅ 没有任何初始化，连 `undefined` 都不是         |
| undefined | ❌ “不知道类型”  | ✅ “知道有这个变量，只是值是 undefined（即‘未定义值’）” |
| null      | ✅ “故意空”    | ✅ “明确赋了一个空对象值”                      |

- **empty** 是结构上存在但未初始化的空；
- **undefined** 是逻辑上存在但尚未赋值的空；
- **null** 是有意指定为空对象的空。


## Populating Empty Slots
- Using the .fill() Method
    * .fill() lets you set every slot in the array to a specific value in one line.

    ```bash
    // Step 1: Create an empty array
    let emptyArray = Array(4);

    // Step 2: Fill it with a default value
    let filledArray = emptyArray.fill(0);

    // Step 3: Check the result
    console.log(filledArray); // [0, 0, 0, 0]
    ```
    * Optional Parameters: You can control the **start** and **end** indexes of the fill operation.
    ```bash
    let arr = Array(5).fill("A", 1, 4);
    console.log(arr); // [empty, 'A', 'A', 'A', empty]
    ```

    * When to Use .fill()

    | Situation                  | Description                                                        |
    | -------------------------- | ------------------------------------------------------------------ |
    | **Initializing Arrays**    | Quickly set all values to a default (e.g., zeros for computation). |
    | **Testing / Mocking Data** | Create test arrays of fixed size and values.                       |
    | **Placeholder Values**     | Reserve space for future computations or user input.               |

- Using a for Loop
    * When each value depends on its index or a calculation, .fill() isn’t enough.
    * In that case, use a for loop:
    ```bash
    let numbers = Array(5);

    for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1; // Assign values dynamically
    }

    console.log(numbers); // [1, 2, 3, 4, 5]
    ```
    * Use a loop when:
        * You need to calculate or generate each value individually.
        * You’re populating with different values rather than a single repeated one.
- Summary

| Method             | Use Case                                            | Example Output        |
| ------------------ | --------------------------------------------------- | --------------------- |
| **`Array(n)`**     | Create array with empty slots                       | `[ <5 empty items> ]` |
| **`.fill(value)`** | Initialize all values                               | `[0, 0, 0, 0]`        |
| **`for` loop**     | Fill dynamically (index-based or calculated values) | `[1, 2, 3, 4, 5]`     |
