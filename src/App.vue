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
    // page title
    .common-desc
        width 100%
        height 50px
        line-height 50px
        margin 20px 0
        color #333
        font-size 20px
        text-align center
        font-weight 600
    .w-e-text-container
    .w-e-menu
        z-index 0 !important
</style>
