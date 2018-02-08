import Vue from 'vue'
import Router from 'vue-router'

import Camera from './views/Camera.vue'
import Home from './views/Home.vue'
import Stats from './views/Stats.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/stats',
      name: 'Statistics',
      component: Stats
    },
  ]
})
