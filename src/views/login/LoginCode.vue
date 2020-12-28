<template>
    <div class="login_code">
        <login-form>
            <template v-slot:title>
                <div>
                    铭筑艺成园
                </div>
            </template>
            <template v-slot:form>
                <form>
                    <div>
                        <label for="">手机号</label>
                        <input type="text" v-model="user" @blur="blur" placeholder="请输入手机号">
                    </div>
                    <div>
                        <label for="">验证码</label>
                        <input type="text" v-model="code" @blur="blur" placeholder="请输入验证码">
                        <div class="iphone_code">
                            <span v-if="sendMsgDisabled">{{time}}秒后重新发送</span>
                            <span v-else="sendMsgDisabled" @click="getCode">获取验证码</span>
                        </div>
                    </div>
                </form>
            </template>
            <template v-slot:btn>
                <div>
                    <div class="form_btn">
                        <button @click="submmitLogin">登录</button>
                    </div>
                    <div class="code_jump">
                        <button @click="jump">手机号登录</button>
                    </div>
                </div>
            </template>
        </login-form>
    </div>
</template>
<script>
import {blurView} from '@/utils/blur'
import LoginForm from '@/components/LoginForm'
import { messAlert } from '@/utils/message';
import { addToken,addName } from '@/utils/token';
import { code,loginCode } from '@/api/user'
export default {
   data() {
      return {
        user:'',
        code:'',
        time: 60, // 发送验证码倒计时
        sendMsgDisabled: false,
        timer:'',
        propCode:'',
      }
   },
   methods: {
    jump(){
        this.$router.push({name:'login'})
    },
    getCode(){
        if(!(/^1[34578]\d{9}$/.test(this.user))){
            messAlert('请输入正确的手机号');
            return;
        }
        code({mobile:this.user}).then(res=>{
            if(res.data.state == 200){
                this.propCode = res.data.datas;
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
    submmitLogin(){
        if(!(/^1[34578]\d{9}$/.test(this.user))){
            messAlert('请输入手机号');
            return;
        }
        if(this.propCode != this.code || this.code == ''){
            messAlert('请输入正确的验证码');
            return;
        }
        loginCode({
            mobile:this.user,
            code:this.code,
        }).then(res=>{
            if(res.data.state == 200){
                addToken(res.data.datas.token);
                addName(res.data.datas.name);
                this.user = '';
                this.code = '';
                this.propCode = '';
                this.$router.push({name:'home'});
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            //    MessageBox({
            //         title:'提示',
            //         message:res.data.message,
            //         showCancelButton: true
            //     })
            }
        }).catch(err=>{
            messAlert(err.message);
        //    MessageBox({
        //         title:'提示',
        //         message:res.data.message,
        //         showCancelButton: true
        //     })
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
.code_jump{
    margin-top: 0.2rem;
    text-align: center;
}
.code_jump button{
    width: 2.32rem;
    height: 0.5rem;
    font-size: 0.16rem;
    color: #ffffff;
    background-color: #f62347;
    border-radius: 0.3rem;
}
</style>
