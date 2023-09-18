import {a, b, random} from './demo';
import data from './cjs';
import pkg from '../package.json';
// 只需要我们遵顼按需导出导入，rollup就会自动进行tree-shaking
console.log('hello rollup!', random(), data, pkg);

export default {};
