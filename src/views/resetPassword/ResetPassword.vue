<template>
    <div class="reset_password">
        <login-form>
            <template v-slot:title>
                <div>
                    修改密码
                </div>
            </template>
            <template v-slot:form>
                <form>
                    <div>
                        <label for="">手机号</label>
                        <input type="text" v-model="user" placeholder="请输入手机号">
                    </div>
                    <div>
                        <label for="">验证码</label>
                        <input type="text" v-model="code" placeholder="请输入手机号">
                        <div class="iphone_code">
                            <span v-if="sendMsgDisabled">{{time}}秒后重新发送</span>
                            <span v-else="sendMsgDisabled" @click="getCode">获取验证码</span>
                        </div>
                    </div>
                    <div>
                        <label for="">填写新密码</label>
                        <input type="password" v-model="pass" placeholder="请输入新的密码">
                    </div>
                </form>
            </template>
            <template v-slot:btn>
                <div>
                    <div class="form_btn">
                        <button @click="resetPassword">提交</button>
                    </div>
                </div>
            </template>
        </login-form>
    </div>  
</template>
<script>
import LoginForm from '@/components/LoginForm'
import { messAlert } from '@/utils/message';
import { code,setPwd } from '@/api/user'
import { getToken } from '@/utils/token'
export default {
   data() {
    return {
        user:'',
        code:'',
        pass:'',
        time:60,
        sendMsgDisabled:false,
        timer:'',
    }
   },
   methods: {
    resetPassword(){
        if(!(/^1[34578]\d{9}$/.test(this.user))){
            messAlert('请输入正确的手机号');
            return;
        }
        if(!this.code){
            messAlert('请输入验证码');
            return;
        }
        if(!this.pass){
            messAlert('请输入密码');
            return;
        }
        setPwd({
            token:getToken(),
            username:this.user,
            password:this.pass,
            code:this.code
        }).then(res=>{
            if(res.data.state == 200){
                this.user = '';
                this.pass = '';
                this.code = '';
                messAlert(res.data.message);
                this.$router.push({name:'login'});
            }else if(res.data.state == 500){
                messAlert('请先登录');
                this.$router.push({name:'login'})
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message);
        })

    },
    getCode(){
        if(!(/^1[34578]\d{9}$/.test(this.user))){
            messAlert('请输入正确的手机号');
            return;
        }
        code({mobile:this.user}).then(res=>{
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
</style>
