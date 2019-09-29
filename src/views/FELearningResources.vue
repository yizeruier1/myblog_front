<template>
    <div class="learn-resource-warp">
        <div class="common-desc">
            资源共享  一起进步
        </div>

        <el-row class="learn-resource-row" v-for="item in resource" :key="item.name">
            <el-col :span="3">
                {{ item.name }}：
            </el-col>
            <el-col :span="21">
                <a :href="item.href" target="_blank">{{ item.href }}</a>
            </el-col>
        </el-row>

        <p style="font-size:14px;color:#666;text-align:center;margin-top:50px;">
            Tip：现在很多学习资源在B站和咸鱼上都有。
        </p>
    </div>
</template>

<script>
    export default {
        name: '',
        data(){
            return{
                resource: [
                    { name: 'vue 相关', href: 'https://pan.baidu.com/s/1xmmmTkj0a7XWTAuPlteD0w' },
                    { name: 'react 相关', href: 'https://pan.baidu.com/s/1w1xTBjtrjUecle82hp9OkA' },
                    { name: 'webpack 相关', href: 'https://pan.baidu.com/s/106AfJiYQBOdAMMDOyIvYuQ' },
                    { name: 'MVVM 原理', href: 'https://pan.baidu.com/s/1yIG8nDlTgQOVCI3u1W2EWQ' },
                    { name: 'koa 和 node', href: 'https://pan.baidu.com/s/1-k3-dh-63VvmrcuyIdyxMg' },
                    { name: 'flutter 相关', href: 'https://pan.baidu.com/s/1rfwwO3OEZqpVe0Scy4V0HA' },
                    { name: '单元测试', href: 'https://pan.baidu.com/s/1MtiZa37sh9nqSi4cacgzbg' },
                    { name: 'jenkin', href: 'https://pan.baidu.com/s/1UeTjw1PIh2GeDxHyjoDp3A' },
                    { name: '一堆pdf电子书', href: 'https://pan.baidu.com/s/1go_SSF9DtJAd-HBKhaRlfg' },
                    { name: 'vue-cli', href: 'https://pan.baidu.com/s/1rf9_gmLKJY4RGd3RUksxCQ' },
                    { name: 'python 相关', href: 'https://pan.baidu.com/s/14WIS1FHHtg6muxlzR53KRw' },
                    { name: 'PSCC2018', href: 'https://pan.baidu.com/s/1PKW60k9Y0gvbZ7YjN3Lk0A' }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .learn-resource-warp
        width 100%
        height auto
        overflow hidden
        .learn-resource-row
            height 36px
            line-height 36px
            font-size 14px
            color #999
            a
                color #409eff
</style>