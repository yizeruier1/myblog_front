<template>
    <div class="addartical-warp">
        <div class="common-desc">
            发布文章
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
                            action="/apis/uploadImg"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :before-upload="beforeAvatarUpload"
                            :on-success="handleAvatarSuccess"
                            :multiple="false">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="previewImg" alt="">
                        </el-dialog>
                    </el-form-item>
                </el-col>
            </el-row>

            <editor v-model="ruleForm.content" />

            <el-row style="text-align:center;margin:20px 0;">
                <el-col :span="24">
                    <el-button type="primary" @click="submitForm('ruleForm')" size="small" :loading="loading">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')" size="small" style="margin-left:20px;">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import { getArticalTypes, addArtical, getArticalDetail } from '@/api/api'
    import editor from '@/components/editor'
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
                // 图片预览
                dialogVisible: false,
                previewImg: '',
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
                        console.log(param)

                        this.loading = true
                        addArtical(param).then(res => {
                            this.loading = false
                            if(res.code === 100){
                                this.$message.success('添加成功')
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    }
                })
            },
            resetForm(){
                this.$refs.ruleForm.resetFields()
            },
            // 图片预览
            handlePictureCardPreview(file) {
                this.previewImg = file.url
                this.dialogVisible = true
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
                    const { title, desc, content, types, comments } = res.data
                    this.ruleForm.title = title
                    this.ruleForm.desc = desc
                    this.ruleForm.content = content
                    this.ruleForm.types = JSON.parse(types)
                    this.ruleForm.comments = Number(comments)
                })
            }
        },
        mounted() {
            this.getTypes()
            if(this.$route.query.id){
                // this.getDetail()
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