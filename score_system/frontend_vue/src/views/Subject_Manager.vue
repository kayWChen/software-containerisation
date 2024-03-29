<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="id"
                    label="id"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="subject name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="score"
                    width="120">
            </el-table-column>
            <el-table-column>
                    fixed="left"
                    label="Operations"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">edit</el-button>
                    <el-button @click="deleteSubject(scope.row)" type="text" size="small">delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- add pages-->
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            edit(row) {

                this.$router.push({
                    path: '/Update',
                    query:{
                        id: row.id
                    }
                })
            },

            deleteSubject(row) {
                const _this = this
                axios.delete('http://api-service:8081/subject/deleteById/' + row.id).then(function (resp){
                    console.log(resp)
                    _this.$alert('The subject ' + row.name + ' has been successfully deleted in the system!'
                        , 'Congratulation!', {
                            confirmButtonText: 'Confirm',
                            callback: action => {
                                window.location.reload()
                            }
                        })
                })
            },

            page(currentPage){
                const _this = this
                axios.get('http://api-service:8081/subject/findAll/'+currentPage+'/6').then(function (resp) {
                    _this.tableData = resp.data.content
                    _this.total = resp.data.totalElements
                })
            },
        },
        created() {
            const _this = this
            axios.get('http://api-service:8081/subject/findAll/1/6').then(function (resp) {
                _this.tableData = resp.data.content
                _this.total = resp.data.totalElements
            })
        },

        data() {
            return {
                total: null,
                tableData: [

                ]
            }
        }
    }
</script>