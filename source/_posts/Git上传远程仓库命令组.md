---
title: Git上传远程仓库命令组
date: 2019-09-02 08:46:35
tags: Git
categories: Git
---

# 本地代码上传到github的远程仓库常用命令

```bash
    git init //本地仓库初始化，创建一个仓库
    git add file //将文件添加到仓库中,实际上就是把文件修改添加到暂存区
    git rm file //从仓库中删除文件，删除后需要提交
    git commit -m "description" //将文件提交更改,实际上就是把暂存区的所有内容提交到当前分支
    ("-m":输入本次提交的说面，最好是有意义的)

    git status //查看仓库当前状态
    git diff file //查看文件具体修改内容

    git log //查看提交日志，可加上--pretty=oneline参数使看起来更清晰
    git reset -hard HEAD^ //版本回退，HEAD表示当前版本，HEAD^回退到上一个版本，上上个版本即HEAD^^,
    如果回退的版本很远，例如上100个版本就用HEAD~100，也可以通过版本号来回退版本。
    git reflog //记录你的每一命令

    git checkout -- file //撤销工作区文件的修改
    git push -u origin master //把本地的内容推送到远程，实际上是把当前分支master推送到远程；
    如果是第一次推送可以加上-u参数让仓库关联起来
    git clone git@github.com:xxx/xxx.git //从远程仓库克隆一个本地仓库
```

