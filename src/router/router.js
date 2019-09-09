import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import addArtical from '@/views/addArtical.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/addArtical',
            name: 'addArtical',
            component: addArtical
        }
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})
