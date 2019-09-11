<template>
    <div class="artical-list">
        <div class="artical-info">
            <!-- // 文章标题 -->
            <div class="artical-title" @click="$router.push('/home/articalDetail')">
                一个合格的中级前端工程师要掌握的JavaScript 技巧
            </div>

            <!-- // 文章简介 -->
            <p class="artical-desc">
                原理通过 reduce 遍历数组，遇到数组的某个元素仍是数组时，通过 ES6 的扩展运算符对其进行降维（ES5 可以使用 concat 方法），而这个数组元素可能内
            </p>

            <!-- // 浏览量  分类标签等 -->
            <div class="articla-tags">
                <el-row>
                    <el-col :span="6">
                        <span class="el-icon-s-promotion"></span>  123
                    </el-col>

                    <el-col :span="6">
                        Stephen
                    </el-col>

                    <el-col :span="12" style="text-align:right;">
                        <el-tag size="small">html</el-tag>&nbsp;&nbsp;
                        <el-tag type="success" size="small">js</el-tag>&nbsp;&nbsp;
                        <el-tag type="warning" size="small">css</el-tag>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="artical-img">
            <img src="../assets/images/1.jpg" alt="" @click="$router.push('/home/articalDetail')" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "artical-list",
        data(){
            return{

            }
        }
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
            border-bottom 1px solid #f0f0f0
            float right
            cursor pointer
            overflow hidden
            border-radius 6px
            img
                display block
                width 100%
                height auto
</style>