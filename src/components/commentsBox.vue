<template>
    <div style="margin-top:20px;min-height:132px;">
        <el-input
            v-if="$store.state.logined"
            type="textarea"
            :placeholder="$store.state.logined ? '评论一下吧' : ''"
            v-model="message"
            :maxlength="500"
            show-word-limit
            :rows="5"
            >
        </el-input>

        <el-row v-if="$store.state.logined">
            <el-col :span="24" style="text-align:right;margin-top:10px;">
                <el-button type="primary" round size="small" :loading="submiting" @click="submit">发  送</el-button>
            </el-col>
        </el-row>

        <!-- // 没有登录时 提示 登录 -->
        <div class="tiptologin" v-if="!$store.state.logined">
            先<el-button type="text" @click="goLogin">登录</el-button>，才能评论。
        </div>
    </div>
</template>

<script>
    import { postComments } from '@/api/api.js'
    export default {
        name: 'messageBox',
        data(){
            return{
                message: '',
                submiting: false
            }
        },
        methods: {
            submit(){
                if(this.message.trim() === ""){
                    this.$message.warning("输入内容不能为空！")
                    return
                }
                this.submiting = true
                postComments({
                    articalId: this.$route.query.id,
                    content: this.message
                }).then(res => {
                    if(res.code === 100){
                        this.$message.success('评论成功！')
                        this.$emit('postSuccess')
                    }else{
                        this.$message.error(res.msg)
                    }
                    this.submiting = false
                })
            },
            // 去登陆
            goLogin(){
                const { path } = this.$route
                const { id } = this.$route.query
                const url = `${path}?id=${id}`
                this.$store.commit('setRedirectUrl', url)
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tiptologin
        width 100%
        height 80px
        text-align center
        line-height 80px
        font-size 14px
        color #333
        box-sizing border-box
        border 1px solid #2d8cf0
        margin-bottom 20px
        border-radius 4px
</style>