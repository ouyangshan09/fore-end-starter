该项目是快速启动引导,  参考自 [Create React App](https://github.com/facebookincubator/create-react-app).

目录结构
```
my-app/
  README.md
  node_modules/
  package.json
  public/
  src/
```

* `public/index.html`是一个项目模板
* `src/index.tsx`是一个项目启动入口

以上2点文件不能擅自改动，其它文件可以重命名

所有项目源码，例如，业务逻辑，抽象组件，工具类，UI，必须在`src`文件夹下创建，webpack只会处理`src`文件夹下的代码。 <br>
`src` 以外的文件不会处理。

在`public`文件夹下的内容，只能在`public/index.html`中使用。<br>

可以创建更多的顶级目录，它们不会包含在产品的构建中，可以测试，文档，部署脚本等工作。

## 可运行脚本

在项目的目录中，你可以运行:

### `npm start`
在开发环境下运行项目App。<br>
打开浏览器中输入地址 [http://localhost:3000](http://localhost:3000)

你可以项目中编辑代码，并保存，项目会自动编译并刷新页面。<br>
可以通过控制台查看项目`console.log`输出。

### `npm test`
它会找到项目目录下`test`文件夹，并运行所有测试文件，测试文件后缀 `xxx.test.ts`，等待测试结果

### `npm run build`
在生产环境下编辑项目输出可执行代码到`dist`文件夹。<br>
webpack会自动优化最佳性能.

你的app可以部署到其它服务器上
