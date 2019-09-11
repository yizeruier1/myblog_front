<template>
    <!-- <div class="messagebox" contenteditable="true"></div> -->
    <div style="margin-top:20px;">
        <el-input
            type="textarea"
            placeholder="评论一下吧"
            v-model="message"
            :maxlength="500"
            show-word-limit
            :rows="5"
            >
        </el-input>

        <el-row>
            <el-col :span="24" style="text-align:right;margin-top:10px;">
                <el-button type="primary" round size="small" :loading="submiting">发  送</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'messageBox',
        data(){
            return{
                message: '',
                submiting: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .messagebox
        display block
        width 100%
        min-height 150px
        border 1px solid rgba(45,140,240,0.4)
        border-radius 8px
        margin-top 20px
        box-sizing border-box
        padding 12px
        font-size 14px
        color #666
        line-height 24px
        outline none
</style>