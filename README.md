# 文档记录
  - 开发设置代理
  
    在src目录下新建proxySetup.js文件
    
    ```js
    // https://www.cnblogs.com/echolun/p/15173956.html

    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
      app.use(
        createProxyMiddleware(
          '/api', 
          {
            target: 'http://176.113.69.25:6208',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
              "^/api": ""
            }
          }
        )
      )
    }

    ```

  - 构建生产包并本地预览

    ```css
    npm run build
    # 完成后，本地会有一个build目录，就是构建结果
    npm i serve -g
    serve -s build
    # 成功后，会在控制台打印服务的地址，端口，访问即可
    ```

  - 国际化管理

    国际化管理使用了react-i18next、i18next这两个库，`前者是在后者的基础上进行扩展，所以遇到配置上的问题优先找i18next的文档`

    添加依赖

    ```js
    npm install react-i18next i18next --save
    // 在入口
    import { initReactI18next } from "react-i18next";
    const resources = {
      zh: {
        // translation是官方的写法，里面才是国际化的对象
        translation: {
          "aaa": 123,
          "obj": {
            "aaa": 456
          }
        }
      },
      // 其他语言...
    }
    i18n.use(initReactI18next)
      .init({
        resources,
        // 从本地缓存取语言头
        lng: getLanguage(),
        fallbackLng: "en"
      })
    ```

    切换语言

    ```js
    import { useTranslation } from "react-i18next";
    // 在组件里面
    function Home() {
      const { t, i18n } = useTranslation()

      const onCheckoutLanguage = () => {
        i18n.changeLanguage('en')
      }

      return (
        <div className='home-page-test'>
        <div onClick={onCheckoutLanguage}>{t('checkoutLanguage')}</div>
        </div>
      )
    }

    ```

    基本使用，参数传递

    ```js
    <div>{t('welcome')}</div>
    <div>{t('user.name')}</div>
    <div>{t('user.password', { psd: 123456 })}</div>

    // 在json中，参数需要用双花括号{{ psd }}
    "user": {
      "name": "用户姓名",
      "password": "用户密码为：{{psd}}"
    }
    ```

  - 配置文件管理

    在根目录新建环境文件，如`.env.development`, `.env.test`，然后写入不同环境的变量值，！注意，变量名称只能以`REACT_APP_`开头，否则不生效

    ```txt
    REACT_APP_ENV=/api
    ```

  - 路由管理

    采用react-router-config，进行配置化管理，需注意的是，相应的react-router（dom）版本不能是最新v5，否则会有不适配的问题

  - 样式管理

    - 文件用module.scss结尾，在jsx中导入样式对象，使用对象的语法

    ```js
    import testStyle from './index.module.scss'

    function Test() {
      return (
        <div className={testStyle['test-page']}>
          嵌套在test下面的字路由
        </div>
      )
    }
    ```

    - 文件正常scss结尾，但需在文件中声明好相应的作用域名称

    ```scss
    $name: 'home-page';
    .#{$name}-test {
      color: red;

      .custom-color {
        color: skyblue;
      }
    }
    ```

    ```js
    function Home() {
      return (
        <div className='home-page-test'>
          我是Home页面的内容
          <h3 className='custom-color'>自定义颜色</h3>
        </div>
      )
    }
    ```



# 相关链接
  - [国际化——i18next](https://www.i18next.com/translation-function/context)
  - [国际化-react-i18next quick start](https://react.i18next.com/getting-started)
  - [路由配置化管理config](https://juejin.cn/post/6911497890822029326)
  - [多环境配置-create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
