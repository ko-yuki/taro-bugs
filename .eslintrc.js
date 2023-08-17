module.exports = {
  'extends': ['taro/react'],
  'rules': {
       // jsx可以适用 "" || ''   
      'jsx-quotes': 0,
       // 允许commonjs风格
      'import/no-commonjs': 0,
       // 导入模块时允许绝对路径在前
      'import/first': [0, 'absolute-first'],
       // ts可以使用 ECMA导入模块
      "@typescript-eslint/no-shadow": 0
  }
}
