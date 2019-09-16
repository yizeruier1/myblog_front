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
                            <el-option label="HTNL" value="1"></el-option>
                            <el-option label="CSS" value="2"></el-option>
                            <el-option label="JS" value="3"></el-option>
                            <el-option label="VUE" value="4"></el-option>
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
                    <el-form-item label="开启评论:" prop="comment">
                        <el-radio-group v-model="ruleForm.comment" :size="UISize">
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
                            action="https://127.0.0.1/apis/uploadImg"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :before-upload="beforeAvatarUpload"
                            :multiple="false">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="ruleForm.coverImg" alt="">
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
    import editor from '../components/editor'
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
                    comment: 1,
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
                dialogVisible: false
            }
        },
        methods: {
            submitForm(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            resetForm(){
                this.$refs.ruleForm.resetFields()
            },
            // 图片上传成功
            handlePictureCardPreview(file) {
                this.ruleForm.coverImg = file.url
                this.dialogVisible = true
            },
            // 限制 图片上传 格式 大小
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
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