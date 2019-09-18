<template>
    <div class="login-warp">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'authBox'
    }
</script>

<style lang="stylus">
    .login-warp
        width 100%
        height 100vh
        background url('../..//assets/images/login-bg.jpg') no-repeat center center
        background-size cover
        both-center()
        .login-form-box
            width 340px
            height 320px
            background-color #fff
            border-radius 6px
            border 1px solid #f0f0f0
            box-sizing border-box
            padding 0 50px
            .login-title
                width 100%
                height 60px
                line-height 60px
                color #969696
                text-align center
                margin-bottom 20px
            .regi-title
                height 50px
                line-height 50px
                margin-bottom 10px
</style>