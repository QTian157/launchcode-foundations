// Select Implicit Type Conversion in Arithmetic Operations

// 1. String + Number → String Concatenation
let value = "2" + 2;
console.log(value);        // "22"
console.log(typeof value); // "string"

// Expanation:
// The + operator can perform cantenation, not add

// 2. String - Number → Numeric Subtraction
let price = "3" - 2;
console.log(price);        // 1
console.log(typeof value); // "number"
// Expanation:
// The - operator can perform number subtraction, not cancatenation

// 3: Boolean + Number → Numeric addition
let a = true + 2; // 1 + 2
console.log(a);        // 3
console.log(typeof a); // "number"
// Expanation:
// a boolean is used in an arithmetic operation that true to 1 and false to 0
// I was superised that true or false can used with arithmetic operation. Especially in addition which is not catenation. 