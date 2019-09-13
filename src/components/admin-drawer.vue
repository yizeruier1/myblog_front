<template>
    <div class="admin-drawer">
        <!-- // 头像 -->
        <div class="drawer-ava" v-show="!showDrawer" @click="showDrawer = !showDrawer">
            <img src="../assets/images/ava.jpg" alt="用户信息">
        </div>

        <!-- // drawer -->
        <el-drawer
            :visible.sync="showDrawer"
            direction="rtl"
            size="300px"
        >
            <img src="../assets/images/ava.jpg" alt="" class="drawer-user-ava">
            <p class="drawer-user-name">
                Stephen
            </p>
            <p class="drawer-user-sign">
                这个人很懒，什么都没留下 ~ ~
            </p>

            <div class="drawer-menu">
                <el-button type="primary" plain :size="UISize" style="width:100%;" @click="$router.push('/')">去前台</el-button>
                <el-button type="success" plain :size="UISize" style="width:100%;margin-top:16px;margin-left:0;">去前台</el-button>
                <el-button type="danger" plain :size="UISize" style="width:100%;margin-top:16px;margin-left:0;" @click="lgout">退出</el-button>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: 'damin-drawer',
        data(){
            return{
                showDrawer: false
            }
        },
        methods: {
            // 退出
            lgout(){
                this.$confirm('确定退出么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // this.$message({
                    //     type: 'success',
                    //     message: '删除成功!'
                    // })
                }).catch()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .admin-drawer
        width 30px
        height 40px
        background-color #fff
        position fixed
        right 0
        top 20%
        .drawer-ava
            width 40px
            height 40px
            border-radius 50%
            background-color #fff
            position absolute
            left -20px
            top 0
            overflow hidden
            cursor pointer
            img
                display block
                width 34px
                height 34px
                border-radius 50%
                margin 3px auto
    .drawer-user-ava
        display block
        width 80px
        height 80px
        border-radius 40px
        margin 0 auto
        border 1px solid hsla(0,0%,93%,.6)
    .drawer-user-name
        height 60px
        line-height 60px
        color #666
        font-size 20px
        font-weight 600
        text-align center
    .drawer-user-sign
        width 90%
        min-height 24px
        line-height 24px
        font-size 14px
        color #999
        text-align center
    .drawer-menu
        width 240px
        height auto 
        overflow hidden
        margin 200px auto auto auto
        text-align center
</style>