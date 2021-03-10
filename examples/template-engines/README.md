## 将模板引擎用于 Express
模板引擎可以使你在应用中能够使用静态模板文件。在运行时，模板引擎用真实的值替换掉模板文件中变量，并且把模板文件转为 HTML 文件发送到客户端。这种方法使得设计 HTML 页面更容易。
Express 中受欢迎的模板引擎有 Pug、Mustache 和 EJs。

在 Express 可以呈现模板文件之前，必须设置以下应用程序设置：

- views：模板文件所在目录。例如：`app.set('views', './views')`。默认的是应用根目录中的  views 文件夹。
- view engine：要使用的模板引擎。例如：`app.set('view engine', 'pug')`

然后安装对应的引擎 npm 包：
```bash
npm install pug -S
```

安装完模板引擎 npm 包后，不必在应用程序中显性加载模板引擎模块，Express 会在内部加载模块。
```javascript
app.set('view engine', 'pug')
```
然后在`views`文件夹下创建一个 Pug 模板文件 `index.pug`，内容如下：
```pug
html
  head
    title= title
  body
    h1= message
```
接下来创建一个路由渲染`index.pug`文件。
```javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
```