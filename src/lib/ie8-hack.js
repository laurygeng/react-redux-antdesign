import "babel-polyfill";//用浏览器的api来模仿es
import "es5-shim";//es5-sham不加载，es5-sham依赖es5-shim，做的是es5-shim无法完成的任务；es5-shim就是用现有的js来模仿一些es3不兼容的方法，把es3
import 'es5-shim/es5-sham';
// require("console-polifill");//压缩的时候把console去掉

//es3ify-loader 这个ie8兼容的插件在webpack中的设置好了；完成es3到es5的兼容；（es5转es3）
//es3ify-loader无法完成的es5转es3，就通过es5-shim + es5-sham来完成；
//babel完成了es5到es6的兼容（es6转成es5）

// 基础概念：
// shim：用浏览器支持的js模仿浏览器不支持的es5或者es6功能
// sham：对shim不能支持的功能，做降级处理
// polyfill：通过浏览器的API来拓展，使得浏览器支持es5或者es6的功能



/* ie8兼容总结 

1.引用babel-polyfill，es5-shim/es5-sham ,console-polifill
2.webpack打包用es3ify-loader和babel-loader（es6转es5，es5转es3）
3.Object.defineProperty不能用：业务中不用这个方法，引用的框架中也不能用这个方法，例如react-router-redux（react想要支持ie8，首先得在 14.7版本以下，react-router不支持ie8）
4.Babel 会把export xxx from ‘xx’ 语法转码为访问器属性设置的exports对象。 所以得分开写:
	import XXX from ".."
	export {xxx} 

babel-preset-es2015 : ES2015转码规则
babel-preset-react": react转码规则
babel-preset-stage-0: ES7不同阶段语法提案的转码规则，一共有4个，选择安装一个

babel为了兼容ie8需要开启loose模式，转化的时候能部分兼容ie8

Object.assign Object.values等不能用（除非全局引入babel-polyfill，但他太大了，压缩有就有32K）
*/

