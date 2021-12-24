import Home from '@/pages/Home'
import Test from '@/pages/Test'
import TestDetail from '@/pages/Test/TestDetail'

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/test",
    component: Test,
    routes: [ //此处添加嵌套路由
      {
        path: "/test/detail",
        component: TestDetail,
      },
    ],
  }
];

export default routes