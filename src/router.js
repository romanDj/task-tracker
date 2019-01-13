import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next('/')
    return
  }
  next('/task')
}

const ifAuthenticated = (to, from, next) => {
  // localStorage.removeItem('user-token')
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/Auth.vue')
    },
    {
      path: '/',
      name: 'task',
      component: () => import('./views/Task.vue'),
      beforeEnter: ifAuthenticated
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
