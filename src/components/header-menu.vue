<template>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="iconfont icon-yonghudianji">个人资料</el-dropdown-item>
                <el-dropdown-item icon="el-icon-document-copy" @click.native="$router.push('/admin')">资源管理</el-dropdown-item>
                <el-dropdown-item icon="iconfont icon-tuichu" @click.native="lgout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'header-menu',
        data(){
            return{

            }
        },
        methods: {
            lgout(){
                this.$confirm('确定退出么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message.success('退出成功！')
                    this.$store.commit('changeLoginStatus', false)
                }).catch()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .el-dropdown-link
        cursor pointer
        color #409EFF
    .el-icon-arrow-down
        font-size 12px
</style>