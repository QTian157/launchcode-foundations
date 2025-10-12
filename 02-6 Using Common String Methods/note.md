## String Common Method
- searching String
    * indexOf
    * includes
    * startsWith
    * endsWith
- Transformaing String
    * toLowerCase
    * toUpperCase
    * trim
    * replace (+ replace all)
- Breaking String Apart
    * split
- Retrieving Sustrings
    * charAt
    * slice (+ negative indices)
    * Combining method

## Searching Strings
- **indexOf**: Returns the **first index** of a substring or **-1** if not found. Case-sensitive.
```bash
const text = "JavaScript is awesome!";
text.indexOf("Java"); // 0
text.indexOf("is");   // 11
text.indexOf("fun");  // -1
// Optional start position:
text.indexOf("is", 12); // -1
```

- **includes**: Returns the **true/false** if a substring exists. Case-sensitive.
```bash
const t = "Coding is fun!";
t.includes("fun");        // true
t.includes("Fun");        // false
t.includes("Coding", 7);  // false
```
- **startsWith**: Returns the **true/false** if a substring exists. Case-sensitive.
```bash
const t = "Hello, World!";
t.startsWith("Hello");   // true
t.startsWith("World");   // false
t.startsWith("World", 7);// true
```

- **endsWith**: Checks the end of a string.
```bash
const t = "Welcome to JavaScript!";
t.endsWith("!");           // true
t.endsWith("JavaScript!"); // true
t.endsWith("Java", 15);    // true (pretend length is 15)
```
- **Tip**: If your string has **leading/trailing** spaces (e.g., user input), **trim** before **startsWith/endsWith**.

## Transforming Strings
- **Immutability**: String methods return new strings. The original isn’t changed unless you reassign.

- **toLowerCase**: 
```bash
"HELLO, WORLD!".toLowerCase(); // "hello, world!"
```

- **toUpperCase**:
```bash
"hello, world!".toUpperCase(); // "HELLO, WORLD!"
```

- **trim**: Removes **whitespace** from both ends.
```bash
const userInput = "   Hello   ";
userInput.trim(); // "Hello"
```

- **replace + (replace all)**: Replace **all** occurrences with **a regex + g** flag:
```bash
"fun fun fun".replace(/fun/g, "awesome"); // "awesome awesome awesome"
```

## Breaking Strings Apart: split
```bash
"apple,banana,grape".split(","); // ["apple", "banana", "grape"]

"This is a test".split(" ");     // ["This", "is", "a", "test"]

// Limit parts:
"apple,banana,grape,orange".split(",", 2); // ["apple","banana"]

// Multiple delimiters with regex:
"apple;banana,grape orange".split(/[,; ]/);
// ["apple", "banana", "grape", "orange"]

// Robust word split (collapse multiple spaces):
"  a   b c  ".trim().split(/\s+/); // ["a","b","c"]
```

## Retrieving Substrings

- **chatAt**: Get a single character by index (0-based). Out of bounds → "".
```bash
const word = "Hello";
word.charAt(1);    // "e"
word.charAt(10);   // ""
```

- **slice (+ negative indices)**: slice(start, endExclusive) → returns a substring.
```bash
const text = "JavaScript";
text.slice(0, 4);   // "Java"
text.slice(-4);     // "ript" (last 4 chars)
```

- **Dynamic extraction example:**
```bash
const sentence = "Learn JavaScript easily";
const part = sentence
  .slice(sentence.indexOf("JavaScript"), sentence.indexOf("easily"))
  .trim(); // "JavaScript"
```

## 正则表达式（Regular Expression，简称 regex）
- **defination**: 正则表达式是一种 用来匹配和处理字符串的“规则语言”。你可以把它想象成：写一套“搜索模式”，让计算机根据这个模式去找、替换或分割文本。
- **精确匹配**
```bash
let text = "I have a cat.";
console.log(/cat/.test(text)); // true
// 这里 /cat/ 就是一个正则表达式，匹配到 cat。
```
- **匹配一类字符**
```bash
/[abc]/   // 匹配 a 或 b 或 c
/[0-9]/   // 匹配 0 到 9 的任意数字
/[A-Z]/   // 匹配大写字母
```

- **组合匹配**: 比如：我要分割用逗号、分号或空格隔开的水果：
```bash
let data = "apple;banana,grape orange";
let fruits = data.split(/[,; ]/);
console.log(fruits); 
// ["apple", "banana", "grape", "orange"]
这里 /[,; ]/ 就是一个正则，表示“匹配逗号、分号或空格”。
```

- **使用特殊符号（元字符）**
    * `.` → 匹配任意单个字符（除了换行）

    * `\d` → 匹配数字（digit）

    * `\w` → 匹配字母、数字或下划线

    * `\s` → 匹配空格

    * `+` → 前面的内容出现 一次或多次

    * `*` → 前面的内容出现 零次或多次

    * `?` → 前面的内容出现 零次或一次

    ```bash
    /\d+/   // 匹配一个或多个数字，比如 "123"
    /\w+/   // 匹配一个或多个单词字符，比如 "hello123"
    ```

- **Summary**
    * 正则表达式就是一种 描述字符串匹配规则的工具。

    * 它让你可以 **搜索**：找到符合规则的内容。

    * 可以 **替换**：把符合规则的内容换掉。

    * 可以 **分割**：按规则把字符串切成小片段。


# 📘 JavaScript 正则表达式口诀表

本表帮你快速掌握 JavaScript 中最常用的正则表达式写法，配合口诀 + 例子，查阅即懂。

