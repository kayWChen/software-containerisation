<template>
    <div>
      <!-- Bind variables through :model, bind validation rules through :rules, ref is the variable parameter passed to the method in the script (formName) -->
      <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="subject name" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="score" prop="score">
                <el-input v-model="ruleForm.score"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">upload</el-button>
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
                        this.$alert(this.ruleForm.name + ' has been successfully added into the system!'
                            , 'Congratulation!', {
                            confirmButtonText: 'Confirm',
                            callback: action => {
                              this.$router.push('/Subject_Manager')
                            }
                        });
                        axios.post('http://api-service:8081/subject/save', this.ruleForm).then(function(resp){
                            console.log(resp) //callback
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            test(){
                console.log(this.ruleForm)
            }
        }
    }
</script>

<style scoped>

</style>

