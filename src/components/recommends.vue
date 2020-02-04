<template>
    <div class="recommend-warp">
        <div class="recommend-list">
            <el-row>
                <el-col :span="21" class="indent8">
                    <span class="iconfont icon-dianying" style="margin:auto 10px auto 10px;"></span>电影推荐  
                </el-col>
                <el-col :span="3">
                    <span class="el-icon-right"></span>
                </el-col>
            </el-row>
        </div>

        <div class="recommend-list">
            <el-row>
                <el-col :span="21" class="indent8">
                    <span class="el-icon-platform-eleme" style="margin-right:10px;"></span>JavsScript秘籍
                </el-col>
                <el-col :span="3">
                    <span class="el-icon-right"></span>
                </el-col>
            </el-row>
        </div>

        <div class="recommend-list" @click='viewResume'>
            <el-row>
                <el-col :span="21" class="indent8">
                    <span class="el-icon-platform-eleme" style="margin-right:10px;"></span>个人简历
                </el-col>
                <el-col :span="3">
                    <span class="el-icon-right"></span>
                </el-col>
            </el-row>
        </div>

        <div class="recommend-list" @click="$router.push('/home/FELearningResources')">
            <el-row>
                <el-col :span="21" class="indent8">
                    <span class="el-icon-collection" style="margin-right:10px;"></span>前端资源
                </el-col>
                <el-col :span="3">
                    <span class="el-icon-right"></span>
                </el-col>
            </el-row>
        </div>

        <!-- // 网站公告 -->
        <website-notice />
    </div>
</template>

<script>
    import websiteNotice from './websiteNotice.vue'
    export default {
        name: 'recommends',
        components: {
            websiteNotice
        },
        methods: {
            viewResume(){
                window.open('http://www.gostephen.cn:8000')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .recommend-warp
        width 280px
        height auto
        overflow hidden
        float right
        .recommend-list
            width 100%
            height 44px
            margin-bottom 10px
            border-radius 6px
            overflow hidden
            background-color #909399
            color #fff
            font-size 16px
            line-height 44px
            cursor pointer
            span
                font-size 18px
            .indent8
                text-indent 8px
</style>