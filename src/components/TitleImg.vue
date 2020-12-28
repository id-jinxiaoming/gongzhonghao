<template>
    <div class="show_title_img">
        <p id="img_show" v-html="detailsShow" class="img_show"></p>
    </div>
</template>
<script>
import { getSingleDetails,performanceDisplayGetSingleDetails,textManagementDetails,detailsContentGetSingleDetailsThree,getSupplierRepresentativeDetails,getPurchasingPartnerDetails } from '@/api/index'
import { messAlert } from '@/utils/message'
import { getToken } from '@/utils/token'
let grid = [{id:1,title:'市场拓展'},
            {id:2,title:'投标资审'},
            {id:3,title:'工程管理'},
            {id:4,title:'财务税务'},
            {id:5,title:'人力行政'},
        ]
export default {
   data() {
      return {
        detailsShow:'',
        linkId:'',
      }
   },
   created(){
    this.linkId = this.$route.params.linkId;
    if(this.sort == 1){
        let token = getToken() || '';
        getSingleDetails({
            id:this.linkId,
            token,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.details;
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    }else if(this.sort == 2){
        performanceDisplayGetSingleDetails({
            id:this.linkId,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.details;
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    }else if(this.sort == 3){
        let token = getToken() || '';
        textManagementDetails({
            token,
            id:this.linkId,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.content;
                grid.forEach(item=>{
                    if(item.id == res.data.datas.classification){
                        this.$emit('changeTitle',item.title);
                        document.title = item.title;
                        return;
                    }
                })
            }else if(res.data.state == 500){
                this.$router.push({name:'login'});
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
                this.$router.push({name:'login'});
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    }else if(this.sort == 4){
        let token = getToken() || '';
        detailsContentGetSingleDetailsThree({
            token,
            id:this.linkId,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.details;
            }else if(res.data.state == 500){
                this.$router.push({name:'login'});
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
                this.$router.push({name:'login'});
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    }else if(this.sort == 5){
         let token = getToken() || '';
        getSupplierRepresentativeDetails({
            id:this.linkId,
            token,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.details;
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message);
        })
    }else if(this.sort == 6){
         let token = getToken() || '';
        getPurchasingPartnerDetails({
            id:this.linkId,
            token,
        }).then(res=>{
            if(res.data.state == 200){
                this.detailsShow = res.data.datas.details;
            }else if(res.data.state == 500){
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
    }
   }
}
</script>
<style scoped>
.show_title_img{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
.show_title_img .img_show{
    font-size: 0.14rem;
    background-color: #ffffff;
    /* padding: 0.2rem; */
    border-radius: 0.07rem;
    height: auto;
}
</style>
