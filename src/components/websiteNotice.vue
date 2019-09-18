<template>
    <div class="websitenotice">
        <h4>博客公告</h4>
        <div>
            博客终于上线啦！前后台模板都在<a href="https://github.com/yizeruier1" target="_blank">GitHub</a>。
            本站图片来源<a href="https://pixabay.com/zh/" target="_blank">pixabay</a>。所有学习资源都在百度云盘。
            联系我可以发email：gostephen@163.com
        </div>
    </div>
</template>

<script>
    export default {
        name: 'websitenotice'
    }
</script>

<style lang="stylus" scoped>
    .websitenotice
        width 100%
        min-height 100px
        overflow hidden
        margin-top 30px
        h4
            color #409EFF
            font-size 18px
            text-align center
        div
            color #999
            font-size 14px
            margin-top 10px
            a
                color #67C23A
</style>