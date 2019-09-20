import Vue from 'vue'
import Vuex from 'vuex'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 是否登录
        logined: false,
        // 存储用户信息
        userData: null
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
        }
    },
    actions: {
        
    }
})
