<template>
    <div class="comments-list">
        <div class="comments-title">评论列表({{ commentData.total }})</div>

        <!-- // 列表 -->
        <div class="comments-item" v-for="item in commentData.list" :key="item._id">
            <div class="comments-item-ava">
                <img :src="item.userAva" alt="">
            </div>

            <div class="comments-item-info">
                <div class="comments-item-username">
                    {{ item.userName }}
                </div>

                <div class="comments-item-content">
                    {{ item.content }}
                </div>

                <el-row class="comments-item-actions">
                    <el-col :span="8">
                        {{ item.createTime | formateTime }}
                    </el-col>
                    <el-col :span="16" style="text-align:right;">
                        <span><i class="iconfont icon-dianzan"></i>  点赞({{ item.coolNum }})</span>
                        <span>踩({{ item.clicks }})</span>
                        <span>回复({{ item.reply ? '' : 0 }})</span>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'commentsList',
        props: ['commentData'],
        data(){
            return{

            }
        },
        filters: {
            formateTime(time){
                return moment(time).format('YYYY-MM-DD hh:mm')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .comments-list
        width 100%
        height auto
        overflow hidden
        margin-top 10px
        .comments-title
            color #333
            font-size 16px
            font-weight 600
            margin 10px 0
        .comments-item
            width 100%
            min-height 112px
            overflow hidden
            box-sizing border-box
            border-top 1px solid #e8e8e8
            padding 14px 0
            .comments-item-ava
                width 33px
                height 33px
                border-radius 50%
                float left
                border 1px solid hsla(0,0%,93%,.6)
                overflow hidden
                cursor pointer
                img
                    width 100%
                    height 100%
            .comments-item-info
                width auto
                min-height 74px
                margin-left 46px
                .comments-item-username
                    height 18px
                    line-height 18px
                    font-size 14px
                    color #09F
                    margin-bottom 10px
                    cursor pointer
                .comments-item-content
                    width 100%
                    min-height 22px
                    line-height 22px
                    font-size 13px
                    color #333
                    word-wrap break-word
                    margin-bottom 10px
                .comments-item-actions
                    height 18px
                    line-height 18px
                    color #999
                    font-size 12px
                    span 
                        cursor pointer
                        margin-left 12px
                        transition color ease .2s
                        &:hover
                            color  #333
</style>