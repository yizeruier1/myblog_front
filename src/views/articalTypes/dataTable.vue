<template>
    <el-table :data="tableData" stripe style="width: 100%" v-loading="loading">
        <el-table-column prop="key" label="分类号" align="center"></el-table-column>
        <el-table-column prop="value" label="分类名称" align="center"></el-table-column>
        <el-table-column prop="color" label="颜色" align="center">
            <template slot-scope="scope">
                <span :class="'type-' + scope.row.color">{{ scope.row.color }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button size="small" plain type="success" @click="$emit('handleEdit', scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="$emit('handleDelete', scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: 'dataTable',
        props: ['tableData', 'loading']
    }
</script>