/**
 * @Project Name: vue-admin
 * @Author: luichooy
 * @Date: 2018-01-17 15:01
 * @Email: luichooy@163.com
 * @Idea: WebStorm
 */

import Layout from 'src/pages/layout/layout';

// 不作为main组件子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: () => import('src/pages/login/login')
};

// 错误页面
export const errorRouter = {
  path: '/error/:code',
  name: 'error',
  meta: {
    title: 'error'
  },
  component: () =>
    import('src/pages/error/index')
};

// 作为main组件子页面展示  但不在左侧菜单显示的路由卸载otherRoter里
export const otherRouter = {
  path: '',
  name: 'otherRouter',
  redirect: '/home',
  meta: {
    requireAuth: true
  },
  component: Layout,
  children: [
    {
      path: '/home',
      name: 'home',
      title: '首页',
      meta: {
        requireAuth: true
      },
      component: Layout,
      children: [
        {
          path: 'count',
          name: 'count',
          title: '统计',
          component: () => import('src/pages/home/count/count')
        }
      ]
      // component: () => import('src/pages/home/home')
    }
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/merchandiseControl',
    name: 'merchandiseControl',
    title: '商品管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'classify',
        name: 'classify',
        title: '分类管理',
        component: () => import('src/pages/merchandiseControl/classify')
      },
      {
        path: 'brand',
        name: 'brand',
        title: '品牌管理',
        component: () => import('src/pages/merchandiseControl/brand')
      },
      {
        path: 'list',
        name: 'list',
        title: '商品列表',
        component: () => import('src/pages/merchandiseControl/list')
      }
    ]
  },
  {
    path: '/charts',
    name: 'charts',
    title: '销售管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'bar',
        name: 'bar',
        title: '柱状图分析',
        component: () => import('src/pages/charts/bar')
      },
      {
        path: 'line',
        name: 'line',
        title: '折线图分析',
        component: () => import('src/pages/charts/line')
      },
      {
        path: 'pie',
        name: 'pie',
        title: '饼图分析',
        component: () => import('src/pages/charts/pie')
      }
    ]
  },
  // {
  //   path: '/form',
  //   name: 'form',
  //   title: '表单管理',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'render',
  //       name: 'render',
  //       title: '渲染表单',
  //       component: () => import('src/pages/form/render/render')
  //     }
  //   ]
  // },
  {
    path: '/system',
    name: 'system',
    title: '系统管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'systemSetting',
        name: 'systemSetting',
        title: '系统设置',
        component: () => import('src/pages/system/systemSetting')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    title: '用户管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'userCount',
        name: 'userCount',
        title: '用户统计',
        component: () => import('src/pages/user/userCount')
      },
      {
        path: 'userManga',
        name: 'userManga',
        title: '用户管理',
        component: () => import('src/pages/user/userManga')
      }
    ]
  },
  {
    path: '/access',
    name: 'access',
    title: '权限管理',
    meta: {
      requireAuth: true
    },
    component: Layout,
    children: [
      {
        path: 'roleManga',
        name: 'roleManga',
        title: '角色管理',
        component: () => import('src/pages/access/roleManga')
      },
      {
        path: 'personalManga',
        name: 'personalManga',
        title: '人员管理',
        component: () => import('src/pages/access/personalManga')
      },
      {
        path: 'authorityManga',
        name: 'authorityManga',
        title: '权限管理',
        component: () => import('src/pages/access/authorityManga')
      }
    ]
  }
  // {
  //   path: '/log',
  //   name: 'log',
  //   title: '日志管理',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'log_index',
  //       title: '操作日志',
  //       component: () => import('src/pages/log/index')
  //     }
  //   ]
  // }
  // {
  //   path: '/test',
  //   name: 'test',
  //   title: '测试',
  //   meta: {
  //     requireAuth: true
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'test_index',
  //       title: '测试',
  //       component: () => import('src/pages/test/test')
  //     }
  //   ]
  // }
];

export const routers = [
  loginRouter,
  errorRouter,
  otherRouter,
  ...appRouter
];
