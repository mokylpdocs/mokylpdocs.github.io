---
title: git 指令
icon: chart-line
order: 1
---

# git 常用命令

## 克隆项目地址
```sh
git clone  https://github.com/frappe/erpnext.git
```

## 查看当前git 仓库状态
```sh
git status 
```
## 把变更的文档打上标记
```sh
git add *
```

## 提交变更到本地仓库
```sh
git commit -m "说明性文字"
```

## 推送到远程
```sh
git pull
# 推送之前先拉取代码 保持最新 没有冲突就执行下面的命令否则要执行合并操作
git push
```