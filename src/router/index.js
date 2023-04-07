import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: function () {
      return import('../views/ResetPasswordView.vue')
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () {
      return import('../views/DashboardView.vue')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: function () {
      return import('../views/PageNotFoundView.vue')
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.BASE_URL,
  routes
})

export default router
