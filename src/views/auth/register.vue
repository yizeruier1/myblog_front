<template>
    <auth-box>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <div class="login-form-box" style="height:412px;">
                <h2 class="login-title regi-title"> Stephen的博客 </h2>

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="username">
                            <el-input type="username" v-model="ruleForm.username" placeholder="用户名" :size="UISize"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <el-form-item prop="email">
                            <el-input type="email" v-model="ruleForm.email" placeholder="邮箱" :size="UISize"></el-input>
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
                    <el-col :span="24">
                        <el-form-item prop="password1">
                            <el-input type="password" v-model="ruleForm.password1" placeholder="再次输入密码" :size="UISize"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24" style="text-align:center;margin-top:10px;">
                        <el-button type="primary" @click="submitForm" :size="UISize" :loading="loading" style="width:100%;">注  册</el-button>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="19">
                        <el-button type="text" @click="$router.push('/')" :size="UISize">
                            <span class="el-icon-back"></span>返回首页
                        </el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="text" :size="UISize" @click="$router.push('/login')">去登陆</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-form>
    </auth-box>
</template>

<script>
    import authBox from './authBox.vue'
    export default {
        name: 'register',
        components: {
            authBox
        },
        data(){
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            const checkEmail = (rule, value, callback) => {
                const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
                if (!value) {
                    return callback(new Error('邮箱不能为空'))
                }else if(!mailReg.test(value)){
                    callback(new Error('请输入正确的邮箱格式'))
                }else{
                    callback()
                }
            }
            return{
                ruleForm: {
                    username: '',
                    email: '',
                    password: '',
                    password1: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    email: [
                        { validator: checkEmail, trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    password1: [
                        { validator: validatePass2, trigger: 'blur' }
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