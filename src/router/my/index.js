let basePath = (module) => import(`@/modules_page/my/${module}`)
const myPath = [{
  path: '/myInfo',
  component: () => basePath('index'),
  children: [{
    path: 'collection',
    component: () => basePath('collection'),
    meta: {
      title: '收藏'
    }
  }, {
    path: 'help',
    component: () => basePath('help'),
    meta: {
      title: '帮助中心'
    }
  }, {// 隐私说明
    path: 'privacy',
    component: () => basePath('privacy'),
    meta: {
      title: '隐私说明'
    }
  }, {//  服务协议
    path: 'agreement',
    component: () => basePath('helpTemp'),
    meta: {
      title: '服务协议'
    }
  }, {// 接受条款
    path: 'terms',
    component: () => basePath('helpTemp'),
    meta: {
      title: '接受条款'
    }
  }, {// 服务条件
    path: 'conditions',
    component: () => basePath('helpTemp'),
    meta: {
      title: '服务条件'
    }
  }, {// 服务范围
    path: 'scope',
    component: () => basePath('helpTemp'),
    meta: {
      title: '服务范围'
    }
  }, {// 有关风险
    path: 'risk',
    component: () => basePath('helpTemp'),
    meta: {
      title: '有关风险'
    }
  }, {// 隐私声明
    path: 'statement',
    component: () => basePath('helpTemp'),
    meta: {
      title: '隐私声明'
    }
  }, {// 用户知悉
    path: 'aware',
    component: () => basePath('helpTemp'),
    meta: {
      title: '用户知悉'
    }
  }, {// 用户责任
    path: 'responsibility',
    component: () => basePath('helpTemp'),
    meta: {
      title: '用户责任'
    }
  }, {
    path: 'setting',
    component: () => basePath('setting'),
    meta: {
      title: '设置'
    }
  }]
}]
export default myPath
