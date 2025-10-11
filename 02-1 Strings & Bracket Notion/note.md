## Introduction  
- **Zero-Based Indexing**
    * The **Zero-Based Indexing** means that indexes start from **0**.
    * The **index value** represents the **offset distance** of an element from the starting point.  
    * Most programming languages — including **JavaScript, Python, C, and Java** — use this system.
    ```bash
    "Hello"[0]; // 'H'
    "Hello"[1]; // 'e'
    "Hello"[4]; // 'o'
    ```
    | Character | H | e | l | l | o |
    | --------- | - | - | - | - | - |
    | Index     | 0 | 1 | 2 | 3 | 4 |

## Understanding Strings
- **Collection Data Types**: Strings belong to a special category of collection data types — data types made of smaller pieces.
    * Individual pieces of a string: called characters
    * A character is a string containing exactly one element
        ```bash
        "A"
        "?"
        " "  // a single space
        ```

- **Ordered Collections**: Strings are ordered collections of characters — meaning their order matters.
    ``bash
    "LaunchCode" !== "CodeLaunch"; // Even though both contain the same letters, their order is different.
    ```               
- **Bracket Notation**: Bracket notation is the special syntax that allows us to access the individual characters that make up a string.
    * Syntax:
    ```bash
    someString[i]
    ```
    ```bash
    let someString = "LaunchCode";
    console.log(someString[0]); // 'L'
    console.log(someString[5]); // 'h'
    ```
    * Accessing Invalid Indexes - **undefined**
    ```bash
    let name = "Code";
    console.log(name[-1]); // undefined
    console.log(name[99]); // undefined
    ```
    ```bash
    let myStr = "Index";
    ```
    | Expression         | Result  | Explanation                   |
    | ------------------ | ------- | ----------------------------- |
    | `myStr[2] === 'n'` | ✅ true  | `'n'` is at index 2           |
    | `myStr[4] === 'x'` | ✅ true  | `'x'` is at index 4           |
    | `myStr[6] === ' '` | ❌ false | No index 6, returns undefined |
    | `myStr[0] === 'I'` | ✅ true  | `'I'` is at index 0           |
    * Key Takeaways
        | Concept                   | Description                                            |
        | ------------------------- | ------------------------------------------------------ |
        | **Indexing starts at 0**  | The first character is index 0                         |
        | **Bracket notation**      | Use `string[index]` to access characters               |
        | **Out-of-range index**    | Returns `undefined`                                    |
        | **Strings are immutable** | You can read characters but can’t directly change them |



