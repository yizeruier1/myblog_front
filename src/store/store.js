import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 是否登录
        logined: false
    },
    mutations: {
        // 切换登录状态
        changeLoginStatus(state, status){
            state.logined = status
        }
    },
    actions: {
        
    }
})
