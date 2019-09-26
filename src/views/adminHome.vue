<template>
    <div>
        <el-container>
            <!-- // 左侧导航菜单 -->
            <admin-menu />

            <!-- // 主体内容 -->
            <el-main style="background-color:#fff;padding:0;" class="admin-layout-height">
                <transition name="fade-transform" mode="out-in">
                    <router-view />
                </transition>
            </el-main>
            
        </el-container>
        <!-- // 展示个人信息的 drawer -->
        <admin-drawer />
        <bolg-footer />
    </div>
</template>

<script>
    import adminMenu from '../components/admin-menu'
    import bolgFooter from '../components/bolg-footer.vue'
    import adminDrawer from '../components/admin-drawer'
    export default {
        name: 'adminHome',
        components: {
            bolgFooter,
            adminMenu,
            adminDrawer
        }
    }
</script>

<style lang="stylus">
    .admin-layout-height
        min-height calc(100vh - 100px)
</style>