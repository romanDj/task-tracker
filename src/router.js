import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/Auth.vue')
    },
    {
      path: '/task',
      name: 'task',
      component: () => import('./views/Task.vue')
    },
    {
      path: '/task/add',
      component: () => import('./views/AddTask.vue')
    },
    {
      path: '/task/:id(\\d+)',
      component: () => import('./views/InfoTask.vue')
    },
    {
      path: '/signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '*',
      component: () => import('./views/Error.vue')
    }
  ]
})
