<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="js">
    export default {
        name: "app",
        data(){
            return{

            }
        }
    }
</script>

<style lang="stylus">
    body,p,ul,li
        margin 0
        padding 0
    #app
        width 100%
        min-height 100vh
        overflow hidden
        font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        background-color #f4f4f4
    .w-e-text-container
    .w-e-menu
        z-index 0 !important
    .el-textarea__inner
        font-size 14px !important
        color #666 !important
        border 1px solid rgba(45,140,240,0.4) !important
        line-height 24px !important
</style>
