import { getArticals } from '@/api/api'

export default {
    state: {
        list: [],
        pageSize: 10,
        pageNum: 1,
        total: 0,
        title: ''
    },
    mutations: {
        // 设置 列表
        setList(state, list){
            state.list = list
        },

        // 设置 total
        setTotal(state, total){
            state.total = total
        },

        // 设置 pageNum
        setPageNum(state, pageNum){
            state.pageNum = pageNum
        },

        // 设置 title
        setTitle(state, title){
            state.title = title
        }
    },
    actions: {
        // 初始化 文章列表
        getList({ state, commit }, more){
            const { pageSize, pageNum, title, list } = state
            let param = {
                pageSize,
                pageNum,
                title
            }
            getArticals(param).then(res => {
                if(res.code === 100){
                    commit('setTotal', res.data.total)
                    if(!more){
                        // 初始化
                        commit('setList', res.data.list)
                    }else{
                        // 分页查询
                        commit('setList', list.concat(res.data.list))
                    }
                }
            })
        },
        // 加载更多
        loadMore({ state, commit, dispatch }){
            const { list, total, pageNum } = state
            if(list.length < total) {
                commit('setPageNum', pageNum + 1)
                dispatch('getList', true)
            }
        },

        // 根据关键字 查询
        searchByTitle({ commit, dispatch }, title){
            commit('setList', [])
            commit('setPageNum', 1)
            commit('setTitle', title)
            dispatch('getList')
        },

        // 初始化 查询条件
        initSearchParams(){
            commit('setList', [])
            commit('setPageNum', 1)
            commit('setTitle', '')
            commit('setTotal', 0)
        }
    }
}