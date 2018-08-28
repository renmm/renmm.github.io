# gitbook写doc

## gitbook介绍
> GitBook is a command line tool (and Node.js library) for building beautiful books using GitHub/Git and Markdown (or AsciiDoc). .

这是官方定义，简单来说，gitbook就是采用markdown语法编写book(或文档),可发布在github上.

## 推荐安装方式
采用npm安装gitbook-cli，由gitbook-cli根据book.json里的version配置来安装不同版本的gitbook,默认是安装最新版本的gitbook.
```js
$ npm install --save gitbook-cli
```

## 常用命令

### 创建book
gitbook提供了一个默认的模板，作为初始化项目
```js
gitbook init
```

### 启动
本地启动一个server
```js
gitbook server
```

### 构建
构建静态资源
```js
gitbook build
```

## book.json配置

gitbook提供了gitbook.json来配置book
```
.
├── book.json
└── docs/
    ├── README.md
    └── SUMMARY.md
```
如果想类似上面一样，在docs里写文档,需要在`book.json`里：
```
{
    "root": "./docs"
}
```

更多的，详细配置请看[gitbook配置](https://toolchain.gitbook.com/config.html)

## 插件
查看gitbook插件（两种方式）：
1，进入[npm官网](https://www.npmjs.com/),搜索`gitbook-plugin-`
2, 进入[gitbook插件官网](https://plugins.gitbook.com/)

## 脚手架
鉴于自己常用gitbook编写doc,所以自己上周弄了一个gitbook-doc的脚手架，基于`yo`。[generator-gitbook-doc](https://www.npmjs.com/package/generator-gitbook-doc)

特点:
* 包含了gitbook的常用命令，统一放在package.json的`scripts`里
* 3个gitbook插件:（etoc）自动生成页内目录，（github）github右上角显示,(back-to-top-button)滚到顶部
* 一个脚本，发布到github上的gh-pages分支
* 评论插件（`disqus`和`多说`）

> 浏览了下gitbook的插件，发现大多数插件都没啥鸟用，就暂时集成了以上几种插件，方便自己使用。

