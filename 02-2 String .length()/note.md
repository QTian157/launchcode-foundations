## Object Terminology
- **Object**: A collection of related data and operations.
- **Property**: A piece of data associated with an object.
- **Method**: An operation (function) that can be carried out on an object.
- **Example**:
| Type     | Name   | Example Value          |
| -------- | ------ | ---------------------- |
| Object   | square | 🟦 (the square itself) |
| Property | length | 4                      |
| Method   | area() | length² = 16           |

```bash
let square = {
  length: 4,
  area: function() {
    return this.length * this.length;
  }
};

console.log(square.length); // 4  ← property
console.log(square.area()); // 16 ← method
```
## Syntax for Using Properties and Methods
- **To get the square’s length**:
```bash
square.length;
```
- **To calculate its area**:
```bash
square.area();
```
- **The Built-in console Object**:
```bash
console.log(typeof console); // "object"
// console is an object.
// .log() is one of its methods.
```

## Strings are Objects
- **strings are also objects.**: This means, they have:
    * **Properties** → data about the string
    * **Methods** → operations you can perform on the string
- **The .length property counts everything:**
    * letters
    * numbers
    * symbols
    * space
- **Counting Rules"
    * .length starts counting from 1
    * Bracket notation (e.g. message[0]) starts at index 0

| Concept    | Example               | Result |
| ---------- | --------------------- | ------ |
| `.length`  | `"JavaScript".length` | 10     |
| Last index | `"JavaScript"[9]`     | `"t"`  |
