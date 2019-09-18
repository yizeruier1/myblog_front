<template>
    <div class="admin-warp">
        <div class="common-desc">
            文章回收站
        </div>

        <!-- // 搜索条件 -->
        <search-row @getParam="goSearch" />

        <!-- // 数据表格 -->
        <data-table :tableData="tableData" :loading="loading" :recover="true" @recoverArtical="recoverArtical" />

        <!-- // 分页 -->
        <my-pagination :pageSize="pageSize" :pageNum="pageNum" :total="total" @handleChange="handleChange" />
        
    </div>
</template>

<script>
    import { getArticals, deleteArtical } from '@/api/api'
    import myPagination from '@/components/myPagination'
    import searchRow from '../articals/searchRow'
    import dataTable from '../articals/dataTable'
    export default {
        name: 'deletedArtical',
        components: {
            searchRow,
            myPagination,
            dataTable
        },
        data(){
            return{
                tableData: [],
                loading: false,
                total: 0,
                pageSize: 10,
                pageNum: 1,
                total: 0
            }
        },
        methods: {
            // 查文章列表
            getArts(){
                this.loading = true
                getArticals({ deleted: true }).then(res => {
                    this.loading = false
                    if(res.code === 100){
                        this.tableData = res.data.list
                        this.total = res.data.total
                    }
                })
            },
            // 搜索文章
            goSearch(param){
                console.log(param)
            },
            // 恢复文章
            recoverArtical(id){
                deleteArtical({ id: id, deleted: false }).then(res => {
                    if(res.code === 100){
                        this.$message.success('恢复成功！')
                        this.getArts()
                    }else{
                        this.$message.error(res.message)
                    }
                })
            },
            // 分页
            handleChange(val){
                this.pageNum = val
                this.getArts()
            }
        },
        mounted() {
            this.getArts()
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>