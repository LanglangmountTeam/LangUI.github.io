import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue' 
import scss from 'rollup-plugin-scss'
import dartSass from 'sass' 
import  terser  from '@rollup/plugin-terser' 
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './packages/index.ts', // 入口文件地址
  output: [{
    globals: {
      vue: 'Vue', // 指明global.Vue即是外部依赖vue
    },
    name: 'lang-uiss',
    file: 'dist/lib/lang-uiss.js', // 输出文件
    format: 'umd', // 使用什么样的模块化机制
    exports: 'named',
    plugins: [terser()],
  },
  {
    name: 'lang-uiss',
    file: 'dist/lib/lang-uiss.esm.js',
    format: 'es',
    plugins: [terser()]
  }
],
  plugins: [
    scss({ include: /.scss$/, sass: dartSass ,}),
    vue({
      include: /\.vue$/,
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    resolve()
  ],
  external:['vue']
}