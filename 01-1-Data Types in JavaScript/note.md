## Primitive & Complex Data Types
- **Primitive Data Types**
    * String
    * Number
    * Boolean: true, false
    * Null: Represents an intentional absence of any value
    ```bash
    let car = null; // 明确表示 car 现在没有值
    ```
    * Undefined: Represents the absence of a value that has not been assigned
    ```bash
    let x;
    console.log(x); // undefined
    ```
    * BigInt: Represents large integers beyond the range of the Number type
    ```bash
    let big = 123456789012345678901234567890n; // 末尾必须加 n
    let anotherBig = BigInt("9007199254740993");

    console.log(9007199254740993); // 9007199254740992 ❌ 精度丢失
    console.log(9007199254740993n); // 9007199254740993 ✅ 正确
    ```
    * Symbol: Represents a unique, immutable identifier; 创建一个唯一且不可变的值，常用于对象属性的唯一键。
    ```bash
    let id1 = Symbol("id");
    let id2 = Symbol("id");
    console.log(id1 === id2); // false，因为每个 Symbol 都是独一无二的
    ```
- **Complex Data Types**: can store collections of data or more complex entities.
    * Object: A collection of key-value pairs that can represent more complex, structured data
    ```bash
    let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "cycling"]
    };

    // 访问属性
    console.log(person.name);       // Alice
    console.log(person["age"]);     // 30

    // 修改属性
    person.age = 31;
    person.city = "New York";       // 动态新增
    ```
    * Array: A special kind of object that stores an ordered list of values
    ```bash
    // 一个水果列表
    let fruits = ["apple", "banana", "cherry"];

    // 访问元素
    console.log(fruits[0]); // apple
    console.log(fruits[2]); // cherry

    // 添加和删除
    fruits.push("mango");   // 末尾添加
    fruits.pop();           // 删除末尾元素
    ```
## Primitive Data Types - Strings
- **How Strings Work**
```bash
'Hello, world!';
```
- **What Can you do with Strings?**
    * Concatenation: Joining two or more strings together using the  +  operator or template literals.
    ```bash
    let firstName = 'John';
    let lastName = 'Doe';
    let fullName = firstName + ' ' + lastName; // "John Doe"
    ```
    * Finding Length: Use the  .length  property to find out how many characters are in a string.
    ```bash
    let text = 'Hello!';
    console.log(text.length); // 6
    ```
    * Accessing Characters: Strings are indexed, meaning each character has a position starting at index 0.
    ```bash
    let greeting = 'Hello';
    console.log(greeting[0]); // "H"
    console.log(greeting[4]); // "o"
    ```
    * String Methods: JavaScript includes many built-in methods to work with strings:
    ```bash
    // .toUpperCase() to make the string uppercase:
    let lowerCase = 'hello';
    console.log(lowerCase.toUpperCase()); // "HELLO"
    // Of course, there is also a .toLowerCase() to make a string lowercase
    ```
## Primitive Data Types - Number
- **Integer**
- **Floating-Point Numbers:**
- **Special Value Numbers**: The values below are categorized as Numbers in JavaScript, even though they do not necessarily represent an integer or floating-point number:
    * Infinity: Represents numbers that are too large to handle.
    ```bash
    console.log(1 / 0); // Infinity
    ```
    * -Infinity: Represents numbers that are too small (negative) to handle.
    ```bash
    console.log(-1 / 0); // -Infinity
    ```
    * NaN (Not a number): A result of an invalid mathematical operation.
    ```bash
    console.log("hello" * 2); // NaN
    ```
- **What Can you Do with Numbers?**
    * Basic Arithmetic:
    ```bash
    // Addition (+):
    let sum = 10 + 5; // 15
    // Subtraction (-):
    let difference = 10 - 5; // 5
    // Multiplication (*):
    let product = 10 * 5; // 50
    // Division (/):
    let quotient = 10 / 2; // 5
    ```
    * Advanced Math Operations: Use JavaScript’s built-in Math object for tasks like finding square roots or generating random numbers:
    ```bash
    console.log(Math.sqrt(16)); // 4
    console.log(Math.random()); // Random number between 0 and 1
    ```
    * Comparisons: Numbers are often used in conditions to make decisions.
    ```bash
    let score = 85;

    if (score > 50) {
    console.log("You passed!");
    }
    ```
    * Incrementing and Decrementing: Numbers can be increased or decreased easily:
    ```bash
    let count = 0;
    count++; // Increment by 1
    count--; // Decrement by 1
    ```
    * Using Modulus to Check Even or Odd Numbers: %
    ```bash
    // Modulus (%): Remainder of division.
    let remainder = 10 % 3; // 1
    ```
## Primitive Data Types - Boolean
- **How Booleans Work**
    ```bash
    let isRaining = true;
    let isSunny = false;
    ```
