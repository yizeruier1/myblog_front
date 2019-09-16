import myHttp from './axiosConfig'


// 登录
export const login = data => myHttp.post('/apis/login', data).then(res => res.data)


// 查询 文章 类型
export const getArticalTypes = data => myHttp.get('/apis/allArticalTypes', { params: data }).then(res => res.data)
// 新增 文章 类型
export const addArticalTypes = data => myHttp.post('/apis/addArticalTypes', data).then(res => res.data)
// 删除 文章 类型
export const deleteArticalTypes = data => myHttp.delete('/apis/deleteArticalTypes', { params: data }).then(res => res.data)
// 更新 文章 类型
export const updateArticalTypes = data => myHttp.post('/apis/updateArticalTypes', data).then(res => res.data)