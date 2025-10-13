## What is Bracket Notation?
- **Defination**: Bracket notation allows you to access, reference, or modify elements in an array using square brackets [] with an index inside.
- **Example**:
```bash
let colors = ["red", "blue", "green"];
console.log(colors[0]); // "red"
console.log(colors[2]); // "green"
```
- **Key Characteristics of an Index**

| Characteristic                 | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| **Zero-Based**                 | The first element starts at index `0`, not `1`. |
| **Sequential**                 | Each element has a unique ordered position.     |
| **Used With Bracket Notation** | Access elements with `[index]`.                 |
| **Can Be Dynamic**             | Variables or expressions can calculate indices. |

- **Why Do Array Indexes Start at Zero?**
    * Arrays are stored as contiguous blocks of memory.
    * Each element is located at a fixed offset (distance) from the array’s starting position.
        * The first element is 0 spaces away from the beginning → so its index is 0.
        * This design allows computers to calculate memory positions efficiently.

## Bracket Notation in Multi-Dimensional Arrays
- **Defination**: A multi-dimensional array is an array that contains other arrays as its elements.
- **Example**:
```bash
let seatingChart = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eve", "Frank"],
  ["Grace", "Heidi", "Ivan"]
];
```

## Accessing Data in Multi-Dimensional Arrays
- **Defination**: To access elements in nested arrays, use multiple sets of brackets.
- **How It Works**
    * First Index → selects the sub-array.
    ```bash
    array[firstIndex]
    ```
    * Second Index → selects an element from that sub-array.
    ```bash
    array[firstIndex][secondIndex]
    ```
    * Example:
    ```bash
    console.log(seatingChart[1][1]); // "Eve"
    ```

        * [1] selects the second sub-array → ["David", "Eve", "Frank"]
        * [1] after that selects "Eve" from within that sub-array.

## Edge Cases and Tips
- **Dynamic Indexing**
    * Instead of hardcoding indices, use variables:

    ```bash
    let theaterSeats = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]
    ];

    let row = 2;
    let seat = 0;
    console.log(theaterSeats[row][seat]); // "C1"
    ```
    * Makes code flexible and adaptable when indices change.

- **Iterating Through Nested Arrays**
    * Use nested loops to access all elements:
    ```bash
    for (let i = 0; i < theaterSeats.length; i++) {
    for (let j = 0; j < theaterSeats[i].length; j++) {
        console.log(theaterSeats[i][j]);
    }
    }
    ```

    * This prints all seats:

    ```bash
    A1 A2 A3 A4
    B1 B2 B3 B4
    C1 C2 C3 C4
    ```
- **Handling Gaps in Nested Arrays**

    * If a sub-array is missing or incomplete, accessing non-existent indices returns undefined (not an error).

    * Example:

    ```bash
    let incompleteTheaterSeats = [
    ["A1", "A2"],
    ["B1"],
    ["C1", "C2", "C3"]
    ];
    console.log(incompleteTheaterSeats[1][1]); // undefined
    ```
    * Best Practice: Always check that an element exists before accessing it.

## Why Accessing Multi-Dimensional Arrays Matters
- Mastering this concept allows you to work with real-world hierarchical or tabular data, such as:

    * Grids: Seating charts, spreadsheets
    * Matrices: Math computations, graphics
    * Hierarchical Data: JSON structures, nested datasets