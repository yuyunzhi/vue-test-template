module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': process.env.VUE_APP_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.VUE_APP_ENV === 'production' ? 'error' : 'off',
    'camelcase': 'off',
    'no-tabs': 'off',
    // function的长度
    "max-lines-per-function":[
      "error",
      {
        "max":30,
        "skipBlankLines": true,
        "skipComments": true,
        "IIFEs": true
      }
    ],
    // 禁止三目运算嵌套三目运算
    "no-nested-ternary": "error",
    // 有多少层if else嵌套
    "max-depth": ["error", 3],
    "max-lines":  ["error", {"max": 800,  "skipBlankLines": true, "skipComments": true}],
    // 单行代码的长度
    "max-len": [
      "error",
      {
        code: 250,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    // 禁止在条件中使用常量表达式 if(true),if(1)
    "no-constant-condition": 2,
    "no-unused-expressions": [0, { "allowTaggedTemplates": true }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
