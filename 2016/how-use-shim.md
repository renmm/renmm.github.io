# shim在项目中的正确运用

## 何为Shim

一个shim是一个库,它将一个标准API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现。

标准API指html5规范及[ECMAScript5标准][es5]([ECMAScript6][es6]已于今年6月发布)，
以一种面向所有浏览器未来的方式针对这些 API 进行开发，最终目标是：一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 shim，无需做任何额外工作

## 优雅降级

shim的编程方式非常符合优雅降级处理方案.举例来讲,针对css3 animation属性,animate-shim.css包含针对不支持的浏览器的兼容处理,animate.css包含动画样式。这样手机端也能直接引用animate.css，无需引用animate-shim.css，也不会产生代码冗余。等到未来浏览器完全支持时，直接不引就可以了

## 一个灯塔特效
	
<iframe height='227' scrolling='no' src='//codepen.io/renmm/embed/eNWXgZ/?height=227&theme-id=15494&default-tab=html' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/renmm/pen/eNWXgZ/'>eNWXgZ</a> by three (<a href='http://codepen.io/renmm'>@renmm</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
	
## 项目结构

<pre class="text">
project/
  |-- css      
  |      |--animate.css
  |      |--animate-shim.css  css优雅降级处理
  |-- js           
  |     |-- modernizr.js  
  |		`
  `-- index.html
</pre>

## 其他shim

* [html5shiv][html5shiv]:针对IE9-支持html5标签
* [es5-shim][es5-shim]:针对低版本不支持ECMAScript5规范中的API的实现
* 后续的我会持续更新..

[es5]:http://yanhaijing.com/es5/
[es6]:http://es6.ruanyifeng.com/
[html5shiv]:https://github.com/aFarkas/html5shiv
[es5-shim]:https://www.npmjs.com/package/es5-shim
