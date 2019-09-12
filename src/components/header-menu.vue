<template>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-s-custom">个人资料</el-dropdown-item>
                <el-dropdown-item icon="el-icon-document-copy">资源管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-close">退出</el-dropdown-item>
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