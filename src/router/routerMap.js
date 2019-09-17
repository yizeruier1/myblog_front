import home from '@/views/layout.vue'
import index from '@/views/index.vue'
import page404 from '@/views/404.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import articalDetail from '@/views/articalDetail.vue'

const routes = [
    {
        // 前台页面
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
                path: '/home/articalDetail', // 文章详情
                name: 'articalDetail',
                component: articalDetail
            }
        ]
    },
    {
        // 后台页面
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/adminHome.vue'),
        redirect: '/admin/welcome',
        children: [
            {
                path: '/admin/welcome',
                name: 'welcome',
                component: () => import('@/views/adminWelcome.vue')
            },
            {
                path: '/admin/articalTypes', // 文章分类管理
                name: 'articalTypes',
                component: () => import('@/views/articalTypes.vue')
            },
            {
                path: '/admin/addArtical', // 添加文章
                name: 'addArtical',
                component: () => import('@/views/addArtical.vue')
            },
            {
                path: '/admin/articals', // 文章列表
                name: 'articals',
                component: () => import('@/views/articals.vue')
            },
            {
                path: '/admin/deletedArtical',  // 文章回收站  存放删除的文章
                name: 'deletedArtical',
                component: () => import('@/views/deletedArtical.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
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