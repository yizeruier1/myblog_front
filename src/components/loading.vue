<template>
    <div class="loading-container">
        <div class="loading-warp">
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
            <div class="loading-ele"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading-box'
    }
</script>

<style lang="stylus" scoped>
    .loading-container
        width 100%
        height 250px
        display flex
        justify-content center
        align-items center
        .loading-warp
            width 50px
            height 50px
            position relative
            .loading-ele
                width 4px
                height 4px
                border-radius 2px
                background #68b2ce
                position absolute
                animation loading-animate linear 0.8s infinite
                -webkit-animation loading-animate linear 0.8s infinite
                &:nth-child(1)
                    left 24px
                    top 2px
                    animation-delay 0s
                &:nth-child(2)
                    left: 40px
                    top: 8px
                    animation-delay:0.1s
                &:nth-child(3)
                    left 47px
                    top 24px
                    animation-delay 0.1s
                &:nth-child(4)
                    left 40px
                    top 40px
                    animation-delay 0.2s
                &:nth-child(5)
                    left 24px
                    top 47px
                    animation-delay 0.4s
                &:nth-child(6)
                    left 8px
                    top 40px
                    animation-delay 0.5s
                &:nth-child(7)
                    left 2px
                    top 24px
                    animation-delay 0.6s
                &:nth-child(8)
                    left 8px
                    top 8px
                    animation-delay 0.7s
                @keyframes loading-animate
                    0%,40%,100% {transform: scale(1);}
                    20% {transform: scale(3);}

                @-webkit-keyframes loading-animate
                    0%,40%,100% {transform: scale(1);}
                    20% {transform: scale(3);}
</style>
