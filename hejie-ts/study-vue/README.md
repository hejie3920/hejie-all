# vue-test-ts

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 学习

yarn add -D ts-node typescript
yarn tsc -init 生成 tsconfig.json 文件
yarn add tslint -D
yarn tslint --inti 生成 tslint.json

yarn add husky -D 添加哈士奇工具，用来每次提交的时候去检查 tslint 规则

```
package.json文件
"devDependencies": {
  "vue-template-compiler": "^2.5.21"
},
"husky": {
  "hooks": {
    "pre-commit": "yarn tslint -c tslint.json './**/*.ts'"
  }
}
```
