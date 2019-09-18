<template>
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
                <el-option v-for="item in articalTypes" :key="item.value" :label="item.value" :value="item.value"></el-option>
            </el-select>
        </el-col>
        <el-col :span="4" style="margin-left:20px;">
            <el-button :size="UISize" type="primary" @click="$emit('getParam', searchParam)">搜索</el-button>
        </el-col>
    </el-row>
</template>

<script>
    import { getArticalTypes } from '@/api/api'
    export default {
        name: 'searchRow',
        data(){
            return{
                searchParam: {
                    title: '',
                    types: []
                },
                articalTypes: []
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
        },
        mounted() {
            this.getTypes()
        }
    }
</script>