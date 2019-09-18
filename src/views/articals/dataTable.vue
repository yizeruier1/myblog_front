<template>
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
                <el-button size="small" plain type="success" @click="$router.push('/admin/addArtical?id=' + scope.row._id)" v-if="!recover">编辑</el-button>
                <el-button size="small" type="danger" @click="$emit('deleteArtical', scope.row._id)" v-if="!recover">删除</el-button>

                <el-button plain size="small" type="info" @click="$emit('recoverArtical', scope.row._id)" v-if="recover">恢复</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: 'dataTable',
        props: {
            recover: {
                type: Boolean,
                default: false
            },
            tableData: Array,
            loading: Boolean
        }
    }
</script>