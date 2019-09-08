<template>
    <div id="app">
        <bolg-header />

        <div class="bolg-content">
            <transition name="el-fade-in-linear">
                <router-view />
            </transition>
        </div>

        <bolg-footer />
    </div>
</template>

<script lang="js">
    import bolgHeader from './components/bolg-header.vue'
    import bolgFooter from './components/bolg-footer.vue'
    export default {
        components: {
            bolgHeader,
            bolgFooter
        },
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
        .bolg-content
            width 940px
            min-height calc(100vh - 157px)
            margin 57px auto 0 auto
</style>
