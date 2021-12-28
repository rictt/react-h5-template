# 项目说明

  本项目是为了满足快速搭建`基于React的H5项目`,集成了一些基本的功能，例如`预处理器的使用、路由配置化管理、国际化等等`,节省开发时间；项目是基于`create-react-app`脚手架创建的，有相关问题可以参考cra的文档；

# 使用

  - 安装依赖
  
  ```js
  npm install
  ```

  - 本地运行

  ```js
  npm run start
  ```

  - 打包部署

  ```js
  npm run build
  ```

# 目录
  - [√ 配置多环境变量](#env)
  - [√ 样式预处理管理](#style)
  - [√ 路由配置化配置](#router)
  - [√ 开发设置代理](#proxy)
  - [√ 国际化管理](#i18n)
  - [√ 生产构建包](#build)
  - 未完待续

# 文档记录
  - ### <span id="env">✅ 配置多环境变量 </span>

    在根目录新建环境文件，如`.env.development`, `.env.test`，然后写入不同环境的变量值，！注意，变量名称只能以`REACT_APP_`开头，否则不生效

    ```txt
    REACT_APP_ENV=/api
    ```

  - ### <span id="style">✅ 样式预处理管理 </span>

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


  - ### <span id="router">✅ 路由配置化配置 </span>

    采用react-router-config，进行配置化管理，需注意的是，相应的react-router（dom）版本不能是最新v5，否则会有不适配的问题


  - ### <span id="proxy">✅ 开发设置代理 </span>

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

  


  - ### <span id="i18n">✅ 国际化管理 </span>

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

  - ### <span id="build">✅ 构建生产包并本地预览 </span>

    ```css
    npm run build
    # 完成后，本地会有一个build目录，就是构建结果
    npm i serve -g
    serve -s build
    # 成功后，会在控制台打印服务的地址，端口，访问即可
    ```

# 相关链接
  - [国际化——i18next](https://www.i18next.com/translation-function/context)
  - [国际化-react-i18next quick start](https://react.i18next.com/getting-started)
  - [路由配置化管理config](https://juejin.cn/post/6911497890822029326)
  - [多环境配置-create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used)