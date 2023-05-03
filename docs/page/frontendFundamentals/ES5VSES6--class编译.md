>[success] # 使用babel 编译es6 class 写法变成es5
[babeljs](https://www.babeljs.cn/repl#?browsers=defaults&build=&builtIns=entry&corejs=3.21&spec=false&loose=false&code_lz=FAYwNghgzlAECCBvYBIAdhAtgU1gXlgEZhZSBzbAFwDktsAKASmRRQCcqBXNtWSgCwCWUAHQYcJUgF9gM0AHs0USrAj5YabAHcETIA&debug=false&forceAllTransforms=true&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3&prettier=false&targets=Electron-1&version=7.18.13&externalPlugins=&assumptions=%7B%7D)
* 编译前
~~~
class A{
	name = 1
   getName(){
		return this.name
   }
}

const a = new A()
~~~
* 编译后
~~~
'use strict'

// 判读当前 是通过new 创建的而不是 方法直接调用
function _classCallCheck(instance, Constructor) {
	// 当前创建实例必须是通过Constructor 这个构造函数创建的
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function')
	}
}

// 方法绑定
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i]
		descriptor.enumerable = descriptor.enumerable || false
		descriptor.configurable = true
		if ('value' in descriptor) descriptor.writable = true
		Object.defineProperty(target, descriptor.key, descriptor)
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	// 如果是实例方法 就绑定在原型链上
	if (protoProps) _defineProperties(Constructor.prototype, protoProps)

	// 如果是静态方法 就绑定在构造函数上
	if (staticProps) _defineProperties(Constructor, staticProps)
	
	// 原型链方法不可以写的
	Object.defineProperty(Constructor, 'prototype', { writable: false })
	return Constructor
}

// 给当前属性赋值
function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		})
	} else {
		obj[key] = value
	}
	return obj
}

var A = /*#__PURE__*/ (function () {
	function A() {
		/**
		 *  当执行 var a = new A(); 时候此时this 指向是对象本身
		 *  对象 是通过构造函数 A 创建的，因此instance instanceof Constructor 为true
		 *  这里是为了满足class 创建的类只能通过new 创建 不能当方法调用来判断 方法的this 指向windows
		 */
		_classCallCheck(this, A)

		// 给当前属性赋值
		_defineProperty(this, 'name', 1)
	}

	_createClass(A, [
		{
			key: 'getName',
			value: function getName() {
				return this.name
			},
		},
	])

	return A
})()

new A()

~~~
* 增加继承前
~~~

class A{
	name = 1
   getName(){
		return this.name
   }
}

class B extends A{
	
  constructor(name){
    super()
    this.name = name
  }
}
~~~
* 增加继承后
~~~


// 子类原型链继承
function _inherits(subClass, superClass) {
	// 判读继承的父类是不是一个function 或者是 null
	if (typeof superClass !== 'function' && superClass !== null) {
		throw new TypeError(
			'Super expression must either be null or a function'
		)
	}
	// 子类原型链指向父类原型
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		// 将构造函数改为子类
		constructor: { value: subClass, writable: true, configurable: true },
	})

	Object.defineProperty(subClass, 'prototype', { writable: false })
	// 让子类获取父类的 类方法
	if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
	_setPrototypeOf = Object.setPrototypeOf
		? Object.setPrototypeOf.bind()
		: function _setPrototypeOf(o, p) {
				o.__proto__ = p
				return o
		  }
	return _setPrototypeOf(o, p)
}

function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf
		? Object.getPrototypeOf.bind()
		: function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o)
		  }
	return _getPrototypeOf(o)
}

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
		return call
	} else if (call !== void 0) {
		throw new TypeError(
			'Derived constructors may only return object or undefined'
		)
	}
	return _assertThisInitialized(self)
}

function _createSuper(Derived) {
	var hasNativeReflectConstruct = _isNativeReflectConstruct()
	return function _createSuperInternal() {
		// 获取子类的隐式原型
		var Super = _getPrototypeOf(Derived),
			result

		// _setPrototypeOf 时候已经将父类构造函数全部绑定在子类隐式原型上
		// 因此Super 此时就是 父类构造函数
		if (hasNativeReflectConstruct) {
			var NewTarget = _getPrototypeOf(this).constructor
			result = Reflect.construct(Super, arguments, NewTarget)
		} else {
			result = Super.apply(this, arguments)
		}
		return _possibleConstructorReturn(this, result)
	}
}

var A = /*#__PURE__*/ (function () {
	function A() {
		_classCallCheck(this, A)

		_defineProperty(this, 'name', 1)
	}

	_createClass(A, [
		{
			key: 'getName',
			value: function getName() {
				return this.name
			},
		},
	])

	return A
})()

var B = /*#__PURE__*/ (function (_A) {
	// 父子继承
	_inherits(B, _A)

	// 获取super
	var _super = _createSuper(B)

	function B(name) {
		var _this
       // 判读当前 是通过new 创建的而不是 方法直接调用
		_classCallCheck(this, B)

		_this = _super.call(this)
		_this.name = name11
		return _this
	}

	return _createClass(B)
})(A)

~~~