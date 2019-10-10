<template>
    <div class="index-warp">
        <!-- // 文章列表 -->
        <div class="index-artical-list" v-if="articals.list && articals.list.length === 0">
            <list-skeleton v-for="item in [1,2,3,4,5]" :key="item" />
        </div>
        <div class="index-artical-list" v-if="articals.list && articals.list.length > 0">
            <artical-list v-for="item in articals.list" :key="item.id" :articalData="item" />

            <!-- // 加载更多 -->
            <div class="index-view-more" @click="loadMore">
                {{ articals.list && articals.list.length < articals.total ? '加载更多...' : '没有更多了' }}
            </div>
        </div>
        <!-- // 未找到搜索内容 -->
        <div class="sea-no-res" v-if="!articals.list">
            没有搜索到东西 ~ ~
        </div>

        <!-- // 推荐列表 -->
        <recommends />
    </div>
</template>

<script>
    import articalList from '@/components/article-list'
    import recommends from '@/components/recommends'
    import listSkeleton from '@/components/list-skeleton'
    import { mapState, mapActions, mapMutations } from 'vuex'
    export default {
        name: "index",
        components: {
            articalList,
            recommends,
            listSkeleton
        },
        methods: {
            ...mapActions([
                'getList',
                'loadMore'
            ])
        },
        computed: {
            ...mapState([
                'articals'
            ])
        },
        mounted(){
            this.getList()
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
            .index-view-more
                width 100%
                height 40px
                border-radius 20px
                background-color #a5a5a5
                text-align center
                line-height 40px
                color #fff
                cursor pointer
                margin-top 30px
                font-size 14px
                transition all .2s ease
                &:hover
                    background-color #9b9b9b
        .sea-no-res
            width 620px
            height 100px
            line-height 100px
            color #9b9b9b
            text-align center
            font-size 16px
</style>