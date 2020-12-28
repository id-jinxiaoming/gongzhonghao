<template>
    <div class="show_list">
        <div class="internal_announcement_list">
            <up-load :upLoad="onload" :allLoaded="allLoaded">
                <ul class="clearfix">
                    <li v-for="item in showList" :key="item.id">
                        <router-link :to="{name:urlName,params:{linkId:item.id}}">
                            <div class="fl internal_announcement_list_img">
                                <img v-lazy="item.picture" alt="item.title">
                            </div>
                            <div class="fl internal_announcement_list_introduce">
                                <p class="p1">{{item.bandName}}</p>
                                <p class="p2">{{ item.companyName }}</p>
                                <p class="p3">{{ item.mainProducts }}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </up-load>
       </div>
    </div>
</template>
<script>
import { getSupplierRepresentativeList } from '@/api/index'
import { messAlert } from '@/utils/message'
import UpLoad from '@/components/UpLoad'
export default {
   data() {
      return {
        showList:[],
        allLoaded:false,
        page:1,
      }
   },
   methods: {
    onload(){
        this.page++;
        this.getShowList(this.page);
    },
    getShowList(page){
        getSupplierRepresentativeList({
            type:this.type,
            page:page,
            rows:10,
        }).then(res=>{
            if(res.data.state == 200){
                this.showList = this.showList.concat(res.data.datas.data);
                if(res.data.datas.data.length < 10){
                    this.allLoaded = true;
                }
            }else if(res.data.state == 500){
                messAlert(res.data.message);
            }
        }).catch(err=>{
            messAlert(err.message)
        })
    }
   },
   created(){
    this.getShowList(1);
   },
   components:{
    UpLoad,
   },
   props:{
       urlName:{
        type:String,
        require:true,
       },
       type:{
        type:String,
        required:true,
       },
   }
}
</script>
<style scoped>
.internal_announcement_list ul li .internal_announcement_list_introduce .p1{
    width: 100%;
    font-size: 0.16rem;
    color: #000000;
    line-height: 0.24rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0.24rem;
}
.internal_announcement_list ul li .internal_announcement_list_introduce .p2{
    width: 100%;
    font-size: 0.10rem;
    color: #575757;
    line-height: 0.2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0.2rem;
}
.internal_announcement_list ul li .internal_announcement_list_introduce .p3{
    width: 100%;
    font-size: 0.10rem;
    color: #575757;
    line-height: 0.2rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0.2rem;
    margin-top: -0.07rem;
}
</style>
