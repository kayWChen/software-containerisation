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
                    label="name"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="score"
                    label="score"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="operations"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">View</el-button>
                    <el-button type="text" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- add page numbers-->
        <el-pagination
                background
                layout="prev, pager, next"
                page-size="6"
                :total="total"
                @current-change="page"> <!-- current page -->
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                // alert(currentPage)
                const _this = this
                axios.get('http://api-service:8081/subject/findAll/'+currentPage+'/6').then(function (resp) {  //resp is the result
                    _this.tableData = resp.data.content
                    _this.total = resp.data.totalElements
                })
            },
        },
        created() {
            // alert(1)
            const _this = this
            axios.get('http://api-service:8081/subject/findAll/1/6').then(function (resp) {
                // console.log(resp.data)
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