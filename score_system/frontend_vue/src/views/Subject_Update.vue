<template>
    <div>
        <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="subject id">
                <el-input v-model="ruleForm.id" readonly></el-input>
            </el-form-item>
            <el-form-item label="subject name" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="score" prop="score">
                <el-input v-model="ruleForm.score"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">edit</el-button>
                <el-button @click="resetForm('ruleForm')">reset</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id: '',
                    name: '',
                    score: ''
                },
                rules: {
                    name: [
                        { required: true, message: 'The subject name is required.', trigger: 'blur' },
                    ],
                    score: [
                        { required: true, message: 'The score is required.', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$alert(this.ruleForm.name + ' has been successfully edited in the system!'
                            , 'Congratulation!', {
                                confirmButtonText: 'Confirm',
                                callback: action => {
                                    this.$router.push('/Subject_Manager')
                                }
                            });
                        axios.put('http://192.168.91.102:30002/subject/update', this.ruleForm).then(function (resp) {
                            console.log(resp)
                        })
                    } else {
                        console.log('wrong submission');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {

            const _this = this
            axios.get('http://192.168.91.102:30002/subject/findById/' + this.$route.query.id).then(function (resp) {
                _this.ruleForm = resp.data
            })
        }


    }
</script>
