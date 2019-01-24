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
  }]
}]
export default myPath
