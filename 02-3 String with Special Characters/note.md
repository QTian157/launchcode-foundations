## What Is an Escape Sequence?

- An **escape sequence** is a combination of characters that represent special or non-printable symbols.  
They begin with a **backslash (`\`)**, signaling that the following character(s) should be interpreted differently.

- 逃逸序列（Escape Sequence） 是一组字符，用来在字符串中表示那些不易直接输入或有保留意义的字符。
在 JavaScript 中，转义序列以 反斜杠 \ 开头，告诉解释器“后面的字符要特殊处理”。

| 序列        | 含义                      | 示例代码                | 输出              |
| --------- | ----------------------- | ------------------- | --------------- |
| `\n`      | 换行 (New line)             | `"Hello\nWorld"`    | Hello↵World     |
| `\t`      | 制表符（tab）                | `"A\tB"`            | A····B（宽度视环境）   |
| `\\`      | 反斜杠本身                   | `"C:\\Users\\Qi"`   | `C:\Users\Qi`   |
| `\'`      | 单引号                     | `'It\'s ok'`        | `It's ok`       |
| `\"`      | 双引号                     | `"He said: \"Hi\""` | `He said: "Hi"` |
| `\uXXXX`  | 基本多文种平面 Unicode（4位十六进制） | `"\u03A9"`          | `Ω`             |
| `\u{...}` | 任意码位（ES6，花括号）           | `"\u{1F389}"`       | 🎉              |


## Using Newline `\n`

- The newline escape character `\n` adds a **line break** in a string.

    ```bash
    let greeting = "Hello,\nWelcome to the Bootcamp!";
    console.log(greeting);
    ```

- Output
    ```bash
    Hello,
    Welcome to the Bootcamp!
    ```

## Using Tab `\t`
- The tab escape sequence \t adds horizontal spacing, useful for aligning text like a table.
```bash
let table = "Item\tPrice\nApple\t$1\nBanana\t$2";
console.log(table);
```

- Output
```bash
Item    Price
Apple   $1
Banana  $2
```
## Combining `\n` and `\t`
- You can mix both for better formatting.
```bash
let report = "Name\tAge\tScore\nAlice\t25\t85\nBob\t30\t90";
console.log(report);
```

- Output
```bash
Name    Age    Score
Alice   25     85
Bob     30     90
```
## Using Unicode Characters `\uXXXX`
- Unicode is a global standard that allows text representation from different languages, symbols, and emojis. In JavaScript, you use the \u escape sequence followed by a 4-digit hexadecimal code.

- Example 1: Greek Letter Omega (Ω)
```bash
let omega = "\u03A9";
console.log("The Greek letter Omega: " + omega);
```

- Example 2: Smiley Face (☺)
```bash
let smile = "\u263A";
console.log("Have a nice day! " + smile);
```
- Example 3: Chinese Characters
```bash
let chinese = "\u4F60\u597D"; // "你好"
console.log(chinese);
```

- Example 4: Mathematical Symbols
```bash
let pi = "\u03C0";
console.log("The value of " + pi + " is approximately 3.14.");
```

- Example 5: Emoji (🎉)
```bash
let party = "\u{1F389}";
console.log("Congratulations! " + party);
```

- Unicode 字符 \u / \u{...}

```bash
// 基本平面（4位十六进制）
const omega = "\u03A9";   // Ω
// 超出基本平面（花括号写法）
const party = "\u{1F389}"; // 🎉

console.log("Omega:", omega);
console.log("Party:", party);
```

- Where to Find Unicode Codes
https://symbl.cc/
