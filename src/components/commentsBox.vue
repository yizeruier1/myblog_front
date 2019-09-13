<template>
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
    
</style>