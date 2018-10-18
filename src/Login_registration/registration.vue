<template>
    <div id="registration">
        <div class="header">
              <img src="../../img/LOGO.png" alt="" class="logo_img">
        </div>
        <div class="content">
            <div class="step">
                <el-steps :active="active" align-center>
                    <el-step title="填写账号信息"></el-step>
                    <el-step title="注册成功"></el-step>
                </el-steps>
            </div>
            <div class="content_inr">
                <h1>请填写您的账号信息</h1>
                <div class="registration_from">
                    <!--表单内部的内容部分-->
                    <div class="from_inr">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                            <el-form-item label="" prop="phone" class="Verification_phone">
                               <el-input v-model.number="ruleForm.phone" placeholder="输入手机号码"/>
                            </el-form-item>
                        </el-form>
                        <!--验证2次登录密码-->
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="" prop="pass">
                                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"  placeholder="设置您的登录密码"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="checkPass">
                                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再次输入登录密码"></el-input>
                            </el-form-item>
                            <el-form-item label="" prop="age">
                                <el-input v-model="ruleForm2.age" placeholder="输入您的企业名称"></el-input>
                            </el-form-item>
                            <!--<el-form-item>-->
                                <!--<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>-->
                                <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
                            <!--</el-form-item>-->
                        <!--验证2次登录密码-->
                        <!--验证邮箱-->
                            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                                <el-form-item
                                        prop="email"
                                        label=""
                                        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
                                >
                                    <el-input v-model="dynamicValidateForm.email" placeholder="输入您的邮箱(选填)"></el-input>
                                </el-form-item>
                            </el-form>
                         <!--验证邮箱-->
                         <!--勾选协议-->
                          <div class="checkoutAgreement" @click="checkoutAgreement">
                              <el-checkbox v-model="checked"></el-checkbox>
                              <span><i>阅读并同意</i> <a href="https://auth.tuya.com/service" target="_blank"
                                                    @click.stop="termsOfService">《服务条款》</a><a href="https://auth.tuya.com/legal" target="_blank">《法律声明及隐私权政策》</a></span>
                          </div>
                         <!--勾选协议-->
                        </el-form>
                        <!--点击同意协议并注册-->
                        <el-row>
                            <el-button type="primary" class="click_registration" @click="click_registration">同意协议并注册</el-button>
                        </el-row>
                        <!--点击同意协议并注册-->
                        <!--跳转到登录-->
                        <p class="login_uHLKf">
                            <router-link :to="{name:'/login',paht:'/login'}">已有账号去登录</router-link>
                            <router-view></router-view>
                        </p>
                    </div>
                </div>
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
    // import store from '../store'
    export default {
        data() {
            // 验证2次登录密码
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('内容不能为空'));
                }
                callback()
                // setTimeout(() => {
                //     if (!Number.isInteger(value)) {
                //         callback(new Error('请输入数字值'));
                //     } else {
                //         if (value < 18) {
                //             callback(new Error('必须年满18岁'));
                //         } else {
                //             callback();
                //         }
                //     }
                // }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            // 验证2次登录密码
            // 验证手机号
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                } else {
                    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                    if (reg.test(value)) {
                        callback();
                    } else {
                        return callback(new Error('请输入正确的手机号'));
                    }
                }
                // 验证手机号
            };
            return {
                checked: true,//勾选协议
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                },
                active: 1,
                // 验证手机号
                ruleForm: {
                    phone: '',
                    email: ''
                },
                rules: {
                    phone: [
                        {validator: checkPhone, trigger: 'blur'}
                    ]
                },
                // 验证手机号
                // 验证2次登录密码
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                    checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                    age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            },
            // 验证2次登录密码

            };
        },
        created(){
        },
        mounted(){
        },
        methods: {
            next() {
                //点击同意协议并成功注册时调用此函数，并由填写账号信息滑向注册成功
                if (this.active++ > 1) this.active = 0;
            },
            // 点击勾选协议
            checkoutAgreement(){
                this.checked=!this.checked
            },
            // termsOfService()
            // 点击同意协议并注册
            click_registration(){
                const store = window.localStorage;
                // 获取输入的手机
                var obj = {};
                obj.pass = this.ruleForm2.pass;// 获取第2次输入的密码
                obj.enterpriseName = this.ruleForm2.age;// 获取输入的企业名称
                obj.getEamil = this.dynamicValidateForm.email;// 获取输入的邮箱
                obj.phone = this.ruleForm.phone;
                if(this.ruleForm2.pass!=this.ruleForm2.checkPass){
                    return alert('输入的密码不一致')
                }
                // if(!obj.phone||!obj.pass||!obj.enterpriseName||!obj.getEamil){
                //     alert('请输入完整信息');
                //     return
                // }
                axios.get('http://10.10.2.60:9999/',{params:obj})
                    .then(res=>{
                        console.log(store)
                        store.setItem('login',JSON.stringify(res.data))
                        console.log(res.data)
                        this.next();
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>
<style scoped lang="less">
    @import "../../css/Initialization.css";
    html,body{
        height: 100%;
        padding:0;
        margin:0;
        background-color: #f8f8f8;
    };
    #registration{
        .el-row {
            height: 44px;
            line-height: 44px;
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .el-form-item__content {
            margin-left: 0;
            background-color: #000;
        }
        /*头部*/
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
        /*中间的内容部分*/
        .content {
            position: relative;
            width: 100%;
            padding-top: 44px;
            background-color: #f8f8f8;
            margin-top:44px;
            .step {
                width: 360px;
                margin:0 auto;
                .el-step__icon{
                    background-color: #000!important;
                }
            }
        }
        /*填写账户信息的内容*/
        .content_inr {
            overflow: hidden;
            width: 1000px;
            margin: 30px auto 0;
            background-color: #fff;
            padding: 60px 0 103px;
            h1 {
                margin: 0 0 40px;
                color: #303030;
                font-size: 24px;
                text-align: center;
                font-weight: 400;
            }
            .registration_from {
                width: 320px;
                margin: 0 auto;
                /*表单内部的内容部分*/
                .from_inr {
                    .Verification_phone {
                        element.style {
                            margin-left: 0;
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
                    margin-bottom: 15px;
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
            }
        }
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
        /*跳转到登录 */
        .login_uHLKf {
            a {
                color: #9b9b9b;
                font-weight: 300;
                font-size: 14px;
            }
            a:hover {
                color: #1F86E1;
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
