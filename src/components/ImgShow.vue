<template>
    <div class="img_show">
         <div class="main">
            <div class="detail_text" id='test'>
                <slot></slot>
                <img :src="imgText" id="img_text">
            </div>
        </div>
    </div>
</template>
<script>
import {buttonJump,imageText} from '@/api/index'
import { messAlert } from '@/utils/message'
export default {
   data() {
      return {
        imgText:'',
      }
   },
   created(){
    if(this.sort == 1){
        imageText({
            status:this.status,
        }).then(res=>{
            if(res.data.state == 200){
                if(res.data.datas.images){
                    this.imgText = res.data.datas.images;
                }else{
                    messAlert(res.data.message);
                }
            }else if(res.data.satate == 500){
                messAlert(res.data.message);
            }
    }).catch(err=>{
        messAlert(err.message);
    })
    }else if(this.sort == 2){
        buttonJump({
            status:this.status,
        }).then(res=>{
            if(res.data.datas.images){
                this.imgText = res.data.datas.images;
            }else{
                messAlert(res.data.message);
            }
        }).catch(err=>{
                messAlert(err.message);
        })
    }
   },
   props:{
       sort:{
           type:String,
           required:true,
       },
       status:{
           type:String,
           required:true,
       },
   }
}
</script>
<style scoped>
.img_show{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
.detail_text h4{
    color: #ffffff;
    font-size: 0.16rem;
    margin-bottom: 0.15rem;
}
#img_text{
    width: 3.4rem;
    border-radius: 0.07rem;
}
</style>
