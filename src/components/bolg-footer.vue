<template>
    <footer class="footer">
        <p class="footer-email">@copyright：京ICP备19041411号</p>
        <div class="footer-icons">
            <!-- // 微信公众号 -->
            <a href="https://github.com/yizeruier1" target="_blank" class="footer-icon-link">
                <span class="iconfont icon-weixin footer-icon-item"></span>
            </a>
            
            <!-- // 简述连接 -->
            <el-tooltip effect="light" content="https://www.jianshu.com/u/cd2bd59f7807" placement="top">
                <a href="https://www.jianshu.com/u/cd2bd59f7807" target="_blank" class="footer-icon-link">
                    <span class="footer-icon-item" style="font-size:22px;">
                        简
                    </span>
                </a>
            </el-tooltip>
            
            <!-- // github -->
            <el-tooltip effect="light" content="https://github.com/yizeruier1" placement="top">
                <a href="https://github.com/yizeruier1" target="_blank" class="footer-icon-link">
                    <span class="iconfont icon-github footer-icon-item"></span>
                </a>
            </el-tooltip>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "bolg-footer"
    }
</script>

<style lang="stylus" scoped>
    common-lay()
        display inline-block
        width 30px
        height 30px

    .footer
        width 100%
        height 100px
        box-sizing border-box
        background-color #000
        border-top 1px solid hsla(0,0%,93%,.6)
        overflow hidden
        padding 20px 0
        font-size 14px
        color #fff
        text-align center
        .footer-email
            height 32px
        .footer-icons
            height 30px
            line-height 30px
            text-align center
            .footer-icon-link
                common-lay()
                margin-right 20px
            .footer-icon-item
                common-lay()
                box-sizing border-box
                font-size 26px
                color #bbb
                border-radius 50%
                transition color .2s ease
                cursor pointer
                &:hover
                    color #fff
</style>