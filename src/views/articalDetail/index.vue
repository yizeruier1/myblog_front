<template>
    <div class="artical-warp">
        <h2 class="artical-d-title">
            {{ articalData.title }}
        </h2>
        <el-row class="artical-d-info">
            <el-col :span="24">
                <span class="iconfont icon-bi" style="font-size:12px;"></span>  {{ articalData.author }}
                <span class="iconfont icon-riqi" style="margin-left:16px;"></span>  {{ articalData.createTime }}
            </el-col>
        </el-row>

        <!-- // 文章内容 -->
        <div class="artical-d-content" v-html="articalData.content" v-highlight v-if="articalData.content"></div>
        <loading-box v-else />

        <div class="artical-d-types">
            <el-tag size="small" :type="item.color" v-for="item in articalData.types" :key="item._id" style="margin-right:10px;">{{ item.value }}</el-tag>
        </div>

        <!-- // 留言列表 -->
        <comments-list :commentData="commentData" v-if="commentData.total > 0" />

        <!-- // 留言板 -->
        <comments-box @postSuccess="getList" />
    </div>
</template>

<script>
    import moment from 'moment'
    import commentsBox from '@/components/commentsBox'
    import commentsList from '@/components/commentsList'
    import loadingBox from '@/components/loading'
    import { getArticalDetail, getComments } from '@/api/api'
    export default {
        name: 'articalDetail',
        components: {
            commentsBox,
            commentsList,
            loadingBox
        },
        data(){
            return{
                articalData: {},
                commentData: {},
                pageNum: 1,
                pageSize: 10
            }
        },
        methods: {
            // 查详情
            getDetail(){
                getArticalDetail({
                    id: this.$route.query.id
                }).then(res => {
                    document.title = res.data.title
                    this.articalData = res.data
                    this.articalData.types = JSON.parse(res.data.types)
                    this.articalData.createTime = moment(res.data.createTime).format('YYYY年MM月DD日 dddd hh:mm')
                })
            },
            // 查列表
            getList(){
                getComments({ id: this.$route.query.id }).then(res => {
                    if(res.code === 100){
                        this.commentData = res.data
                    }
                })
            }
        },
        mounted() {
            this.getDetail()
            this.getList()
        },
        created() {
            moment.locale('zh-cn')
        },
        destroyed() {
            document.title = "Stephen的博客"
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
            p
                line-height 24px
        .artical-d-types
            border-top 1px dashed #2d8cf0
            margin-top 20px
            width 100%
            height 60px
            line-height 60px
</style>