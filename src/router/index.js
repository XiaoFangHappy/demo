import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import user from '@/components/user/user'
import main from '@/components/main'
import userInfo from '@/components/user/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      // 嵌套路由
      children: [{
        // 这里不设置值，是把main作为默认页面
        path: '/',
        name: 'Main',
        component: main
      }, {
        path: '/user',
        name: 'User',
        component: user
      }, {
        path: '/userInfo',
        name: 'userInfo',
        component: userInfo
      }]
    }
  ]
})
