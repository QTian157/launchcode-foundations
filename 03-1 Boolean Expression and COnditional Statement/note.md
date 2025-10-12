## What Are Boolean Expressions?
- **Defination**: A boolean expression evaluates to either true or false. These values guide control flow—like a fork in the road—to decide which branch of code runs
- **Examples**:
    * userAge > 18 → might allow a feature if true, otherwise deny or prompt for more info.
    * Built using relational/comparison operators (> < <= >= === !== == !=) and logical operators (&& || !).
    * Conditional statements execute code based on those boolean results:

    ```bash
    if (isPremiumMember) {
    console.log("You get a 20% discount!");
    } else {
    console.log("Sign up for premium to enjoy exclusive benefits!");
    }
    ```
## Boolean Values & Case Sensitivity
- javaScript stores true/false using the boolean type:
    * Valid booleans: true, false (lowercase only; JS is case-sensitive).
    * "true" and "false" are strings, not booleans.

    ```bash
    console.log(true);            // true
    console.log(typeof true);     // "boolean"
    console.log(typeof "true");   // "string"
    ```
## Truthy vs. Falsy**: All values in JS have an inherent “truthiness” in boolean contexts.
- **Falsy Values (exactly six)**:
    * false
    * 0
    * "" / '' (empty string)
    * null
    * undefined
    * NaN
- **Everything else is truthy**: non-empty strings, non-zero numbers, objects {}, arrays [], and true.

    ```bash
    if ("Hello") {
    console.log("first console.log"); // printed (truthy)
    }

    if (0) {
    console.log("second console.log");
    } else {
    console.log("third console.log"); // printed (0 is falsy)
    }
    ```   
## Terminology: Expression, Operator, Operand         
- Boolean expression: evaluates to true or false.
- Operator: a symbol/keyword that performs an operation on values (operands).
- Operand: the value an operator acts on.   
```bash
console.log(5 === 5); // true
console.log(5 === 6); // false
console.log(true === "true"); // false (different types)
```

## Comparison Operators (with Strict/Loose Equality & Inequality)

| Operator | Type         | Description                                 | True Examples                    | False Examples               |
| -------: | ------------ | ------------------------------------------- | -------------------------------- | ---------------------------- |
|    `===` | strict eq    | True if **value and type** are equal        | `7 === 7`, `"dog" === "dog"`     | `7 === 5`, `5 === "5"`       |
|    `!==` | strict ne    | True if **value or type** differ            | `7 !== 5`, `"dog" !== "cat"`     | `7 !== 7`                    |
|      `>` | comparison   | Left is greater than right                  | `7 > 5`, `'b' > 'a'`             | `5 > 7`, `'a' > 'b'`         |
|      `<` | comparison   | Left is less than right                     | `5 < 7`, `'a' < 'b'`             | `7 < 5`, `'b' < 'a'`         |
|     `>=` | comparison   | Left is greater than or equal to right      | `7 >= 5`, `7 >= 7`, `'b' >= 'b'` | `5 >= 7`, `'a' >= 'b'`       |
|     `<=` | comparison   | Left is less than or equal to right         | `5 <= 7`, `5 <= 5`, `'a' <= 'a'` | `7 <= 5`, `'b' <= 'a'`       |
|     `==` | **loose eq** | True if values are equal **after coercion** | `5 == "5"`                       | `7 == 5`, `"dog" == "cat"`   |
|     `!=` | **loose ne** | True if values differ **after coercion**    | `7 != 5`                         | `7 != 7`, `5 != "5"` (false) |

- Important distinctions and notes:
    * = is assignment, not comparison.
    * a = 7 is valid; 7 = a is not.
    * Equality tests (==, ===) are symmetric: if a == 7 is true, then 7 == a is true.
    * =< and => are invalid in JS (use <= and >=).
    * String comparisons use Unicode/lexicographic order. E.g., 'b' >= 'b' is true.

## Loose Equality ==: Behavior & Pitfalls
- `==` will coerce types(强制类型转换) when operands differ. These evaluate to true:
```bash
7 == "7"
true == 1
0 == false
0 == ''
false == "0"
null == undefined
[1, 2] == "1,2"
```
- Loose inequality examples:
```bash
console.log(5 != "5");          // false (equal after coercion)
console.log(0 != false);        // false
console.log(null != undefined); // false (loosely equal)
console.log(5 != 10);           // true
console.log("hello" != "Hello");// true (case-sensitive)
```
- Non-transitive behavior (surprising):
```bash
'0' == 0   // true
0   == ''  // true
'0' == ''  // false  <-- breaks transitive intuition
// 当 两边都是字符串 时，不会发生类型转换。
```

## Strict Equality === and Strict Inequality !==
- `===` does no type coercion. If types differ, result is false:
```bash
console.log(7 === "7");  // false
console.log(0 === false);// false
console.log(0 === '');   // false
```

- `!==` is true when types differ or (same type but) values differ:
```bash
console.log(5 !== "5");        // true
console.log(0 !== false);      // true
console.log(null !== undefined);// true
console.log(5 !== 10);         // true
console.log("hello" !== "Hello");// true
```

## Logical Operators
- AND &&
- OR ||
- NOT !

## Truth Tables
| A     | B     | A && B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

## Operator Precedence
- From **highest to lowest** (subset relevant to this lesson):

    * Logical NOT: !
    * Exponentiation: **
    * Multiplication/Division/Remainder: * / %
    * Addition/Subtraction: + -
    * Comparison: <= >= > <
    * Equality: === !== == !=
    * Logical AND: &&
    * Logical OR: ||

- **Implication**: JS applies ! first, then arithmetic, then comparisons, then equality, and finally && and ||.
- **Example**:

```bash
// Arithmetic first, then comparisons, then &&
((x * 5) >= 10) && ((y - 6) <= 20)
// Parentheses aren’t required but highly recommended for readability, especially in complex expressions.
```

## Conditionals: if, else if, else
- Structure
    * Header: if ( /* boolean expression */ )
    * Body: a block { ... } executed only when the condition is true.

    ```bash
    let billHasBeenPaid = false;

    if (!billHasBeenPaid) {
    console.log("Your bill is due soon!");
    }
    ```
- Style:
    * Indent block contents.
    * Place { at end of the if line and } on its own line.
    * While single-line bodies can omit {}, it’s safer to always use braces.
    
- else: Executes when the if condition is false:
```bash
let billHasBeenPaid = true;

if (!billHasBeenPaid) {
  console.log("Your bill is due soon!");
} else {
  console.log("Your payments are up to date.");
}
```
- else if: Adds additional branches:
```bash
let x = 10;
let y = 20;

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x and y are equal");
}
```
- Rules:
    * else / else if must follow an if.
    * else if can appear multiple times and must come before the (optional) else.
    * You can have at most one else.
    * Exactly one block runs (the first whose condition is true), or none if there’s no matching condition and no else.

    ```bash
    let x = 10, y = 20;

    if (x > y) {
    console.log("x is greater than y");
    } else if (x < y) {
    console.log("x is less than y"); // stops here; later blocks skipped
    } else if (x % 5 === 0) {
    console.log("x is divisible by 5");
    } else if (x % 2 === 0) {
    console.log("x is even");
    }
    ```
## Nested Conditionals
- Defination: Use nested conditionals to enforce hierarchical decisions:
