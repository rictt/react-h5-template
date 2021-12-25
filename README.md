# 文档记录
  - 配置文件管理

    环境会有**development、production**，对应src/config文件，全局或者axios的文件可对应一一写入

    ```js
    // 本地环境配置
    module.exports = {
      title: 'react-h5-template',
      baseUrl: 'http://localhost:9018', // 项目地址
      APPID: 'xxx',
      APPSECRET: 'xxx',
      $cdn: 'https://www.sunniejs.cn/static'
    }
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
