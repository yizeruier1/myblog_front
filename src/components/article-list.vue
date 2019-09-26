<template>
    <div class="artical-list">
        <div class="artical-info">
            <!-- // 文章标题 -->
            <div class="artical-title" @click="$router.push('/home/articalDetail?id=' + articalData._id)">
                {{ articalData.title }}
            </div>

            <!-- // 文章简介 -->
            <p class="artical-desc">
                {{ articalData.desc }}
            </p>

            <!-- // 浏览量  分类标签等 -->
            <div class="articla-tags">
                <el-row>
                    <el-col :span="4">
                        <span class="iconfont icon-liulanliang"></span>  {{ articalData.views }}
                    </el-col>

                    <el-col :span="6">
                        <span class="iconfont icon-bi" style="font-size:12px;"></span>  {{ articalData.author }}
                    </el-col>

                    <el-col :span="14" style="text-align:right;">
                        <el-tag size="small" :type="item.color" v-for="item in JSON.parse(articalData.types)" :key="item._id" style="margin-right:10px;">{{ item.value }}</el-tag>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="artical-img">
            <img :src="articalData.coverImg" alt="" @click="$router.push('/home/articalDetail?id=' + articalData._id)" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "artical-list",
        props: ['articalData']
    }
</script>

<style lang="stylus" scoped>

    .artical-list
        width 100%
        min-height 140px
        box-sizing border-box
        padding 20px 0
        border-bottom 1px solid #f0f0f0
        overflow hidden
        .artical-info
            width 458px
            min-height 100px
            overflow hidden
            float left
            .artical-title
                width 100%
                height 26px
                line-height 26px
                font-size 18px
                color #333
                font-weight 700
                margin-bottom 4px
                cursor pointer
                text-overflow(1)
            .artical-desc
                width 100%
                height 48px
                margin-bottom 8px
                color #999
                font-size 13px
                line-height 24px
                text-overflow(2)
            .articla-tags
                width 100%
                height 24px
                line-height 24px
                color #b4b4b4
                font-size 12px
                span
                    font-size 14px
        .artical-img
            display block
            width 150px
            height 100px
            box-sizing border-box
            border 1px solid #f0f0f0
            float right
            cursor pointer
            overflow hidden
            border-radius 6px
            img
                display block
                width 100%
                height auto
</style>