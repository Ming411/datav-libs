const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const inputPath = path.resolve(__dirname, './src/index.js');
// console.log(inputPath); // 这个文件直接直接node执行来测试
const outputUmdPath = path.resolve(__dirname, './dist/nocoder.datav.js');
const outputEsPath = path.resolve(__dirname, './dist/nocoder.datav.es.js');
module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      /**
       * umd 导出适用于直接在浏览器执行,也可以在node中使用
       * cjs 导出适用于node环境,浏览器中找不到module
       * es  导出适用于es6,在srcipt标签上需要加type="module"
       */
      format: 'umd',
      name: 'datav', // umd要求指定name
      globals: {
        vue: 'Vue' // 将 "vue" 模块映射到全局变量名 "Vue"
      }
    },
    {
      file: outputEsPath,
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  plugins: [
    resolve(), // 可以将第三方模块与我们的源码进行混合打包
    commonjs(), // 让使用cjs模式开发的包 能够使用import这种形式导入
    babel({
      exclude: 'node_modules/**' // 需要排除的文件
    }), // 将es6转为es5
    json(),
    vue(),
    postcss({
      plugins: []
    })
  ],
  external: ['vue'] // 表示这个包可以不在我们的源码内，由外部文件提供
};
