<template>
    <div class="reservation_form">
        <div class="reservation_list">
            <div class="form_list">
                <form>
                    <div>
                        <label for="">办事人姓名</label>
                        <input type="text" v-model="nameOfVisitor" @blur="blur" placeholder="请输入办事人姓名">
                    </div>
                    <div>
                        <label for="">手机号码</label>
                        <input type="text" v-model="iphoneNumber" @blur="blur" placeholder="请输入手机号码">
                    </div>
                    <div>
                        <label for="">隶属项目部</label>
                        <input type="text" v-model="entryName" @blur="blur" placeholder="请输入隶属项目部">
                    </div>
                    <div>
                        <label for="">事由</label>
                        <textarea v-model="DetailsOfTheCause" @blur="blur" placeholder="请输入事由"></textarea>
                    </div>
                </form>
            </div>
        </div>
        <div class="btn_wrapper">
            <button class="btn" @click="btn">提交</button>
        </div>
    </div>
</template>
<script>
import {blurView} from '@/utils/blur'
import { insertReservation } from '@/api/index'
import { messAlert } from '@/utils/message'
import { getToken } from '@/utils/token'
export default {
   data() {
      return {
          nameOfVisitor:'',//来访人姓名
          iphoneNumber:'',//手机号码
          entryName:'',//隶属项目名称
          DetailsOfTheCause:'',//事由详情
      }
   },
   methods: {
    btn(){
        if(!this.nameOfVisitor){
            messAlert('请输入办事人姓名');
            return;
        }
        if(!(/^1[34578]\d{9}$/.test(this.iphoneNumber))){
            messAlert('请输入正确的手机号码');
            return;
        }
        if(!this.entryName){
            messAlert('请输入隶属项目部');
            return;
        }
        if(!this.DetailsOfTheCause){
            messAlert('请输入事由');
            return;
        }
        let params = new URLSearchParams();
        let token = getToken();
        params.append('token',token);
        params.append('nameVisitor',this.nameOfVisitor);
        params.append('phoneNumber',this.iphoneNumber);
        params.append('projectName',this.entryName);
        params.append('detailsCause',this.DetailsOfTheCause);
        params.append('status',this.status);
        insertReservation(params).then(res=>{
            if(res.data.state == 200){
                this.$emit('reservation',true);
                this.nameOfVisitor = '';
                this.iphoneNumber = '';
                this.entryName = '';
                this.DetailsOfTheCause = '';
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
                this.$router.push({name:'login'});
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    },
    blur(){
        blurView();
    }
   },
   props:{
       status:{
           type:String,
           required: true,
       }
   }
}
</script>
<style scoped>
.reservation_form{
    padding-bottom: 0.3rem;
}
.reservation_list{
    width: 3.4rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    background-color: #ffffff;
    padding: 0 0.15rem;
}
.form_list form div:last-child{
    height: auto;
}
.form_list form textarea{
    border: 0.01rem solid #e0e0e0;
    width: 100%;
    height: 0.75rem;
    padding: 0.05rem;
    box-sizing: border-box;
    font-size: 0.16rem;
    color: #000000;
    border-radius: 0.05rem;
    margin-top: 0.08rem;
    margin-bottom: 0.08rem;
}
.btn_wrapper{
    text-align: center;
    margin-top: 0.5rem;
}
.btn{
    height: 0.44rem;
    line-height: 0.44rem;
    width: 1.8rem;
    color: #ffffff;
    font-size: 0.16rem;
    text-align: center;
    background-color: #f62347;
    border-radius: 0.1rem;
}
</style>
