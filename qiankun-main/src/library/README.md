# library 跨项目、团队公共资源库

这是一个为多个项目及团队提供公共资源支持的仓库。

> 注意

1. 放入此处的文件是否满足提供多项目使用的条件

2. 此项目的文件改动必须向上兼容，不允许再未经讨论的情况下进行大的重构

3. 提交项目代码时正常提交即可，但是需要手动将此目录推送至公共资源仓库

> 提交公共资源子仓库时，在项目根路径执行以下命令

1. 完整命令版

```
  git subtree add --prefix=src/library git@**.***.1.***:****.FE/library.git master --squash

  git subtree pull --prefix=src/library git@**.***.1.***:****.FE/library.git master --squash

  git subtree push --prefix=src/library git@**.***.1.***:****.FE/library.git master
```

2. 简化命令版

> 先将子仓库地址添加为 remote：

```
  git remote add -f library git@**.***.1.***:****.FE/library.git
```

> 此后再提交即可使用以下精简命令

```
  git subtree add --prefix=src/library library master --squash

  git subtree pull --prefix=src/library library master --squash

  git subtree push --prefix=src/library library master
```

3.  测试提交
