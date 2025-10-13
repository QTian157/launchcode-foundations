## Concepts Overview
- **Strings vs. Arrays**

| Data Type  | Description                                           | Example                     |
| ---------- | ----------------------------------------------------- | --------------------------- |
| **String** | A sequence of characters                              | `"hello"`                   |
| **Array**  | A list of values (can include strings, numbers, etc.) | `["h", "e", "l", "l", "o"]` |

## Using .join()
- **How It Works**
    * Converts all elements of an array into a single string
    * Optional separator defines what appears between elements (default is a comma ,)
- **Syntax**：
```bash
array.join(separator);
```
- **Examples**
```bash
let charArray = ["h", "e", "l", "l", "o"];
let word = charArray.join('');
console.log(word); // "hello"
```
- **Using Custom Separators**
```bash
console.log(charArray.join('-')); // "h-e-l-l-o"
console.log(charArray.join(' ')); // "h e l l o"
```
- **Tip: Use an empty string ('') to join without any separator.**

## Using .split()
- **How It Works**
    * Splits a string into an array based on a given delimiter
    * Using an empty string ('') splits it into individual characters

- **Syntax**:
    * string.split(separator);

- **Examples**
    * Split by Characters
    ```bash
    let word = "hello";
    let charArray = word.split('');
    console.log(charArray); // ["h", "e", "l", "l", "o"]
    ```
    * Split by Spaces or Commas
    ```bash
    let sentence = "JavaScript is awesome";
    let words = sentence.split(' ');
    console.log(words); // ["JavaScript", "is", "awesome"]

    let csv = "apple,banana,cherry";
    let fruits = csv.split(',');
    console.log(fruits); // ["apple", "banana", "cherry"]
    ```
## Real-Life Applications
- **Reversing a String**

    * Combine .split(), .reverse(), and .join():
    
        ```bash
        let phrase = "bootcamp";
        let reversedPhrase = phrase.split('').reverse().join('');
        console.log(reversedPhrase); // "pmactoob"
        ```
    * Checking for Palindromes

        ```bash
        A palindrome reads the same backward and forward.

        let word = "radar";
        let isPalindrome = word === word.split('').reverse().join('');
        console.log(isPalindrome); // true
        ```