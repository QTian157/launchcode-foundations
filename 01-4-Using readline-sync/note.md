## What's readline
- **Node.js 内置的 readline 模块**: 可以用来在命令行里逐行读取输入和输出。
```bash
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (answer) => {
  console.log("Hello, " + answer + "!");
  rl.close();
});
```
- **异步回调(asynchronous callback)**：它要等 某个事件发生之后（比如用户输入、定时器结束、数据请求完成）再执行。
    ```bash
    console.log("Start");

    setTimeout(() => {
    console.log("This runs later...");
    }, 2000);

    console.log("End");
    ```
    ```bash
    Start
    End
    This runs later...
    ```
    * 箭头函数(arrow function): (parameter) => {function}
        - ()：函数的参数（可以有 0 个、1 个或多个）。
        - =>：表示“这是一个函数”。
        - { ... }：函数体，写要执行的代码。
## What's readline-sync
- **同步回调**
```bash
const readline = require('readline-sync');

let name = readline.question("What is your name? ");
console.log("Hello, " + name + "!");
```
- **process a project**
    * create a folder like project_1
    ```bash
    mkdir my-first-project
    cd my-first-project
    ```
    * innitial npm(create package.json file): this is nesecarry since readline-sync needs to have dependency on package.json
    ```bash
    npm init -y
    ```
    * install readline-sync under project_1 this folder
    ```bash
    npm install readline-sync
    ```
    * create js file practic.js and have code in
    ```bash
    const readline = require('readline-sync');

    let name = readline.question("What is your name? ");
    console.log("Hello, " + name + "!");
    ```
    * run practice.js
    ```bash
    node practice.js
    ```