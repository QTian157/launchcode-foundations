## Data Type Conversion
- **Type conversion**: is the process of changing a value from one data type to another.
## Explicit Type Conversion
- **Defination**: explicit type conversion (also called type casting) in JavaScript is when you, as the programmer, intentionally convert a value from one data type to another.
- **Common Ways to Perform Explicit Type Conversion**
    * Converting Data to a String
    ```bash
    // You can pass in the value itself to the String() function:
    console.log(String(123)) // '123'

    // Or, you can assign the value to a variable and pass that in:
    let num = 123;
    let str = String(num);

    console.log(str); // '123'
    console.log(typeof str); // 'string'
    ```
    Another is to use the **.toString()**  method:
    ```bash
    let num = 123;
    console.log(num.toString()); // '123'

    let bool = true;
    console.log(bool.toString()); // 'true'
    ```
    * Converting to a Number: 
        - by using the  **Number()**  function:
        ```bash
        let str = "42";
        let num = Number(str);

        console.log(num); // 42

        console.log(typeof num); // "number"
        ```
        - by using the  **parseInt()**, **parseFloat()**  function:
        ```bash
        let str = "3.14";
        let str = "3.14 meters";

        console.log(parseInt(str)); // 3 (integer)

        console.log(parseFloat(str)); // 3.14 (float)
        ```
    * Converting to a Boolean:
        - by using the  **Boolean()**  function:
        - 6  falsy values:
            ```bash
            0
            null
            undefined
            NaN
            "" // an empty string
            false
            ```
        - Everything else in JavaScript evaluates to truthy, or will evaluate to true.
            ```bah
            let num = 0;
            console.log(Boolean(num)); // false
            let text = "hello";
            console.log(Boolean(text)); // true
            ```
## Implicit Type Conversion
- **Defination**: In JavaScript, implicit type conversion, also known as type coercion, occurs when JavaScript automatically converts one data type into another during an operation. 
- **When Does Implicit Type Conversion Happen?**： Implicit conversion typically occurs during operations where different types are combined.  You can see some of the ways this can happen below.
    * STRING CONCATENATION WITH THE  +  OPERATOR
    ```bash
    let result = "The answer is: " + 42;

    console.log(result); // "The answer is: 42"
    ```
    * ARITHMETIC OPERATIONS WITH NON-NUMBERS
    ```bash
    console.log("10" - 2); // 8
    console.log("5" * "2"); // 10
    console.log(6 / "3") // 2
    ```
    * BOOLEAN CONTEXTS: When a value is used in a boolean context (e.g., in an  if  statement), JavaScript implicitly converts it to  true  or  false . Values like  0 ,  null ,  undefined ,  NaN , and  ""  (empty string) are falsy (convert to  false ), while everything else is truthy (convert to  true ).
    ``bash
    if ("hello") {
    console.log("This is truthy!"); // This will run
    }
    if (0) {
    console.log("This is falsy."); // This won't run
    }
    ```
- **Common Examples of Implicit Conversion**
    * Equality Comparison ( == ): The  ==  operator performs type coercion to compare values of different types.
    ```bash
    console.log(5 == "5"); // true
    // Here, the string  "5"  is converted to a number before the comparison.
    ```
    * Template Literals: When you use template literals, JavaScript implicitly converts non-string values into strings.
    ```bash
    let age = 25;
    console.log(`You are ${age} years old.`); // "You are 25 years old."
    ```
    * Use the strict equality operator ( === ) to avoid implicit type conversion during comparisons.