## VSCode随笔

问题：`Delete `␍`eslint(prettier/prettier)错误`

描述：因回车符导致的 ESLint 报错`Delete ␍eslint(prettier/prettier)`

解决方案：

1. 设置 git，禁止 git 拉取代码时转换格式

   ```bash
   git config --global core.autocrlf false
   ```

2. 删除项目重新拉取

结论：项目仓库中默认是`Linux`环境下提交的代码，文件默认是以 LF 结尾的(工程化需要，统一标准)

fromData 数据手动转换，引入`qs`使用`stringify`方法进行转换，可转换为`FormData`数据格式
