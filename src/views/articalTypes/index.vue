<template>
    <div class="admin-warp">
        <div class="common-desc">
            文章分类管理
        </div>
        <el-row>
            <el-col :span="24" style="text-align:right;">
                <el-button :size="UISize" type="primary" @click="showAdd">新增分类</el-button>
            </el-col>
        </el-row>
        
        <!-- // 数据表格 -->
        <data-table :tableData="tableData" :loading="loading" @handleEdit="handleEdit" @handleDelete="handleDelete" />

        <my-pagination :pageSize="pageSize" :pageNum="pageNum" :total="total" @handleChange="handleChange" />

        <!-- // 弹窗 编辑和新增 -->
        <el-dialog :title="formType === 1 ? '添加分类' : '编辑分类'" width="400px" :visible.sync="showAddDialog">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
                <el-form-item label="分类key" prop="key">
                    <el-input v-model="ruleForm.key" autocomplete="off" :size="UISize"></el-input>
                </el-form-item>

                <el-form-item label="分类名" prop="value">
                    <el-input v-model="ruleForm.value" autocomplete="off" :size="UISize"></el-input>
                </el-form-item>

                <el-form-item label="颜色" prop="color">
                    <el-select v-model="ruleForm.color" :size="UISize" clearable style="width:100%;">
                        <el-option :value="item" :label="item" v-for="item in colorMap" :key="item">
                            <span :class="'type-' + item">{{ item }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="showAddDialog = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd" :loading="addLoading">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { getArticalTypes, addArticalTypes, deleteArticalTypes, updateArticalTypes } from '@/api/api'
    import myPagination from '@/components/myPagination'
    import dataTable from './dataTable'
    export default {
        name: 'articalTypes',
        components: {
            myPagination,
            dataTable
        },
        data(){
            return{
                tableData: [],
                loading: false,
                addLoading: false,
                pageSize: 10,
                pageNum: 1,
                total: 0,
                ruleForm: {
                    key: '',
                    value: '',
                    color: ''
                },
                rules: {
                    key: [
                        { required: true, message: '请输入key', trigger: 'blur' }
                    ],
                    value: [
                        { required: true, message: '请输入分类名', trigger: 'blur' }
                    ]
                },
                showAddDialog: false,
                // 标记 新增还是 编辑  1为新增
                formType: 1,
                // 文章分类  colorMap
                colorMap: ['primary', 'success', 'info', 'warning', 'danger']
            }
        },
        methods: {
            // 查询数据列表
            getData(){
                let param = {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum
                }
                this.loading = true
                getArticalTypes(param).then(res => {
                    if(res.code === 100){
                        this.tableData = res.data.list,
                        this.total = res.data.total
                    }else{
                        this.$message.error(res.message)
                    }
                    this.loading = false
                })
            },
            // 分页
            handleChange(val){
                this.pageNum = val
                this.getData()
            },
            // 删除
            handleDelete(row){
                this.$confirm(`确定删除 ${row.value} 么?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteArticalTypes({ _id: row._id }).then(res => {
                        if(res.code === 100){
                            this.$message.success('删除成功')
                            this.getData()
                        }else{
                            this.$message.error(res.message)
                        }
                    })
                }).catch(() => {})
            },
            // 修改
            handleEdit(row){
                this.ruleForm = {
                    ...row
                }
                this.formType = 2
                this.showAddDialog = true
            },
            // 提交
            handleAdd(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        const cb = this.formType === 1 ? addArticalTypes : updateArticalTypes
                        this.addLoading = true
                        cb(this.ruleForm).then(res => {
                            if(res.code === 100){
                                this.$message.success(`${this.formType === 1 ? '增加' : '修改'}成功`)
                                this.getData()
                            }else{
                                this.$message.error(res.message)
                            }
                            this.addLoading = false
                            this.showAddDialog = false
                        })
                    }
                })
            },
            // 显示新增弹窗
            showAdd(){
                this.formType = 1
                this.showAddDialog = true
                this.ruleForm = {
                    key: '',
                    value: ''
                }
            }
        },
        mounted() {
            this.getData()   
        }
    }
</script>