# Important Terms

- **Terminal**  
  The interface that displays and runs a shell.  
  The window in which you access the shell.

- **Shell**  
  The program that interprets commands.  
  It allows users to interact with the operating system by entering commands.

- **Command Line**  
  The place where you type commands within the shell.

---

## Configuring Git

Use the following commands to set up Git and verify your configuration:

```bash
git config --global user.name "Your username"
git config --global user.email "youremail@example.com"
git config --global --list    # check

```

## Commands for Navigating the Filesystem
- **pwd**: Print Work Directory
- **ls**: List. Lists the files and directories in your current location.
- **cd**: Change Directory. Moves you from one directory to another.

## Creating and Removing Files and Directories
- **touch**: Creates an empty file. Include the filename and type after touch.
```bash
$ touch myfile.txt
```
- **mkdir**: Creates a new directory (folder). Include the name of the folder after mkdir.
```bash
$ mkdir myfolder
```
- **cp**: Copies a file or directory. Name the copy of the file/directory after the original name.
```bash
$ cp myfile.txt backup_myfile.txt 
## myfile.txt is being duplicated in the same directory with a new name, backup_myfile.txt. ##
$ cp myfile.txt myfolder/ 
## myfile.txt is being duplicated into the directory called my folder. When moving to a directory, include a / at the end of the directory name.##
```
- **mv**: Moves or renames a file or directory. Enter the new name after the original name.
```bash
$ mv myfile.txt newfile.txt 
## myfile.txt is being renamed to newfile.txt.##
$ mv myfile.txt myfolder/ 
## myfile.txt is being moved to the myfolder/ directory. It is not duplicated.##
```
- **rm**: Removes a file. Use rm -r to remove directories. Important warning: This will permanently remove items from the computer and cannot be undone.
```bash
$ rm newfile.txt
$ rm -r myfolder
```
---

## 💡 关键点（Markdown 写作技巧备忘）

1. **标题级别**  
   - 一级标题：`#`  
   - 二级标题：`##`  
   - 三级标题：`###`

2. **强调和列表**  
   - 粗体：`**Terminal**`  
   - 斜体：`*word*`  
   - 无序列表：`- ` 或 `* `

3. **代码块**  
   - 行内代码：用反引号包裹，如 `` `myfile.txt` ``  
   - 多行代码：三反引号加语言标注  
     ``````markdown
     ```bash
     git config --global user.name "Your username"
     ```
     ``````

4. **换行技巧**  
   - 在行尾加两个空格再回车，可强制换行。

5. **在 GitHub 上效果**  
   - 保存为 `README.md` 并提交到仓库，GitHub 会自动渲染成带大标题、粗体、语法高亮的网页，清晰又易读。
