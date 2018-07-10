# 前端项目启动器(包含多语言)

- javascript (js-starter分支)
- typescript (ts-starter分支)
- react + js
- react + ts (reactts-starter分支)
- vue + js
- vue + ts

## 快速开始

#### 1、项目安装
- 执行 `npm install` 命令

#### 2、开发时调试
- 执行 `npm start` 命令

#### 3、测试
- 执行 `npm run test` 命令

#### 4、项目构建
- 执行 `npm run build` 命令

#### 5、执行代码检查 (未添加)
- 执行 `npm run lint` 命令即可

#### 6、执行代码修复 (未添加)
- 执行 `npm run lint:fix` 命令即可
> 该修复只能修复对代码没影响的问题，有些需要手动修复

#### 7、清理 dist 文件夹
- 执行 `npm run clean` 命令

#### 8、清理 dll 文件夹
- 执行 `npm run clean:lib`

#### 9、预编译vendors库
- 执行 `npm run dll` 命令

## 项目介绍

### 目录结构

```
react                   react项目根目录
  ├─__jest__
  ├─__mocks__
  ├─config              配置目录
  ├─dist                生产目录
  ├─lib                 第三方依赖库
  ├─node_modules
  ├─scripts             执行脚本目录
  ├─src                 开发目录
  │   ├─actions
  │   ├─components
  |   ├─constant
  │   ├─public          公共全局资源目录
  │   ├─reducers
  |   ├─saga
  |   ├─store
  │   ├─utils
  |   ├─tools
  │   ├─routes          视图目录
  │   ├─index.html
  │   ├─index.tsx
  |   ├─index.scss
  |   ├─prolyfill.ts    兼容垫片
  ├─.babelrc            babel配置文件
  ├─.eslintignore       eslint忽略配置文件
  ├─.eslintrc.js        eslint配置文件
  ├─.gitignore          文件忽略配置
  ├─.gitlab-ci.yml      gitlab持续集成配置
  ├─.npmrc              npm配置
  ├─.stylelintignore    stylelint忽略配置
  ├─.stylelintrc        stylelint配置
  ├─.jest.config.ts     jset工具测试配置
  ├─.dockerignore       docker忽略配置文件
  ├─.DockerFile         docker配置文件
  ├─docker-compose.yml  docker多容器配置文件
  ├─CHANGELOG           版本变更日志
  ├─CONTRIBUTING.md     git提交规范
  ├─package.json        开发依赖和脚本配置
  ├─tsconfig.json       typescript配置
  ├─postcss.config.js   postcss配置文件
  ├─README.md           项目说明和规范
```

### 具备特征
- typescript
- react
- redux
- redux-saga
- jest
- hot-replace
- docker

### 待添加
- reselect
- ……

## 后端
Node.js - typescript
MySQL
Nginx

## 域名购买
Cenarius.cn 塞纳留斯
Archimonde.cn 阿克蒙德 
Nefarian.cn 奈法利安
antonidas.cn 安东尼达斯
 
