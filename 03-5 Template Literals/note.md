## Template literals
- Template literals are enclosed by backticks (`), not single (') or double (") quotes.
They allow you to:
    * Embed variables and expressions directly inside strings.
    * Create multiline strings without using escape characters.
    * Improve code readability and maintainability.

- Review: String Concatenation: Before ES6, JavaScript developers combined strings using the + operator.
```bash
let firstName = "John";
let lastName = "Doe";
let fullName = "Hello, " + firstName + " " + lastName + "!";
console.log(fullName);
// Output: Hello, John Doe!
```

    * Problems with Concatenation:
    * **Hard to read** — too many + and spaces.
    * **Hard to format** — you must manually insert \n for new lines.
    * **Hard to embed expressions** — parentheses and operators clutter the code.

## Using Template Literals
- Template literals fix these issues elegantly.
- They use backticks (`) and the ${} syntax for embedding dynamic values.
- Example: String Interpolation
```bash
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: Hello, my name is Alice and I am 25 years old.
```

- Multiline Strings
    * Before:
    ```bash
    let message = "This is a message\n" + "that spans multiple lines\n" + "using concatenation.";
    ```

    * Now using Template Literals
    ```bash
    let message = `This is a message
    that spans multiple lines
    without needing escape characters.`;

    console.log(message);
    // Output:
    // This is a message
    // that spans multiple lines
    // without needing escape characters.
    ```

    * Combining Interpolation + Multiline
    ```bash
    let name = "Jordan";
    let items = 3;
    let total = 75.50;

    let receipt = `Dear ${name},
    Thank you for your purchase.
    You bought ${items} items for a total of $${total}.
    We hope to see you again!`;

    console.log(receipt);
    // Output:
    // Dear Jordan,
    // Thank you for your purchase.
    // You bought 3 items for a total of $75.50.
    // We hope to see you again!
    ```