<template>
    <div class="admin-warp">
        <div class="common-desc">
            文章管理
        </div>

        <el-row class="search-row">
            <el-col :span="2">
                文章名称：
            </el-col>
            <el-col :span="6">
                <el-input v-model="searchParam.title" :size="UISize" placeholder="输入名称关键字"></el-input>
            </el-col>
            <el-col :span="2" style="margin-left:20px;">
                分类名称：
            </el-col>
            <el-col :span="5">
                <el-select v-model="searchParam.types" :size="UISize" multiple clearable style="width:100%;" collapse-tags placeholder="输入文章分类">
                    <el-option v-for="item in articalTypes" :key="item.value" :label="item.value" :value="item"></el-option>
                </el-select>
            </el-col>
            <el-col :span="4" style="margin-left:20px;">
                <el-button :size="UISize" type="primary">搜索</el-button>
            </el-col>
        </el-row>

        <!-- // 数据表格 -->
        <el-table :data="tableData" stripe style="width:100%;margin-top:20px;" v-loading="loading">
            <el-table-column prop="title" label="文章名称" align="center">
                <template slot-scope="scope">
                    <span style="cursor:pointer;" @click="$router.push('/home/articalDetail?id=' + scope.row._id)">
                        {{ scope.row.title }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="types" label="文章分类" align="center">
                <template slot-scope="scope">
                    <span :class="'type-' + item.color" v-for="(item, index) in JSON.parse(scope.row.types)" :key="item.id">
                        {{ item.value }}{{ index === JSON.parse(scope.row.types).length - 1 ? '' : ' | ' }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="views" label="浏览量" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="small" plain type="success" @click="$router.push('/admin/addArtical?id=' + scope.row._id)">编辑</el-button>
                    <el-button size="small" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <my-pagination :pageSize="pageSize" :pageNum="pageNum" :total="total" @handleChange="handleChange" />

    </div>
</template>

<script>
    import { getArticalTypes, getArticals } from '../api/api'
    import myPagination from '../components/myPagination'
    export default {
        name: 'articals',
        components: {
            myPagination
        },
        data(){
            return{
                searchParam: {
                    title: '',
                    types: []
                },
                articalTypes: [],
                tableData: [],
                loading: false,
                pageSize: 10,
                pageNum: 1,
                total: 0,
            }
        },
        methods: {
            // 获取文章全部分类
            getTypes(){
                getArticalTypes({ pageSize: 50, pageNum: 1 }).then(res => {
                    if(res.code === 100){
                        this.articalTypes = res.data.list
                    }
                })
            },
            // 查文章列表
            getArts(){
                this.loading = true
                getArticals().then(res => {
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
        },
        mounted() {
            this.getTypes()
            this.getArts()
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>