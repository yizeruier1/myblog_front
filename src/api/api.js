import myHttp from './axiosConfig'


// 登录
export const login = data => myHttp.post('/apis/login', data).then(res => res.data)
// 注册
export const register = data => myHttp.post('/apis/register', data).then(res => res.data)


// 查询 文章 类型
export const getArticalTypes = data => myHttp.get('/apis/allArticalTypes', { params: data }).then(res => res.data)
// 新增 文章 类型
export const addArticalTypes = data => myHttp.post('/apis/addArticalTypes', data).then(res => res.data)
// 删除 文章 类型
export const deleteArticalTypes = data => myHttp.delete('/apis/deleteArticalTypes', { params: data }).then(res => res.data)
// 更新 文章 类型
export const updateArticalTypes = data => myHttp.post('/apis/updateArticalTypes', data).then(res => res.data)



// 新增文章
export const addArtical = data => myHttp.post('/apis/addArtical', data).then(res => res.data)
// 查询文章列表
export const getArticals = data => myHttp.get('/apis/allArtical', { params: data }).then(res => res.data)
// 查文章详情
export const getArticalDetail = data => myHttp.get('/apis/articalDetail', { params: data }).then(res => res.data)
// 更新文章
export const updateArtical = data => myHttp.post('/apis/updateArtical', data).then(res => res.data)
// 删除文章
export const deleteArtical = data => myHttp.delete('/apis/deleteArtical', { params: data }).then(res => res.data)



// 发表评论
export const postComments = data => myHttp.post('/apis/addComment', data).then(res => res.data)
// 查评论列表
export const getComments = data => myHttp.get('/apis/allComments', { params: data }).then(res => res.data)