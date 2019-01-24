import Home from './home'
import Report from './report'
import my from './my'
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
    component: () => import('@/layout/my'),
    meta: {
      title: ''
    }
  },
  ...Home,
  ...Report,
  ...my
]
export default dynamicRouters
