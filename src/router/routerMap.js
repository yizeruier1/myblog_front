import home from '@/views/layout.vue'
import index from '@/views/index.vue'
import page404 from '@/views/404.vue'
import articalDetail from '@/views/articalDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/home/index',
        component: home,
        children: [
            {
                path: '/home/index',
                name: 'index',
                component: index
            },
            {
                path: '/home/addArtical',
                name: 'addArtical',
                component: () => import('@/views/addArtical.vue')
            },
            {
                path: '/home/articalDetail',
                name: 'articalDetail',
                component: articalDetail
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register.vue')
    },
    {
        path: '/404',
        name: '404',
        component: page404
    },
    {
        path: '*',
        redirect: '/404'
    }
]
export default routes