<template>
    <div class="index-warp">
        <!-- // 文章列表 -->
        <div class="index-artical-list">
            <artical-list v-for="item in list" :key="item.id" :articalData="item" />
        </div>

        <!-- // 推荐列表 -->
        <recommends />
    </div>
</template>

<script>
    import articalList from '../components/article-list'
    import recommends from '../components/recommends'
    import { getArticals } from '../api/api'
    export default {
        name: "index",
        components: {
            articalList,
            recommends
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