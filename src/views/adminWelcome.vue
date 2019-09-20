<template>
    <div class="admin-welcome" :class="bgclass">
        <h1>Welcome to Stephen Bolg！</h1>
    </div>
</template>

<script>
    export default {
        name: 'admin-welcome',
        data(){
            return{
                bgclass: ''
            }
        },
        created() {
            const num = Math.floor(Math.random() * 5) + 1
            this.bgclass = `wel-bg${num}`
        }
    }
</script>

<style lang="stylus" scoped>
    .admin-welcome
        width 100%
        height 100%
        background-size cover
        overflow hidden
        h1
            color #2d8cf0
            font-size 60px
            margin 15% auto auto auto
            text-align center
            opacity 0.7
    .wel-bg1
        background url('../assets/images/welcome-img/1.jpg') no-repeat center center
    .wel-bg2
        background url('../assets/images/welcome-img/2.jpg') no-repeat center center
    .wel-bg3
        background url('../assets/images/welcome-img/3.jpg') no-repeat center center
    .wel-bg4
        background url('../assets/images/welcome-img/4.jpg') no-repeat center center
    .wel-bg5
        background url('../assets/images/welcome-img/5.jpg') no-repeat center center
</style>