<template>
    <div class="admin-warp">
        <div class="common-desc">
            文章管理
        </div>

        <!-- // 搜索条件 -->
        <search-row @getParam="goSearch" />

        <!-- // 数据表格 -->
        <data-table :tableData="tableData" :loading="loading" @deleteArtical="deleteArtical" />

        <!-- // 分页 -->
        <my-pagination :pageSize="pageSize" :pageNum="pageNum" :total="total" @handleChange="handleChange" />

    </div>
</template>

<script>
    import { getArticals, deleteArtical } from '@/api/api'
    import myPagination from '@/components/myPagination'
    import searchRow from './searchRow'
    import dataTable from './dataTable'
    export default {
        name: 'articals',
        components: {
            searchRow,
            myPagination,
            dataTable
        },
        data(){
            return{
                tableData: [],
                loading: false,
                pageSize: 10,
                pageNum: 1,
                total: 0,
            }
        },
        methods: {
            // 查文章列表
            getArts(){
                this.loading = true
                getArticals({
                    pageSize: this.pageSize,
                    pageNum: this.pageNum
                }).then(res => {
                    this.loading = false
                    if(res.code === 100){
                        this.tableData = res.data.list
                        this.total = res.data.total
                    }
                })
            },
            // 分页
            handleChange(val){
                this.pageNum = val
                this.getArts()
            },
            // 搜索文章
            goSearch(param){
                console.log(param)
            },
            // 删除 文章
            deleteArtical(id){
                this.$confirm('删除的文章会被放入回收站，确定删除么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteArtical({ id: id, deleted: true }).then(res => {
                        if(res.code === 100){
                            this.$message.success('删除成功！')
                            this.getArts()
                        }else{
                            this.$message.error(res.message)
                        }
                    })
                }).catch()
            }
        },
        mounted() {
            this.getArts()
        }
    }
</script>