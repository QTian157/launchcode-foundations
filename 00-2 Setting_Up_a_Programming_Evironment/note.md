## What is Node.js?

- **Node.js**: a runtime environment for executing JavaScript code. Installing Node.js also gives you access to the NPM Command Line Interface (CLI), a powerful tool for managing packages and running specialized commands in your terminal.
- **Verify the Installation**
```bash
node -v
```
- **Check the installed NPM version by running**:
```bash
npm -v
```
- **Node.js = 运行环境本体**
    * 传统 JavaScript 只能依赖浏览器来运行。
    * Node.js 自己就是一个可以直接运行 JS 的环境，不需要浏览器。
    * 你在终端输入
        ```bash
        node app.js
        ```
    * Node.js 就会直接执行 app.js 里的 JavaScript 代码。
    * 对应类比：
        - Java ➜ 安装 JRE/JVM 才能跑字节码
        - Node.js ➜ 安装 Node.js 自身就能跑 JS 文件

- **Node.js 内部的执行核心：V8 引擎**
    * Node.js 之所以能执行 JavaScript，是因为内部集成了 Google V8 引擎（和 Chrome 浏览器同源）。
    * V8 既是解释器也是即时编译器（JIT）：把 JS 源代码转成中间表示（bytecode）-> 热门代码优化成机器码 -> 直接交给 CPU 运行
    * 可以理解为 V8 = Node.js 的 JVM。

## Installing Visual Studio Code
- **Set Git Bash as the Default Terminal in VS Code**.
```bash
a. Open VS Code.
b. Go to View > Command Palette or press Ctrl+Shift+P.
c. Type Terminal: Select Default Profile and select it.
d. Choose Git Bash from the list.
e. To open a new terminal with Git Bash, go to Terminal > New Terminal.
```
- **Command Palette（命令面板**: 是 VS Code 里一个万能命令搜索和执行入口。 
    * 菜单：View → Command Palette…
    * 快捷键：
        - Ctrl + Shift + P （Windows / Linux）
        - 或 Cmd + Shift + P（macOS）

## Terminal in VS Code
- **Short cut**
```bash
Ctrl + `  ## in windows
Control + `   ## in macOS
```
- **什么是主目录(~)**
C:\Users\<your Windows username>

- **How to copy/select from Terminal in VS Code**
Shift + 鼠标左键拖动

## Setting Up Your Programming Environment
- **Create a file and save as app.js**: This will be the main file where you write and run your JavaScript code.
- **Verify that Node.js is installed:**
```bash
node -v
```
- **Writing and Running Your First Program**
```bash
console.log("Hello, World!");
```
- **Run the Program**
```bash
node app.js
```
- **Observe the output in the terminal:**
```bash
Hello, World!
```
## Understanding Console Input
In summary, when you insert the  console.log( ) function, outputs will appear in the terminal and this allows you to monitor your code.
