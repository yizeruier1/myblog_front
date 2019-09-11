<template>
    <div class="layout">
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
    import bolgHeader from '../components/bolg-header.vue'
    import bolgFooter from '../components/bolg-footer.vue'
    export default {
        components: {
            bolgHeader,
            bolgFooter
        },
        name: "layout",
        data(){
            return{

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .layout
        width 100%
        min-height 100vh
        overflow hidden
        .bolg-content
            width 988px
            min-height calc(100vh - 157px)
            margin 74px auto 10px auto
            background-color #fff
            padding 0 24px
            box-sizing border-box
            box-shadow 0 0 20px #eee
            border-radius 2px
</style>
