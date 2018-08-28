# 函数式编程术语解析（1）

函数式编程，其最大魅力在于编程时的思维方式，与其他编程略有不同。更像搭积木，每一个函数都像一个积木，实现功能，就是利用已有的积木来组合，变形构建。所以，如果函数写的够精简，抽象的够好，写出的代码很有艺术。

最近，我也在研究函数式编程，所以记录下最近的一些想法。

函数式编程最重要的两个特点是`无副作用`和`高阶函数`。整理函数式编程里的一些抽象出来的函数或定义。

## arity
指函数的参数个数：
```js
const add = (a, b) = > (a + b)
var arity = add.length
console.log(arity)
// => 2
```
## 高阶函数
指接受一个或多个函数作为参数或者返回一个函数
```js
const sum = (x, y) => (z) => (x + y + z)
var num = sum(1, 2)(3)
console.log(num)
// => 6
```
## pure function (纯函数)
纯函数需要满足以下两个条件:
* 输入相同的值，得到相同的结果
* 不会改变自身作用域之外的任何数，不会产生任何副作用
```js
// bad
var a =1
const add (x) => { a + x }
add(3)
a = 3
add(5)
```
## identity
一个返回任何值的函数，在函数式编程里是很有用的
```js
const identity = a => () => a
```

## curry (柯里化)
柯里化，是把接受多个参数的函数转换成接受一个单一参数的函数，并且返回接受余下的参数的新函数，直到所有参数接收完毕返回结果：
```js
const curry = (fn, arity = fn.length) => {
	const iterCurry = (...args) => {
		if (args.length >= arity) return fn(...args)
		return iterCurry.bind(null, ...args)
	}
	return iterCurry
}

const add = (x, y, z) => (x + y + z)
const addCurry = curry(add)

addCurry(1, 2, 3)
addCurry(1, 2)(3)
addCurry(1)(2, 3)
addCurry(1)(2)(3)
// => 6
```

## partial function (偏函数)
偏函数，指固定函数的一个或多个参数，返回一个新的函数接收余下的参数:
```js
const partial = (fn, ...args) => (...moreArgs) => fn(...args, ...moreArgs)
const add = (x, y, z) => (x + y + z)
const add1 = partial(add, 1)
add1(2, 3) // => 6
add1(2, 4) // => 7
```
## predicate (谓词函数)
谓词函数，是一个判断式，返回值为bool类型
```js
const is = (type) => (item) => Object(item) instanceof type
const isNumber = is(Number)

isNumber('1') // => false
isNumber(2) // => true
```
## filter
过滤函数，需要一个谓词函数

```js
const filter = (array, predicate) => {
	var result = []
	for (var i =0; i < array.length; i++) {
		if (predicate(array[i])) {
			result.push(array[i])
		}
	}
	return result
}
const is = (type) => (item) => Object(item) instanceof type

var nums = [1, 2, '1', 0, null]
filter(nums, is(Number))
```
## compose
组合函数的功能
```js
const compose = (f, g) => (...arg) => g(f(...arg))
const filter = (array, predicate) => {
	var result = []
	for (var i =0; i < array.length; i++) {
		if (predicate(array[i])) {
			result.push(array[i])
		}
	}
	return result
}
const is = (type) => (item) => Object(item) instanceof type
const getAttribute = (attribute) => (obj) => obj[attribute]

var nums = [1, 2, '1', 0, null]
var scroces = [
	{name: '李雷', scroce: 99},
	{name: '韩梅梅', scroce: 120},
	{name: '林涛', scroce: '78'},
	{name: 'lucy', scroce: null},
	{name: 'Tom', scroce: 110},
]

console.log(filter(nums, is(Number)))
console.log(filter(scroces, compose(getAttribute('scroce'), is(Number))))
```

以上几个特性，是我暂时总结的函数式编程，之后再续其他特性
