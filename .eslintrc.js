/*
 * @Author: yangfeng
 * @Date: 2023-08-11 14:52:24
 * @LastEditors: yangfeng
 * @LastEditTime: 2023-08-11 15:37:43
 * @FilePath: \tool-collaboration\.eslintrc.js
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettierr'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-var': 'error' // 要求使用 let 或 const 而不是 var
  }
}
