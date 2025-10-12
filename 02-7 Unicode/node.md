## Introduction

In the world of programming, understanding how text is represented and manipulated is a fundamental skill.  
Behind the scenes, computers don’t store letters, numbers, or symbols as we see them — they use **numeric codes** to represent every character.

Systems like **Unicode** and **ASCII** assign a **unique code point** to every character.

> One of the most widely used systems is **Unicode**, which assigns a unique code point to virtually every character — from Latin letters to emojis.

### Example

| Character | Unicode Code Point |
|------------|--------------------|
| "A" | 65 |
| "a" | 97 |
| 🙂 | 128578 |

ASCII is actually a **subset of Unicode** — it covers English letters, numbers, and symbols (0–127).  
Unicode includes all ASCII characters **plus thousands more** across many languages.

---

## Learning Objectives

By the end of this lesson, you’ll be able to:

1. Convert characters from strings to Unicode code points using `charCodeAt()`.
2. Convert Unicode code points back into characters using `String.fromCharCode()`.

---

## How Computers Store Characters

If you could look inside your computer’s memory, you wouldn’t see letters or emojis — only streams of `0`s and `1`s.

- Each `0` or `1` is called a **bit**, the smallest unit of data.
- A group of 8 bits = **1 byte**.
- A byte can represent numbers from **0 to 255** (2⁸ = 256 possible combinations).

To store **strings**, computers must map characters → numbers → binary (bits).

---

## Character Encodings

Since there’s no natural link between characters and numbers, computer scientists created **character encodings** — standardized systems to assign a number to each character.

### Common Encoding Systems
- **ASCII (American Standard Code for Information Interchange)**  
  - Range: 0–127  
  - Used for English letters, digits, punctuation, and spaces.  
  - Example:
    - `A → 65`
    - `a → 97`
    - `b → 98`

- **Unicode**
  - Extends ASCII to support characters from all languages and emojis.
  - Example:
    - `Ω (Omega) → 937`
    - `🙂 → 128578`

> JavaScript uses **UTF-16**, which includes ASCII as a subset.
    * UTF-16 是一种 字符编码方式(Character Encoding)
    * 它告诉计算机：“每个字符用 16 位（二个字节）来表示。”
    * UTF-16 is a type of Unicode encoding.
    * It means every character is stored using 16 bits (2 bytes).
    * Most common characters like English or Chinese only need 2 bytes,
    * but some characters such as emojis require 4 bytes.
    * JavaScript uses UTF-16 internally to represent all strings.

---

## Character Encodings in JavaScript

JavaScript provides two important methods to interact with Unicode and ASCII values:

### 1. `charCodeAt()`

Returns the **numeric code point** (ASCII/Unicode value) of a character at a specific index in a string.

#### Example

```bash
let nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0)); // 76 (L)
console.log(nonprofit.charCodeAt(1)); // 97 (a)
console.log(nonprofit.charCodeAt(2)); // 117 (u)
```

### 2. `String.fromCharCode()`

Does the **reverse** — it converts numeric Unicode/ASCII values **back to characters**.

#### Example

```bash
let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters =
  String.fromCharCode(codes[0]) +
  String.fromCharCode(codes[1]) +
  String.fromCharCode(codes[2]) +
  String.fromCharCode(codes[3]) +
  String.fromCharCode(codes[4]) +
  String.fromCharCode(codes[5]) +
  String.fromCharCode(codes[6]) +
  String.fromCharCode(codes[7]) +
  String.fromCharCode(codes[8]) +
  String.fromCharCode(codes[9]);

console.log(characters); // LaunchCode
```
## How Strings Are Represented in a Computer
When a string is stored:

- It’s broken into individual characters.

- Each character is translated into a numeric value (via an encoding system like ASCII).

- Each number is then converted to binary.

- For most JavaScript work, ASCII and Unicode cover all your needs.