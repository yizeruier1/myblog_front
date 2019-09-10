<template>
    <div class="login-warp">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <transition name="el-zoom-in-top">
                <div class="login-form-box" key="1">
                    <h2 class="login-title"> Stephen的博客 </h2>

                    <el-row>
                        <el-col :span="24">
                            <el-form-item prop="username">
                                <el-input v-model="ruleForm.username" placeholder="用户名" :size="UISize"></el-input>
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
                </div>
            </transition>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
            return{
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
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
                        setTimeout(() => {
                            this.$router.push('/')
                        }, 1000)
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
            height 300px
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