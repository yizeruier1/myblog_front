<template>
    <div class="index-warp">
        <!-- // 文章列表 -->
        <div class="index-artical-list">
            <artical-list v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item" />
        </div>

        <!-- // 推荐列表 -->
        <recommends />
    </div>
</template>

<script>
    import articalList from '../components/article-list'
    import recommends from '../components/recommends'
    export default {
        name: "index",
        components: {
            articalList,
            recommends
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="stylus" scoped>
    heightAuto()
        height auto
        overflow hidden

    .index-warp
        width 100%
        padding 30px 0
        heightAuto()
        margin 0 auto
        .index-artical-list
            width 620px
            heightAuto()
            float left
</style>