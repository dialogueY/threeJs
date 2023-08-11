/*
 * @Author: yangfeng
 * @Date: 2023-08-11 14:52:24
 * @LastEditors: yangfeng
 * @LastEditTime: 2023-08-11 14:54:46
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
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {}
}
