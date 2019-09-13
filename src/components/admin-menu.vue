<template>
    <el-aside width="200px" class="admin-layout-height" style="background-color:#545c64;">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="1">
                <i class="el-icon-place"></i>
                <span slot="title">Welcome</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="iconfont icon-wenzhang"></i>
                    <span style="margin-left:10px;">文章管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">文章列表</el-menu-item>
                    <el-menu-item index="2-2">发布文章</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
                <i class="iconfont icon-type"></i>
                <span slot="title" style="margin-left:10px;">文章类别</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="iconfont icon-yonghuguanli"></i>
                <span slot="title" style="margin-left:10px;">用户管理</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "admin-menu"
    }
</script>