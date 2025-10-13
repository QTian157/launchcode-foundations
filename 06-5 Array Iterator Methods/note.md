# Array Iterator Methods

## Introduction
Arrays in JavaScript are powerful data structures used for organizing and manipulating information.  
While loops like `for` or `while` are common, **array iterator methods** simplify the process by providing built-in functions that handle iteration automatically.

These methods make your code:
- More **concise** and **readable**
- Easier to **maintain**
- Better aligned with **functional programming** practices

Common iterator methods include:
- `.forEach()`
- `.map()`
- `.filter()`
- `.reduce()`
- `.find()`
- `.findIndex()`
- `.some()`
- `.every()`

---

## Learning Objectives
By the end of this lesson, you will be able to:
1. Call and use various array iterator methods.  
2. Understand how callback functions work in array methods.  
3. Apply methods to transform, filter, and aggregate data effectively.

---

## Introduction to Array Iterator Methods
Iterator methods simplify array operations without manually tracking indexes.  
They accept **callback functions**, which define what to do with each element.

### Anatomy of an Iterator Method
```bash
array.method(element => {
  // logic for each element
});
```
    * array: the array to process
    * method: iterator method (forEach, map, filter, etc.)
    * element: current array item
    * callback function: custom logic applied to each element

## Callback Functions
- **Defination**: A callback function is passed as an argument to another function. In array methods, it defines the operation for each element.
```bash
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
```
- The arrow function **(num => console.log(num))** is the callback.
- Callbacks make array methods flexible and powerful, allowing you to:
    * Log data
    * Transform elements
    * Filter arrays
    * Reduce arrays to single values

## Access and Transformation Methods
- .forEach()

    * **Purpose**: Execute a function once for each array element.
    * **Returns**: undefined (used for side effects only).
    * **Use Case**: Logging, updating external variables.

    ```bash
    let numbers = [1, 2, 3, 4];
    let total = 0;
    numbers.forEach(num => total += num);
    console.log(total); // 10
    ```
- .map()

    * **Purpose**: Transform each element into a new value.
    * **Returns**: A new array of the same length.
    * **Use Case**: Data transformation.
    ```bash
    let prices = [100, 200, 300];
    let dollars = prices.map(price => price / 100);
    console.log(dollars); // [1, 2, 3]
    ```

## Filtering and Searching Methods
- .filter()

    * **Purpose**: Create a new array with elements that pass a condition.
    * **Returns**: A new filtered array.
    * **Use Case**: Narrowing datasets.

    ```bash
    let ages = [12, 18, 22, 15];
    let adults = ages.filter(age => age >= 18);
    console.log(adults); // [18, 22]
    ```

- .find()

    * **Purpose**: Find the first element that satisfies a condition.
    * **Returns**: The element or undefined.
    * **Use Case**: Retrieve a specific value.

    ```bash
    let words = ["apple", "banana", "cherry"];
    let result = words.find(word => word.startsWith("b"));
    console.log(result); // "banana"
    ```
- .findIndex()

    * **Purpose**: Find the index of the first matching element.
    * **Returns**: The index or -1.
    * **Use Case**: Locate element positions.

    ```bash
    let expiryDates = ["2023-01-01", "2023-02-01", "2022-12-01"];
    let expired = expiryDates.findIndex(date => date < "2023-01-01");
    console.log(expired); // 2
    ```

- .some()

    * **Purpose**: Check if any element meets a condition.
    * **Returns**: true or false.
    * **Use Case**: Partial validation.

    ```bash
    let prices = [50, 75, 100];
    let hasDiscount = prices.some(price => price < 60);
    console.log(hasDiscount); // true
    ```
- .every()

    * **Purpose**: Check if all elements meet a condition.
    * **Returns**: true or false.
    * **Use Case**: Full validation.

    ```bash
    let numbers = [1, 2, 3, 4];
    let allPositive = numbers.every(num => num > 0);
    console.log(allPositive); // true
    ```
## Reduction Method
- .reduce()

    * **Purpose**: Combine array elements into a single value.
    * **Returns**: A single accumulated value.
    * **Use Case**: Summing, averaging, flattening, aggregating.

    * Syntax:

    ```bash
    array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
    }, initialValue);
    ```

    * Example:
    ```bash
    let revenues = [100, 200, 300];
    let totalRevenue = revenues.reduce((total, revenue) => total + revenue, 0);
    console.log(totalRevenue); // 600
    ```

## Summary Table

| Method          | Purpose                           | Returns                | Common Use Case          |
| --------------- | --------------------------------- | ---------------------- | ------------------------ |
| **forEach()**   | Executes a function for each item | `undefined`            | Logging, side effects    |
| **map()**       | Transforms elements               | New array              | Data transformation      |
| **filter()**    | Filters elements by condition     | New array              | Narrowing datasets       |
| **find()**      | Finds first matching element      | Element or `undefined` | Search for specific item |
| **findIndex()** | Finds index of first match        | Index or `-1`          | Locate positions         |
| **some()**      | Checks if any match condition     | `true` / `false`       | Validation (any match)   |
| **every()**     | Checks if all match condition     | `true` / `false`       | Validation (all match)   |
| **reduce()**    | Reduces array to single value     | Single value           | Aggregations, totals     |
