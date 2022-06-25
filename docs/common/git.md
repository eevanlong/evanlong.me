---
title: Git初识
---

# Git

## 一、定义身份标识（全局）

```bash
#输入一次为设置，输入二次为修改
git config --global user.name "Evan Long"
git config --global user.email "*****@qq.com"

#以下为查询操作
git config --global user.name
git config --global user.email
```

## 二、基本命令

```bash
git init  #初始化本地仓库，同时自动创建.git隐藏目录记录变更版本信息

git status #查看当前仓库的状态

git add 文件名/文件路径  #将文件添加到跟踪列表（暂存区）

git add -A/--all/.  #将未跟踪的文件都添加到跟踪列表（暂存区）

git commit -m '这是一个提交消息'  #将跟踪列表中的所有文件提交到本地仓库 （一定要加提交消息，否则报错）

git log #查看之前提交到本地仓库的所有版本的日志（查看不到回退之后的版本）

git log --author='123木头人' #查看123木头人的提交日志

git log -p 文件路径 #查看该文件的提交日志

git log --oneline #查看简单的提交日志

git log --oneline --graph #查看版本路线

git reflog #查看所有操作的日志

git reset --hard 版本ID/版本ID前7位 #退回到此版本（可以查看回退之后的版本）

git reset --hard HEAD^^ #退回两个版本（一个尖括号代表一个版本）

git rm 文件名 #删除文件

git vm 之前的文件名 之后的文件名 #重命名仓库文件

git vm 需要移动文件名 移动之后的相对路径 #移动文件

git vm 需要移动文件名 移动之后的相对路径/移动之后的名称 #移动文件并且重命名

git checkout -- 文件路径 #回到上次代码状态

git reset HEAD -- 文件路径 #撤销上次代码提交
```

::: tip
总结：文件如果`提交之后又再次被修改`了，需要`重新添加、提交`至本地仓库才能`push`代码
:::

## 三、忽略文件

操作步骤：

- `touch .gitignore` // 创建文件名为.gitignore 的文件
- 使用文本编辑器编辑里面填写文件名即可实现屏蔽（一行一个文件名）

注意：

- 使用 windows 无法创建，因为 windows 对此进行了命名格式的限制
- `.gitignore`文件必须在项目的根目录下才能生效
- 使用`#`在`.gitignore`文件中添加注释

## 四、推送至远程仓库

```bash
git remote add 仓库别名（一般为origin） 远程仓库地址 #添加远程仓库地址

git remote -v #查看远程仓库信息（fetch为拿，push为推）

git remote rm 仓库别名 #删除远程仓库信息（fetch为拿，push为推）

git push 之前定义的仓库别名 之前定义的仓库别名/分支名称（一般默认为master）#本地仓库推送到该分支的远程仓库

git pull 之前定义的仓库别名 分支名称（一般默认为master） #该分支的远程仓库拉取到本地仓库

git clone 远程仓库地址 #将远程仓库的项目克隆至本地
```

## 五、操作标签

```bash
git tag v1.0 #创建标签（默认给最新的commit代码创建一个标签）

git tag #查看已创建的标签

git tag v0.5 commit的ID #给指定commit代码创建一个标签

git tag -d v0.5 #删除指定的标签名

git push 之前定义的仓库别名 v1.0 #推送标签到远程仓库
```

## 五、操作分支

```bash
git branch v1.0.0 #创建名为v1.0.0的分支

git branch #查看当前的分支

git checkout v1.0.0 #切换到v1.0.0的分支

git push 之前定义的仓库别名 v1.0.0  #本地仓库推送到该分支的远程仓库

git merge 分支名 #合并分支（需要切换到主分支再进行合并）

git merge --abort #忽略其他分支的内容，保留原分支的内容

git push origin --delete 分支名 #删除当前分支

git checkout dev check #合并分支dev下的目录check
```

### 本地仓库与远端仓库内容不一致时执行以下操作

```bash
git pull --rebase 仓库别名（一般为origin） 分支名称（一般默认为master）
```
