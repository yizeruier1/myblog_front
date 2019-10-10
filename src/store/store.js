import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jsonwebtoken'
import articals from './artical'

Vue.use(Vuex)

export default new Vuex.Store({
    // 文章模块
    modules: {
        articals: articals
    },

    // 通用模块
    state: {
        // 是否登录
        logined: false,
        // 存储用户信息
        userData: null,
        // 登录之前的回调地址
        redirectUrl: ''
    },
    mutations: {
        // 切换登录状态
        changeLoginStatus(state, status){
            state.logined = status
        },
        // 设置用户信息
        setUserData(state, data) {
            const info = jwt.decode(data)
            state.userData = info
        },
        // 设置回调地址
        setRedirectUrl(state, url) {
            state.redirectUrl = url
        }
    },
    actions: {
        
    }
})
