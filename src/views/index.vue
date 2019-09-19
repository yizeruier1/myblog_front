<template>
    <div class="index-warp">
        <!-- // 文章列表 -->
        <div class="index-artical-list" v-if="list.length === 0">
            <list-skeleton v-for="item in [1,2,3,4,5]" :key="item" />
        </div>
        <div class="index-artical-list" v-else>
            <artical-list v-for="item in list" :key="item.id" :articalData="item" />
        </div>

        <!-- // 推荐列表 -->
        <recommends />
    </div>
</template>

<script>
    import articalList from '@/components/article-list'
    import recommends from '@/components/recommends'
    import listSkeleton from '@/components/list-skeleton'
    import { getArticals } from '@/api/api'
    export default {
        name: "index",
        components: {
            articalList,
            recommends,
            listSkeleton
        },
        data(){
            return{
                list: []
            }
        },
        methods: {
            getList(){
                getArticals().then(res => {
                    if(res.code === 100){
                        this.list = res.data.list
                    }
                })
            }
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
</style>