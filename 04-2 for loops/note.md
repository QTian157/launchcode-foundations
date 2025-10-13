## Types of for Loops
- **for Loop**: 
    * Definiation: The most traditional and flexible looping structure. Ideal when you need fine-grained control (start, stop, step).
    ```bash
    for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
    }
    ```
    * Great for
        * Indexed iteration over arrays (need index & value)
        * Numerical ranges
        * Custom step sizes, complex stop conditions
    * Use when:
        * You need index, custom start/stop/step, or numeric ranges.
        * You must manipulate the counter explicitly.
    * Avoid when:
        * You only need values from an iterable → prefer for...of.

- **for...of Loop**: 
    * Defination: A modern loop designed to iterate the values of iterable objects (Arrays, Strings, Sets, Maps’ iterables, etc.). It prioritizes simplicity and readability when you don’t need indices.
    ```bash
    const colors = ["red", "blue", "green"];
    for (const color of colors) {
    console.log(color); // "red", "blue", "green"
    }
    ```
    * Great for
        * Focuses on values, not indices
        * Not for plain Objects (they’re not iterable by default)
    * Use when:
        * You only need values from an iterable (Array, String, Set, etc.).
        * Clean, declarative iteration improves readability.
    * Avoid when:
        * You need indices (use for or array.entries() with destructuring).
        * You’re iterating plain objects (they’re not iterable by default).

- **for...in Loop**:
    * Defination: Iterates over the keys (property names) of an object. Technically can iterate array indices, but that’s discouraged due to potential surprises (enumerable/inherited properties, order).
    ```bash
    const person = { name: "Alice", age: 25, city: "New York" };
    for (const key in person) {
    console.log(`${key}: ${person[key]}`);
    }
    // name: Alice
    // age: 25
    // city: New York
    ```
    * Great for
        * Plain objects where keys and values both matter
        * Dynamic key access (keys unknown until runtime)
    * Use when:
        * You need keys of an object and will access values via object[key].
        * Keys may be dynamic/unknown at runtime.
        * You’re enumerating properties (e.g., for debugging/inspection).
    * Avoid when:
        * Iterating arrays (includes enumerable/inherited props; order not guaranteed).Prefer for, for...of, or array methods.

- **Advanced Examples**:
    * Nested for...in over a nested object
    ```bash
    const user = {
    name: "Alice",
    details: {
        age: 25,
        location: "New York",
    },
    };

    for (const key in user) {
    if (typeof user[key] === "object") {
        console.log(`Nested object for ${key}:`);
        for (const nestedKey in user[key]) {
        console.log(`  ${nestedKey}: ${user[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${user[key]}`);
    }
    }
    ```
    Output
    ```bash
    name: Alice
    Nested object for details:
    age: 25
    location: New York
    ```

    * for with custom step
    ```bash
    // Even numbers 0..50
    for (let i = 0; i < 51; i += 2) {
    console.log(i);
    }
    ```
- **Comparison Cheat Sheet**

| Feature           | `for`                         | `for...of`                         | `for...in`                               |
| ----------------- | ----------------------------- | ---------------------------------- | ---------------------------------------- |
| Iterates over     | Indices / numeric ranges      | **Values** of an **iterable**      | **Keys** of an **object** (props)        |
| Best for          | Arrays (index needed), ranges | Arrays, Strings, Sets (values)     | Objects (keys → values)                  |
| Access to indices | **Yes**                       | **No** (use `entries()` if needed) | **Yes** (but not recommended for arrays) |
| Mutates iterable  | Only if you code it           | No (by default)                    | No (by default)                          |


