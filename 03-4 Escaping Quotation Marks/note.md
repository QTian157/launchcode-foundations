## Why Escaping Is Needed
- If your string contains the **same type of quotes** used to define it, JavaScript will misinterpret them as the **end of the string**.

```bash
let string = 'It's a sunny day.';
// Syntax Error: Unexpected identifier
```

- Correct Example
```bash
let string = "It's a sunny day.";
console.log(string); // Output: It's a sunny day.
```
## The Backslash Escape Character `(\)`
- The **backslash** `(\)` is used to **escape** special characters in JavaScript strings. It tells JavaScript to treat the next character **literally**, not as syntax.
- Examples include:
    * \' for single quote

    * \" for double quote

    * \\ for backslash

    * \n for newline

    * \t for tab
- Escaping Single Quotes

```bash
let string = 'It\'s a sunny day.';
console.log(string);
// Output: It's a sunny day.
```
- Escaping Double Quotes

```bash
let string = "She said, \"Hello!\"";
console.log(string);
// Output: She said, "Hello!"
```
- Important Rules
    * Only Escape the Same Type of Quotes

    ```bash
    let str1 = "It's a sunny day.";       // ✅ No need to escape
    let str2 = 'She said, "Hello!"';      // ✅ No need to escape
    ```
    * Escaping Both Types

    ```bash
    let str3 = "She said, \"It\'s amazing!\"";
    console.log(str3);
    // Output: She said, "It's amazing!"
    ```
## Special Cases
- Nested Quotes
```bash
let nestedString = 'She said, \'It\'s a "great day"!\'';
console.log(nestedString);
// Output: She said, 'It's a "great day"!'
```
- File Paths (Windows)
```
let filePath = "C:\\Users\\John\\Documents\\file.txt";
console.log(filePath);
// Output: C:\Users\John\Documents\file.txt
```
## Avoiding Syntax Errors
- Escaping quotes prevents syntax errors and ensures your code runs as intended.
```bash
let safe1 = 'It\'s fine!';
let safe2 = "He said, \"Cool!\"";
let safe3 = "C:\\Program Files\\App";
```