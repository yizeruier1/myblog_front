import axios from 'axios'
import router from '../router/routerConfig'
import { Message } from 'element-ui'

// 创建axios
const myHttp = axios.create({
    timeout: 10000
})

// 请求拦截  加上登录 token 权限
myHttp.interceptors.request.use(
    (config) => {
        if (localStorage.token) {
            config.headers.Authorization = 'Bearer ' + localStorage.token
        }
        return config;
    },
    (err) => {
        Promise.reject(err)
    }
)

// 响应拦截
myHttp.interceptors.response.use(
    (response) => {
        return response
    },
    (err) => {
        console.log(err)
        let errMsg = ''
        if (err && err.response.status) {
            switch (err.response.status) {
                case 401:
                    errMsg = '登录状态失效，请重新登录'
                    localStorage.removeItem('token')
                    router.push('/login')
                    break
                case 500:
                    errMsg = '服务器内部错误'
                    break
                case 501:
                    errMsg = '服务未实现'
                    break
                case 502:
                    errMsg = '网关错误'
                    break
                case 503:
                    errMsg = '服务不可用'
                    break
                case 504:
                    errMsg = '网关超时'
                    break
                default:
                    errMsg = err.response.data.msg
                    break
            }
        } else {
            errMsg = err
        }

        Message.error(errMsg)
        return Promise.reject(errMsg)
    }
)

export default myHttp