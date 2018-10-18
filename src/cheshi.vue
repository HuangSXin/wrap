<template>
    <div id="cheshi" @click="next">
        <div class="box">
            <el-steps :active="active" align-center>
                <el-step title="填写账号信息"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                active: 1
            }
        },
        mounted(){

        },
        methods:{
            next(){
                console.log(this.active)
                this.active+=1
            }
        }
    }
</script>

<style scoped lang="less">
    #cheshi{
        .box {
            color:red;
            width: 300px;
            margin: 0 auto;
        }
    }
</style>