---

## 🔹 一、基础匹配

| 写法 | 含义 | 示例 |
|------|------|------|
| `abc` | 匹配字符串 "abc" | `/abc/.test("123abc456") → true` |
| `.` | 任意一个字符（除换行） | `/a.c/.test("abc") → true` |

---

## 🔹 二、字符类（Character Class）

| 写法 | 含义 | 示例 |
|------|------|------|
| `[abc]` | 匹配 a 或 b 或 c | `"apple".match(/[abc]/) → "a"` |
| `[0-9]` | 匹配任意数字 | `"abc123".match(/[0-9]/) → "1"` |
| `[A-Z]` | 匹配大写字母 | `"JS".match(/[A-Z]/) → "J"` |
| `[^abc]` | 匹配 **不是** a/b/c 的字符 | `"dog".match(/[^abc]/) → "d"` |

---

## 🔹 三、快捷写法（Shorthand）

| 写法 | 含义 | 示例 |
|------|------|------|
| `\d` | 数字 digit → 0–9 | `/\d+/.test("123") → true` |
| `\w` | 字母/数字/下划线 | `/\w/.test("hello") → true` |
| `\s` | 空格、换行、Tab | `"a b".match(/\s/) → " "` |
| `\D` | 非数字 | `"abc".match(/\D/) → "a"` |
| `\W` | 非字母/数字/下划线 | `"@".match(/\W/) → "@"` |
| `\S` | 非空格 | `"hi".match(/\S/) → "h"` |

---

## 🔹 四、数量修饰符（Quantifiers）

| 写法 | 含义 | 示例 |
|------|------|------|
| `a+` | a 出现 **1 次或多次** | `"aaa".match(/a+/) → "aaa"` |
| `a*` | a 出现 **0 次或多次** | `"bbb".match(/a*/) → ""` |
| `a?` | a 出现 **0 或 1 次** | `"a".match(/a?/) → "a"` |
| `a{3}` | a 出现 **3 次** | `"aaa".match(/a{3}/) → "aaa"` |
| `a{2,4}` | a 出现 **2~4 次** | `"aaaaa".match(/a{2,4}/) → "aaaa"` |

---

## 🔹 五、边界符（Anchors & Boundaries）

| 写法 | 含义 | 示例 |
|------|------|------|
| `^` | 开头 | `/^Hello/.test("Hello World") → true` |
| `$` | 结尾 | `/!$/.test("Wow!") → true` |
| `\b` | 单词边界 | `/\bcat\b/.test("cat") → true`（但 `"caterpillar"` → false） |

---

## 🔹 六、常用标志（Flags）

| 写法 | 含义 | 示例 |
|------|------|------|
| `g` | global → 全局匹配 | `"a,a,a".replace(/a/g,"b") → "b,b,b"` |
| `i` | ignore case → 忽略大小写 | `/cat/i.test("CAT") → true` |
| `m` | multiline → 多行匹配 | 常用于处理多行文本 |

---

## 🔹 七、经典应用示例

### ✅ 1. 替换所有出现的字符
```bash
"hello hello".replace(/hello/g, "hi");
// "hi hi"
```

### ✅ 2. 检查邮箱格式（简化版）
```bash
const email = "test@example.com";
console.log(/^[\w.-]+@[\w.-]+\.\w+$/.test(email)); // true
```
```bash
解析🔹 1. 外层结构

/.../ → 正则表达式的写法

.test(email) → 检查 email 变量里的字符串是否符合这个正则，如果符合就返回 true，否则返回 false。

🔹 2. ^ 和 $

^ → 表示 开头

$ → 表示 结尾
👉 所以整个 ^...$ 表示：从头到尾必须完全匹配这个规则，中间不能多也不能少。

🔹 3. [\w.-]+

[ ] → 字符集合，表示匹配里面任意一个字符

\w → 匹配字母、数字或下划线

. → 匹配字面上的点号（这里放在中括号里，不是任意字符）

- → 匹配连字符（减号）

[\w.-] → 表示“字母、数字、下划线、点、减号”都可以

+ → 表示前面的内容要出现 1 次或多次

👉 所以 [\w.-]+ = “邮箱用户名部分”，比如 test、user.name、abc-123。

🔹 4. @

就是邮箱里的 @ 符号。

🔹 5. [\w.-]+

重复上面的逻辑：这次是邮箱的域名部分（如 example、mail-server）。

🔹 6. \.

\. → 匹配一个点号（必须写 \.，否则单独的 . 在正则里表示“任意字符”）。
👉 这里表示邮箱的域名后缀前的点，比如 .com。

🔹 7. \w+

\w+ → 一个或多个字母/数字/下划线。
👉 在邮箱里就是 .com 里的 com 部分。
```

### ✅ 3. 分割多种符号
```bash
const data = "apple;banana,grape orange";
console.log(data.split(/[,; ]/));
// ["apple", "banana", "grape", "orange"]
```

## 🔹 八、口诀速记
| 分类      | 口诀                              |
| ------- | ------------------------------- |
| **字符类** | 中括号 `[ ]`：里面随便挑一个               |
| **转义符** | 反斜杠 `\`：`\d` 数字，`\w` 单词，`\s` 空格 |
| **数量符** | `+` 一个或多个，`*` 零个或多个，`?` 零个或一个   |
| **边界符** | `^` 开头，`$` 结尾                   |
| **通配符** | `.` 任意一个字符（除了换行）                |
