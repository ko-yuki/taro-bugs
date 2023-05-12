## 注：问题一在 demo 中没有复现，但是其余两个问题还是复现了，初步判断和 `mini-css-extract-plugin` 这个包有冲突



### 第一个问题：sass 编译错误

直接 `yarn dev:weapp`，查看终端和控制台报错，在目录 `src/pages/index/index.scss` 中引入了 `config.scss `就会导致问题复现



### 第二个问题：开启 webpack5

目录 `config/index` 中开启 `webpack5` ，默认设置 `prebundle: {enable: true}` ，此时会解决 `sass` 编译问题，但是会在终端提示另外一个错误；设置 `prebundle: {enable:false}` 之后，该问题解决，但是会导致字体图标引用失败



### 第三个问题：iconfont 引用失败

解决上述问题之后，在目录 `src/app.scss`中引入`iconfont.scss` 就会在终端出现 `icontfont` 文件找不到的错误