- **What Can you Do with Booleans?**
    ```bash
    if (isRaining) {
    console.log("Take an umbrella!");
    } else {
    console.log("Enjoy the sunshine!");
    }

    let age = 18;
    console.log(age >= 18); // true
    ```

## Primitive Data Types - Null
- **How Booleans Work**
    ```bash
    let userSelection = null;
    ```
- **What Can you Do with Booleans?**
    ```bash
    let activeUser = { name: "Alice" };
    // Later, if the user logs out:
    activeUser = null; // activeUser now intentionally has no value
    ```

## Primitive Data Types - Undefined
- **How Booleans Work**
    ```bash
    let score;
    console.log(score); // undefined
    ```
- **What Can you Do with Booleans?**
    ```bash
    let user;
    console.log(user); // undefined

    let person = {};
    console.log(person.age); // undefined
    ```

## Primitive Data Types - BigInt
- **How Booleans Work**
    ```bash
    let largeNumber = 1234567890123456789012345s67890n;
    let anotherBigInt = BigInt("987654321098765432109876543210");
    ```
- **What Can you Do with Booleans?**
    ```bash
    let big = 100000000000000000n;
    let bigger = big + 1n;
    console.log(bigger); // 100000000000000001n
    ```
- **Why is BigInt Important?**: BigInt lets you accurately represent and manipulate very large integers without losing precision. 

## Primitive Data Types - Symbol: 
- **Symbol**: A Symbol is a unique and immutable value that can be used as an identifier for object properties. 
- **How Booleans Work**
    ```bash
    let id = Symbol("id");
    let anotherId = Symbol("id");
    console.log(id === anotherId); // false (they are unique)
    ```
- **What Can you Do with Booleans?**
    ```bash
    let uniqueKey = Symbol("key");
    let user = {
    [uniqueKey]: "secretValue"
    };
    ```
- **Why is BigInt Important?**: Symbols help you avoid property name collisions and create hidden object properties that can’t be accessed with standard object methods. They are useful for defining internal object details that should remain unique and hidden, supporting safer and more maintainable code.

## Complex Data Types - Object
- **Object**: An object in JavaScript is a data type that allows you to store collections of data and more complex entities. 
- **How Booleans Work**
    ```bash
    let person = { firstName: 'Alice', age: 25, isStudent: true };

    let person = {
    firstName: 'Alice',
    age: 25,
    isStudent: true
    };
    ```
- **What Can you Do with Booleans?**
    * Access properties: Use dot notation or bracket notation to read or change a value.
    ```bash
    console.log(person['name']); // "Bob"
    // or
    console.log(person.name); // "Bob"

    person.age = 31;  // Update the age
    ```
    * Add new properties:
    ```bash
    person.job = 'Developer';
    ```
    * Delete properties:
    ```bash
    delete person.isStudent;
    ```
    * Methods on Objects: Objects can also hold functions as values, known as methods. For example:
    ```bash
    let car = {
    make: 'Toyota',
    model: 'Corolla',
    start: function() {
            console.log('Engine started');
    }
    };

    car.start(); // "Engine started"
    ```
## Complex Data Types - Array
- **Object**: An array in JavaScript is a special kind of object designed for storing and organizing ordered lists of data. Unlike objects with named keys, arrays use numeric indexes to store and access values, making them perfect for tasks like managing lists, collections, and ordered sets of information.
- **How Booleans Work**
    ```bash
    let colors = ['red', 'green', 'blue'];
    let mixedArray = ['hello', 42, true]; // Mixed data types:
    let tasks = []; // An empty array to fill later:
    ```
- **What Can you Do with Booleans?**
    * Access values by index:
    ```bash
    console.log(colors[0]); // "red"
    ```
    * Modify values:
    ```bash
    colors[1] = 'yellow'; // Change "green" to "yellow"
    ```
    * Add items:
    ```bash
    colors.push('purple'); // Add "purple" to the end
    ```
    * Remove items:
    ```bash
    colors.pop(); // Removes the last item ("purple")
    ```
    * Array Methods:
    ```bash
    // .length gives the number of elements
    console.log(fruits.length); // 3
    // .indexOf() finds the index of a value
    console.log(fruits.indexOf('banana')); // 1
    // .slice() creates a new array from a subset
    let citrus = fruits.slice(1, 3); // ["banana", "cherry"]
    ```
## Identifying Data Types with the typeof Operator
- **How typeof Works**
```bash
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (a known JavaScript quirk!)
console.log(typeof {});         // "object"
console.log(typeof []);         // "object" (arrays are a type of object)
console.log(typeof function(){}); // "function"
```
- **Using typeof with Variables**
```bash
let data = "Bootcamp";

console.log(typeof data); // "string"

data =100;
console.log(typeof data); // "number"

data = true;
console.log(typeof data); // "boolean"
```