<template>
    <div class="mypagination">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total"
            background>
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'myPagination',
        props: ['pageNum', 'pageSize', 'total'],
        methods: {
            handleCurrentChange(val){
                this.$emit('handleChange', val)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .mypagination
        width 100%
        height 30px
        margin 20px 0
        text-align center
</style>