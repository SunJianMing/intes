import Home from './home'

const dynamicRouters = [
  {
    path: '/',
    component: () => import('@/layout/home')
  }, {
    path: '/report',
    component: () => import('@/layout/report')
  }, {
    path: '/buy',
    component: () => import('@/layout/buy')
  }, {
    path: '/my',
    component: () => import('@/layout/my')
  },
  ...Home
]
export default dynamicRouters
