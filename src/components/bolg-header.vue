<template>
    <header class="header">
        <div class="header-main">
            <el-row>
                <!-- // 头像 -->
                <el-col :span="2">
                    <img src="../assets/images/ava.jpg" alt="博客logo" class="bold-logo" @click="$router.push('/')" />
                </el-col>
                <!-- // 名字 -->
                <el-col :span="4" class="my-name">
                    Stephen
                </el-col>

                <el-col :span="9" style="padding-top:6px;">
                    <div id="he-plugin-simple"></div>
                </el-col>
                <!-- // 搜索框 -->
                <el-col :span="9" class="my-name" style="text-align:right;">
                    <el-input placeholder="全站搜索" v-model="searchText" :size="UISize" class="search-input">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>

        <div class="header-menu">
            <el-button type="text" :size="UISize" @click="$router.push('/login')" v-if="!logined">去登录</el-button>
            <header-menu v-else />
        </div>
    </header>
</template>

<script>
    import headerMenu from './header-menu.vue'
    import { mapState } from 'vuex'
    export default {
        name: "bold-header",
        components: {
            headerMenu
        },
        data(){
            return{
                searchText: ''
            }
        },
        computed: {
            ...mapState([
                'logined'
            ])
        }
    }
</script>

<style lang="stylus" scoped>
    $headerH = 56px

    .header
        width 100%
        height $headerH
        border-bottom 1px solid hsla(0,0%,93%,.6)
        background-color hsla(0,0%,100%,.9)
        position fixed
        left 0
        top 0
        z-index 1
        .header-menu
            min-width 100px
            height $headerH
            line-height $headerH
            position absolute
            right 50px
            top 0
        .header-main
            width 940px
            height $headerH
            margin 0 auto
            .bold-logo
                display block
                width 40px
                height 40px
                border-radius 50%
                margin-top 8px
                cursor pointer
            .my-name
                line-height $headerH
                font-size 20px
            .search-input
                width 300px
</style>