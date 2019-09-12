<template>
    <div class="login-warp">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <div class="login-form-box">
                <h2 class="login-title"> Stephen的博客 </h2>

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="email">
                            <el-input v-model="ruleForm.email" placeholder="用户名" :size="UISize"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="password">
                            <el-input type="password" v-model="ruleForm.password" placeholder="密码" :size="UISize"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24" style="text-align:center;margin-top:10px;">
                        <el-button type="primary" @click="submitForm" :size="UISize" :loading="loading" style="width:100%;">登  陆</el-button>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="19">
                        <el-button type="text" @click="$router.push('/')" :size="UISize">
                            <span class="el-icon-back"></span>返回首页
                        </el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="text" :size="UISize" @click="$router.push('/register')">去注册?</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'login',
        data(){
            return{
                ruleForm: {
                    email: '',
                    password: ''
                },
                rules: {
                    email: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                loading: false
            }
        },
        methods: {
            submitForm(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.loading = true
                        // setTimeout(() => {
                        //     this.$router.push('/')
                        // }, 1000)
                        axios.post('/apis/login', this.ruleForm).then(res => {
                            console.log(res)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .login-warp
        width 100%
        height 100vh
        background url('../assets/images/login-bg.jpg') no-repeat center center
        background-size cover
        display flex
        justify-content center
        align-items center
        .login-form-box
            width 340px
            height 320px
            background-color #fff
            border-radius 6px
            border 1px solid #f0f0f0
            box-sizing border-box
            padding 0 50px
            .login-title
                width 100%
                height 60px
                line-height 60px
                color #969696
                text-align center
                margin-bottom 20px
</style>