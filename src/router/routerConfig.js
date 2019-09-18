import Vue from 'vue'
import Router from 'vue-router'
import routes from './routerMap'
import NProgress from 'nprogress'
import { Message } from 'element-ui'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    NProgress.start()
    // 登录以后  不能去登录注册页面
    if ((to.path === '/login' || to.path === '/register') && token) {
        Message.warning('不要去不该去的地方哦！')
        next(from.path)
    }
    // 没登录  不能去/admin 系列页面
    const reg = new RegExp(/^\/admin/)
    if (reg.test(to.path) && !token) {
        Message.warning('请先登录哦！')
        next('/login')
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router