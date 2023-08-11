/*
 * @Author: yangfeng
 * @Date: 2023-08-11 16:02:45
 * @LastEditors: yangfeng
 * @LastEditTime: 2023-08-11 17:14:07
 * @FilePath: \tool-collaboration\.eslintrc.js
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }] // 不允许多个空行
  }
}
