<template>
    <div class="addartical-warp">
        <div class="common-desc">
            {{ id ? '修改' : '发布' }}文章
        </div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            
            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章名称:" prop="title">
                        <el-input v-model="ruleForm.title" :size="UISize"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章标签:" prop="types">
                        <el-select v-model="ruleForm.types" :size="UISize" multiple clearable style="width:100%;">
                            <el-option v-for="item in articalTypes" :key="item.value" :label="item.value" :value="item"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="文章描述:" prop="desc">
                        <el-input v-model="ruleForm.desc" :size="UISize"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="开启评论:" prop="comments">
                        <el-radio-group v-model="ruleForm.comments" :size="UISize">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="2">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="24">
                    <el-form-item label="缩略图:" prop="coverImg">
                        <el-upload
                            class="avatar-uploader"
                            action="/apis/uploadImg"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="ruleForm.coverImg" :src="ruleForm.coverImg" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
            </el-row>

            <editor v-model="ruleForm.content" @setInner="setInner" />

            <el-row style="text-align:center;margin:20px 0;">
                <el-col :span="24">
                    <el-button type="primary" @click="submitForm('ruleForm')" size="small" :loading="loading">提交</el-button>
                    <el-button @click="resetForm('ruleForm')" size="small" style="margin-left:20px;">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import { getArticalTypes, addArtical, getArticalDetail, updateArtical } from '@/api/api'
    import editor from '@/components/editor'
    let E = null
    export default {
        name: 'addArtical',
        components: {
            editor
        },
        data(){
            return{
                ruleForm: {
                    title: '',
                    types: [],
                    content: '',
                    desc: '',
                    comments: 1,
                    coverImg: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' }
                    ],
                    types: [
                        { required: true, message: '请选择文章类型', trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '请输入文章简介', trigger: 'blur' }
                    ]
                },
                loading: false,
                articalTypes: [],
                // 文章id 如果有 就是编辑
                id: null
            }
        },
        methods: {
            submitForm(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        let param = {
                            ...this.ruleForm
                        }
                        param.types = JSON.stringify(this.ruleForm.types)

                        const cb = this.id ? updateArtical : addArtical
                        if(this.id) param.id = this.id

                        this.loading = true
                        cb(param).then(res => {
                            this.loading = false
                            if(res.code === 100){
                                this.$message.success(`${this.id ? '修改' : '添加'}成功！`)
                                // this.$confirm(`${this.id ? '修改' : '添加'}成功！赶快去预览一下吧！`, '提示', {
                                //     confirmButtonText: '去预览',
                                //     cancelButtonText: '继续写文章',
                                //     type: 'warning'
                                // }).then(() => {
                                //     this.$router.replace('/home/articalDetail?id=' + this.id)
                                // }).catch(() => {
                                //     this.resetForm()
                                // })
                                this.$router.push('/admin/articals')
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    }
                })
            },
            resetForm(){
                this.$refs.ruleForm.resetFields()
                this.ruleForm.content = ''
                E.txt.html('')
            },
            // 图片上传成功
            handleAvatarSuccess(res) {
                // 保存文件名
                this.ruleForm.coverImg = '/apis/' + res.data
            },
            // 限制 图片上传 格式 大小
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'
                const isPNG = file.type === 'image/png'
                const isLt2M = file.size / 1024 / 1024 < 1
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 1MB!')
                }
                if (!isJPG && !isPNG) {
                    this.$message.error('上传图片格式不对!')
                }
                return isLt2M && (isJPG || isPNG)
            },
            // 获取文章全部分类
            getTypes(){
                getArticalTypes({ pageSize: 50, pageNum: 1 }).then(res => {
                    if(res.code === 100){
                        this.articalTypes = res.data.list
                    }
                })
            },
            // 查文章详情
            getDetail(){
                getArticalDetail({
                    id: this.$route.query.id
                }).then(res => {
                    const { title, desc, content, types, comments, coverImg } = res.data
                    this.ruleForm.title = title
                    this.ruleForm.desc = desc
                    this.ruleForm.content = content
                    this.ruleForm.types = JSON.parse(types)
                    this.ruleForm.comments = Number(comments)
                    this.ruleForm.coverImg = coverImg
                    E.txt.html(content)
                })
            },
            // 保存editor实例
            setInner(editor){
                E = editor
            }
        },
        mounted() {
            this.getTypes()
            if(this.$route.query.id){
                this.getDetail()
                this.id = this.$route.query.id
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .addartical-warp
        width 800px
        height auto
        margin 0 auto
        overflow hidden
</style>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        display: block;
        max-width: 160px;
        max-height: 160px;
    }
</style>