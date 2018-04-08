<template>
    <div class="testImport">
        Hi test import....
    </div>
</template>
<script>
//require,import 的路径,沿着目录找？
//import 是引用，require 是副本?继续钻研
//exports 这个对象默认指向 module.exports  ,修改exports = {}是没有意义的
//http://es6.ruanyifeng.com/#docs/module
//注意，import命令具有提升效果，会提升到整个模块的头部，首先执行,
//而且import编译时确定.不能使用变量
//import()是异步的

//CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
//CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
import { a, b, c } from '../../util/testExport.js';
//导入所有的
import Test from '../../util/testExport.js';
import * as All from '../../util/testExport.js';
//仅仅导入default
const testRequire = require('../../' + 'util' + '/testExport.js');
console.log('a,b,c', a, b, c);
console.log('All', All);
console.log('All.default', All.default);
console.log('Test', Test);
console.log('testRequire', testRequire);
export default {
    data() {
        return {
            show: true
        };
    }
};
</script>
<style lang="less" scoped>
@import '../../assets/css/index';
.testImport {
}
</style>
