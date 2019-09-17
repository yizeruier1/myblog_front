<template>
    <el-aside width="200px" class="admin-layout-height" style="background-color:#545c64;">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-menu-item index="/admin/welcome">
                <i class="el-icon-place"></i>
                <span slot="title">Welcome</span>
            </el-menu-item>
            <el-submenu index="/admin/articals">
                <template slot="title">
                    <i class="iconfont icon-wenzhang"></i>
                    <span style="margin-left:10px;">文章管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/admin/articals">文章列表</el-menu-item>
                    <el-menu-item index="/admin/addArtical">发布文章</el-menu-item>
                    <el-menu-item index="/admin/deletedArtical">文章回收站</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/admin/articalTypes">
                <i class="iconfont icon-type"></i>
                <span slot="title" style="margin-left:10px;">文章类别</span>
            </el-menu-item>
            <!-- <el-menu-item index="/admin/articalTypes1">
                <i class="iconfont icon-yonghuguanli"></i>
                <span slot="title" style="margin-left:10px;">用户管理</span>
            </el-menu-item> -->
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "admin-menu"
    }
</script>