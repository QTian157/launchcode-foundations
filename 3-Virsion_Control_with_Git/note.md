## git install
- **check git version** 
```bash
git -v
git --version
```
- **Configure Git
    * Set your username:
    ```bash
    git config --global user.name "Your Name"
    ```
    * Set your email: 
    ```bash
    git config --global user.name "your.email@example.com"
    ```
    * Set Default Text Editor: By default, Git uses the system's default text editor. You can configure Git to use a different editor
    ```bash
    git config --global core.editor "code --wait"  # VS COde#
    git config --global core.editor "idea --wait"  # Java IDEAL 
    ```
    * Caching Credentials: To avoid entering your username and password every time you interact with a remote repository, you can enable ```bash
    git config --global credential.helper cache
    ```
## Important Terminology
- **Version Control System**：A system that helps programmers track changes, store each version of their code, and maintain a complete history of revisions over time
- **Repository**：The storage container for a project. Also referred to as a "repo" for short.
- **Codebase**：A record of all versions of your code over time and a log of all the changes.
- **Commit**：An update to a repository

## Repositories and Commits
- **Create a Repository**： Create .git in Homework, Homework is the storage on your own computer. We can push to Github later
``` bash
mkdir homework
cd homework
git init
```
- **Making Commits**: If you’ve created a Git repository and are ready to commit, you’ll follow the standard commit process. 
    * **git status**: Provides information about the files that have been changed, including whether they are tracked or untracked.
    * **git add**: Adds specific files or all changed files to the staging area, preparing them for the commit.
    * **git commit -m "MESSAGE"**: Creates the new commit with the staged files and includes a descriptive message summarizing the changes.
    * **git log**: Displays a log of all commits in the repository, showing the history of changes.

## Branches
- **Creating a new Branch**: need a new feature, create a new branch
    * **Creating and Switching to a New Branch**
    ``` bash
    git checkout -b <branch-name>
    ```
    * **Creating a New Branch Without Switching, then switch to new branch**
    ``` bash
    git branch <branch-name>
    git checkout <branch-name>
    ```
    * **Switching to an Existing Branch**
    ```bash
    Switching to an Existing Branch
    ```
## Merging in Git
- **How to Merge**: To perform a merge, you first need to switch to the branch you want to merge changes into and then use the git merge command.
Example:
Suppose a programmer wants to merge the changes from a branch called test into  the main branch. They would follow these steps:
    * 1. Switch to the branch to be merged into:
    ```bash
    git checkout main
    ```
    * 2. Run the merge command:
    ```bash
    git merge test
    ```
## Merge Conflicts
merge conflicts can occur when changes are made to the same line of code in both branches. In this case, Git cannot determine which change to accept, and it’s up to the programmer to manually resolve the conflict.
## Ways to Avoid Merge Conflicts
- **1. Use Dry-Run Merges**: Git provides a dry-run option that simulates the merge without applying it. This allows you to check for potential conflicts before proceeding. Use:
```bash 
git merge --no-commit --no-ff <branch>
```
    * Git 会做三件事：
        - 进行一次完整的合并计算（diff + patch）。
        - 把合并结果写入工作区（Working Directory）。
        - 把修改同步到暂存区（Index / Staging Area）。
    * 但 Git 不会做的：
        - 不会在 .git 的历史记录中写一条新的 commit。
    * 如果直接不管会怎样
        - 直接关闭终端并不意味着撤销操作。
        - 下次 git commit 时，这些“半合并的改动”仍然会被提交
        - 历史记录虽然没有自动生成 merge commit，但你的代码已经“脏了”。
    * 应该怎么做：假装这次 merge 从来没有发生过，把一切还原。
        ``` bash
        git merge --abort
        ```
        - 直接丢弃工作区和暂存区中所有合并带来的更改
        - 仓库恢复到执行 merge 之前的完整状态，就像从未尝试过这次合并。
- **1. Use Dry-Run Merges - typical process**:
```bash
git merge --no-commit --no-ff feature/login   # 试合并
# 发现冲突或不满意
git merge --abort                             # 放弃并还原

# 如果觉得合并没问题，可以直接提交：
git commit    # 正式生成合并提交
```
## Remote Repositories
- **Collaborating with Colleagues**
When starting a new project with others, you often need to begin with code that someone else has already written. 
```bash
git clone <url>
```
- **Renaming the Default Branch**
    * check the default branch name: *man
```bash
git branch
```
    * rename it 
```bash
git branch -m old-branch-name main
```
- **Contributing to a Remote Repository**
```bash
git status
git add .
git commit
git push origin main
git log
```

## Git/GitHub 经验
- **体系概览**
    * Git vs GitHub：本地版本控制工具 vs 远程协作平台
    * 四个区域：工作区(Working Directory) → 暂存区(Staging Area / Index) → 本地仓库(Local Repository) → 远程仓库(Remote Repository)
    * 基本命令链：git add → git commit → git push/git pull → git merge/git rebase
- **日常修改与撤回**
    * 撤回 add
    ```bash
    git reset HEAD <file>
    git reset 
    ```
    * 改提交信息
    ```bash
    git commit --amend -m "message"
    ```
    * 撤回 commit 保留改动
    ```bash
    git reset --soft HEAD^
    ```
    * 撤回 commit 丢改动
    ```bash
    git reset --hard HEAD^
    ```
    * 撤回远程提交: push 了错误版本
    ```bash
    git reset --hard <commit> && git push --force
    ```
    * 撤销单次提交但保留历史
    ``bash
    git revert <commit>
    ```
    * 查看历史并定位
    ```bash
    git stash / git stash pop
    ```
    * git stash: 把当前工作区的改动（未提交的内容，包括已 add 和未 add 的）存到一个临时栈里，并让工作区回到干净状态。
    * git stash pop: 把抽屉里的最新一份改动取出来，重新应用到当前工作区，并且把这份 stash 从栈里删除。
    ```bash
    # 正在 branch1 上写代码，改了一半
    git stash         # 把改动存起来，工作区干净
    git switch main   # 切去 main 修 bug
    # 修完 bug -> commit -> push
    git switch branch1
    git stash pop     # 拿回之前的草稿，继续写
    ```

- **分支与合并**
    * 创建与切换：
    ```bash
    git branch dev
    git switch -c dev
    ```
    * 合并：
    ```bash
    git merge --no-commit --no-ff 
    ```
    * rebase 变基：
    ```bash
    git pull --rebase
    git rebase main
    ```
    * 删除分支：
    ```bash
    git branch -d dev
    ```
