<template>
    <div id="login">
        <div class="header">
            <img src="../../img/LOGO.png" alt="" class="logo_img">
        </div>
        <div class="login_content">
            <div class="content_left"></div>
            <div class="content_right">
                <h1>使用涂鸦账号登录</h1>
                <el-form   label-width="100px" class="demo-ruleForm">
                    <!--手机号或邮箱-->
                    <el-input v-model="inputUser" placeholder="手机号或邮箱" class="phon"></el-input>
                    <!--密码-->
                    <el-form-item label="" prop="pass">
                        <el-input type="password" v-model="password" autocomplete="off" placeholder="密码"
                                  class="password"></el-input>
                    </el-form-item>
                    <!--勾选协议-->
                    <div class="checkoutAgreement" @click="checkoutAgreement">
                        <el-checkbox v-model="checked"></el-checkbox>
                        <span><i>阅读并同意</i> <a href="https://auth.tuya.com/service" target="_blank"
                                              @click.stop="termsOfService">《服务条款》</a><a href="https://auth.tuya.com/legal" target="_blank">《法律声明及隐私权政策》</a></span>
                    </div>
                    <!--勾选协议-->
                    <!--点击同意协议并注册-->
                    <el-row>
                        <el-button type="primary" class="click_registration" @click="click_login">登录</el-button>
                    </el-row>
                    <!--点击同意协议并注册-->
                    <!--点击跳到注册-->
                    <p class="tips">
                        <span class="toRegistration">还没有账号，
                            <router-link :to="{name:'/registration',path:'/registration'}">免费注册</router-link>
                        </span>
                        <router-link class="forgetPassword" :to="{name:'/forgetPassword',path:'/forgetPassword'}">忘记密码</router-link>
                        <router-view></router-view>
                    </p>
                </el-form>
            </div>
            <footer>
                <!--Cookie Preferences-->
                <a href="###" class="CookiePreferences">Cookie Preferences</a>
            </footer>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Login",
        data() {
            return {
                checked: true,//勾选协议
                inputUser:'',//登录的电话或邮箱
                password:'',//密码
            }
        },
        created(){
        },
        methods:{
            checkoutAgreement(){
                this.checked=!this.checked
            },
            click_login(){
                if(!this.inputUser||!this.password){
                    alert('请输入完整信息')
                    return;
                }
                axios.get('http://localhost:9999/Loginbackstage',{params:{phone:this.inputUser,password:this.password}})
                    .then(res=>{
                        window.localStorage.setItem('login',JSON.stringify(res.data))
                    }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @media screen and (max-width: 1008px) {
        #login .content_left {
            display: none!important;
        }
    }
    html,body{
        height: 100%;
        padding:0;
        margin:0;
        background-color: #f8f8f8;
    };
    #login {
        .header {
            height: 44px;
            width: 100%;
            position: fixed;
            z-index: 99;
            left: 0;
            top: 0;
            padding-right: 10px;
            font-size: 14px;
            background: #FFF;
            line-height: 44px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            /*头部的logo*/
            .logo_img {
                width: 95px;
                height: 28px;
                float: left;
                margin: 8px 0 8px 24px;
            }
        }
        width: 100%;
        padding-top: 44px;
        position: absolute;
        min-height: 100%;
        display: flex;
        top: 0;
        left: 0;
        padding-bottom: 100px;
        align-items: center;
        background-color: #fff;
        z-index: 2;
        background-color: #f8f8f8;
        .login_content {
            padding-top: 50px;
            margin: 0 auto;
            width: 960px;
            .content_left {
                background:url(../../img/9725283707cd23a8bcd7154f68cc70ee.png) center center no-repeat;
                -webkit-background-size:100% ;
                background-size:100% ;
                width: 540px;
                height: 400px;
                display: inline-block;
             }
            .content_right {
                display: inline-block;
                padding: 0 50px;
                box-sizing: border-box;
                width: 420px;
                vertical-align: top;
                background-color: #fff;
                height: 400px;
                /*点击同意协议并注册*/
                .click_registration {
                    width: 100%;
                    color: #fff;
                    background-color: #F6701A;
                    border-color: #F6701A;
                    padding: 0 15px;
                    font-size: 16px;
                    border-radius: 2px;
                    height: 40px;
                }
                .click_registration:hover {
                    opacity: 0.8;
                }
                h1 {
                    color: #303030;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 33px;
                    text-align: center;
                    margin-bottom: 40px;
                    margin-top: 60px;
                }
                .password{
                    margin: 26px 0 0;
                }
            }
            /*点击跳到注册*/
            .tips {
                color: #d9d9d9;
                margin-top: 10px;
                a {
                    color: #1F86E1;
                    webkit-transition: color .3s;
                    background-color: transparent;
                    transition: color .3s;
                }
                .toRegistration {
                    float: left;
                    font-size: 12px;
                }
                .forgetPassword {
                    float: right;
                    font-size: 12px;
                }
            }
        }
        .checkoutAgreement {
            font-size: 13px;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.65);
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            cursor: pointer;
            padding: 0;
            list-style: none;
            vertical-align: top;
            text-align: left;
            font-weight: 400;
            height: 32px;
            line-height: 32px;
            i {
                margin-left: 5px;
            }
            a {
                color: #1F86E1;
                background-color: transparent;
                transition: color .3s;
            }
        }
        /*底部*/
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            line-height: 18px;
            padding: 9px 0;
            background-color: #f8f8f8;
            text-align: center;
            /*CookiePreferences*/
            .CookiePreferences {
                color: #979797;
                font-weight: 300;
                font-size: 14px;
            }
        }
    }

</style>
