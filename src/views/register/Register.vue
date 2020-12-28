<template>
    <div class="register">
        <login-form>
            <template v-slot:title>
                <div>
                    铭筑艺成园
                </div>
            </template>
            <template v-slot:form>
                <form>
                    <div>
                        <label for="">姓名</label>
                        <input type="text" v-model="name" @blur="blur" placeholder="请输入姓名">
                    </div>
                    <div>
                        <label for="">手机号</label>
                        <input type="text" v-model="iphone" @blur="blur" placeholder="请输入手机号">
                    </div>
                    <div>
                        <label for="">验证码</label>
                        <input type="text" v-model="code" @blur="blur" placeholder="请输入验证码">
                        <div class="iphone_code">
                            <span v-if="sendMsgDisabled">{{time}}秒后重新发送</span>
                            <span v-else="sendMsgDisabled" @click="getCode">获取验证码</span>
                        </div>
                    </div>
                    <div>
                        <label for="">隶属项目或公司</label>
                        <input type="text" v-model="company" @blur="blur" placeholder="请输入隶属项目或公司">
                    </div>
                    <div>
                        <label for="">密码</label>
                        <input type="password" v-model="pass" @blur="blur" placeholder="请输入密码">
                    </div>
                    <div>
                        <label for="">确认密码</label>
                        <input type="password" v-model="passAgain" @blur="blur" placeholder="请再次输入密码">
                    </div>
                </form>
            </template>
            <template v-slot:btn>
                <div class="res_btn">
                    <button @click="submitRegister">注册</button>
                </div>
            </template>
        </login-form>
    </div>
</template>
<script>
import {blurView} from '@/utils/blur'
import LoginForm from '@/components/LoginForm'
import { messAlert } from '@/utils/message';
import { code,register } from '@/api/user'
export default {
   data() {
      return {
          name:'',
          iphone:'',
          code:'',
          company:'',
          pass:'',
          passAgain:'',
          time: 60, // 发送验证码倒计时
          sendMsgDisabled: false,
          timer:'',//定时器
      }
   },
   methods: {
    getCode(){
        if(!(/^1[34578]\d{9}$/.test(this.iphone))){
            messAlert('请输入正确的手机号');
            return;
        }
        code({mobile:this.iphone}).then(res=>{
            if(res.data.state == 200){
                this.sendMsgDisabled = true;
                this.timer = window.setInterval(()=>{
                    this.time--;
                    if(this.time == 0){
                        this.sendMsgDisabled = false;
                        this.time = 60;
                        window.clearInterval(this.timer);
                    }
                },1000)
            }if(res.data.state == 500){
                this.sendMsgDisabled = false;
                messAlert('获取验证码失败');
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    },
    submitRegister(){
        if(!this.name){
            messAlert('请输入姓名');
            return;
        }
        if(!(/^1[34578]\d{9}$/.test(this.iphone))){
            messAlert('请输入正确的手机号');
            return;
        }
        if(!this.code){
            messAlert('请输入验证码');
            return;
        }
        if(!this.company){
            messAlert('请输入隶属项目或公司');
            return;
        }
        if(!this.pass){
            messAlert('请输入密码');
            return;
        }
        if(!this.passAgain){
            messAlert('请再次输入密码');
            return;
        }
        if(this.pass != this.passAgain){
            messAlert('两次输入的密码不一致');
            return;
        }
        let params = new URLSearchParams();
        params.append('username',this.iphone);
        params.append('password',this.pass);
        params.append('name',this.name);
        params.append('project',this.company);
        params.append('code',this.code);
        register(params).then(res=>{
            if(res.data.state == 200){
                messAlert(res.data.message);
                this.name = '';
                this.iphone = '';
                this.code = '';
                this.company = '';
                this.pass = '';
                this.passAgain = '';
                this.$router.push({name:'login'});
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    },
    blur(){
        blurView();
    }
   },
   beforeDestroy () {
    clearInterval(this.timer);
   },
   components:{
    LoginForm,
   }
}
</script>
<style scoped>
.form_list .iphone_code{
    position: absolute;
    right: 0;
    font-size: 0.14rem;
    bottom: 0.1rem;
    color: #000000;
}
.res_btn{
    margin-top: 0.2rem;
    text-align: center;
}
.res_btn button{
    width: 2.32rem;
    height: 0.5rem;
    font-size: 0.16rem;
    color: #ffffff;
    background-color: #f62347;
    border-radius: 0.3rem;
}
</style>
