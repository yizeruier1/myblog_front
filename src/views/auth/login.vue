<template>
    <auth-box>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" @keyup.enter.native="submitForm">
            <div class="login-form-box">
                <h2 class="login-title"> Stephen的博客 </h2>

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="email">
                            <el-input v-model="ruleForm.email" placeholder="邮箱" :size="UISize"></el-input>
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
    </auth-box>
</template>

<script>
    import { login } from '@/api/api'
    import authBox from './authBox.vue'
    import { mapState, mapMutations  } from 'vuex'
    export default {
        name: 'login',
        components: {
            authBox
        },
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
            ...mapMutations([
                'setUserData',
                'changeLoginStatus',
                'setRedirectUrl'
            ]),
            submitForm(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.loading = true
                        login(this.ruleForm).then(res => {
                            this.loading = false
                            if(res.code === 100){
                                this.$message.success('登录成功！')
                                // 保存登录状态
                                this.setUserData(res.data)
                                this.changeLoginStatus(true)
                                localStorage.setItem('token', res.data)

                                // 跳转
                                const url = this.redirectUrl ? this.redirectUrl : '/'
                                this.setRedirectUrl('')
                                this.$router.push(url)
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    }
                })
            }
        },
        computed: mapState([
            'redirectUrl'
        ])
    }
</script>