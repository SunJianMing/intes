import Vue from 'vue'
import Router from 'vue-router'

import dynamicRouters from './dynamicRouters'
Vue.use(Router)

export default new Router({
  routes: dynamicRouters
})
