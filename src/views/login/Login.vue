<template>
    <div class="login">
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
                        <label for="">密码</label>
                        <input type="password" v-model="pass" @blur="blur" placeholder="请输入密码">
                    </div>
                </form>
            </template>
            <template v-slot:btn>
                <div>
                    <div class="form_btn">
                        <button @click="submmitLogin">登录</button>
                    </div>
                    <div class="code_jump">
                        <button @click="jump">验证码登录</button>
                    </div>
                </div>
            </template>
        </login-form>
    </div>
</template>
<script>
import { blurView } from '@/utils/blur'
import LoginForm from '@/components/LoginForm'
import { messAlert } from '@/utils/message';
import { addToken,addName } from '@/utils/token';
import { login } from '@/api/user'
export default {
   data() {
    return {
        user:'',
        pass:'',
    }
   },
   methods:{
    jump(){
        this.$router.push({name:'loginCode'})
    },
    submmitLogin(){
        if(!(/^1[34578]\d{9}$/.test(this.user))){
            messAlert('请输入手机号')
            return;
        }
        if(!this.pass){
            messAlert('请输入密码');
            return;
        }
        login({
            mobile:this.user,
            password:this.pass,
        }).then(res=>{
            if(res.data.state == 200){
                addToken(res.data.datas.token);
                addName(res.data.datas.name);
                this.user = '';
                this.pass = '';
                this.$router.push({name:'home'});
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
   components:{
       LoginForm,
   }
}
</script>
<style scoped>
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
