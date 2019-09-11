<template>
    <div class="artical-warp">
        <h2 class="artical-d-title">
            个人博客开发系列：Vue.js + Koa.js项目中使用JWT认证
        </h2>
        <el-row class="artical-d-info">
            <el-col :span="24">
                项目实战    2017年12月02日 星期六 晚上
            </el-col>
        </el-row>

        <!-- // 文章内容 -->
        <div class="artical-d-content">
            asda
        </div>

        <div class="artical-d-types">
            <el-tag size="small">html</el-tag>&nbsp;&nbsp;
            <el-tag type="success" size="small">js</el-tag>&nbsp;&nbsp;
            <el-tag type="warning" size="small">css</el-tag>
        </div>

        <!-- // 留言板 -->
        <message-box />
    </div>
</template>

<script>
    import messageBox from '../components/messageBox'
    export default {
        name: 'articalDetail',
        components: {
            messageBox
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .artical-warp
        width 100%
        min-height 100vh
        overflow hidden
        .artical-d-title
            width 100%
            height 40px
            margin 30px 0 20px 0
            color #333
            font-size 30px
            text-align center
            font-weight normal
            text-overflow(1)
        .artical-d-info
            text-align center
            color #888
            font-size 14px
            margin-bottom 30px
        .artical-d-content
            width 100%
            height auto
            overflow hidden
        .artical-d-types
            border-top 1px dashed #2d8cf0
            margin-top 20px
            width 100%
            height 60px
            line-height 60px
</style>