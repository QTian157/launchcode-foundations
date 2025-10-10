## Creating Variables
- **let**
    ```bash
    let programmingLanguage; // initialization
    programmingLanguage = "JavaScript"  // assign the variable a value

    let programmingLanguage = "JavaScript"; //  declare and initialize a variable with a single line of code
    ```
    * 块级作用域。存在 暂时性死区，不能在声明前使用。
    ```bash
    console.log(a); // error
    let a = 10;
    ```
    * can be reassigned


- **var**
    * hoisting
    ```bash
        console.log(a); // undefined
        var a = 10;
    ``` 
    * can be reassigned
- **const**
    * 块级作用域。存在 暂时性死区，不能在声明前使用。
    * 如果变量不会被重新赋值，确保数据安全。

