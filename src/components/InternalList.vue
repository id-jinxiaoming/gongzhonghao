<template>
    <div class="show_list">
        <div class="internal_announcement_list">
            <up-load :upLoad="onload" :allLoaded="allLoaded">
                <ul class="clearfix">
                    <li v-for="item in showList" :key="item.id">
                        <router-link :to="{name:urlName,params:{linkId:item.id}}">
                            <div class="fl internal_announcement_list_img">
                                <img v-lazy="item.image" alt="item.title">
                            </div>
                            <div class="fl internal_announcement_list_introduce">
                                <p>{{ item.title | ellipsis }}</p>
                            </div>
                            <p>{{ item.addTime }}</p>
                        </router-link>
                    </li>
                </ul>
            </up-load>
       </div>
    </div>
</template>
<script>
import { getList } from '@/api/index'
import { messAlert } from '@/utils/message'
import UpLoad from '@/components/UpLoad'
import { getToken } from '@/utils/token'
export default {
   data() {
      return {
        showList:[],
        allLoaded:false,
        page:1,
      }
   },
   filters:{
    ellipsis(value){
        if(value.length <= 29){
            return value;
        }else{
            let val = value.slice(0,29);
            return (val + '...');
        }
    }
   },
   methods: {
    onload(){
        this.page++;
        this.getShowList(this.page);
    },
    getShowList(page){
        getList({
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
            }else if(res.data.state == 1000){
                messAlert(res.data.message);
                this.$router.push({name:'login'});
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
    type:{
        type:String,
        required:true,
    },
    urlName:{
        type:String,
        required:true,
    },
   }
}
</script>
<style scoped>
.internal_announcement_list ul li a{
    position: relative;
}
.internal_announcement_list ul li .internal_announcement_list_introduce p{
    width: 100%;
    height: 0.4rem;
    font-size: 0.14rem;
    color: #000000;
    line-height: 0.2rem;
    overflow : hidden;
}
.internal_announcement_list ul li a>p{
    position: absolute;
    color: #000000;
    font-size: 0.12rem;
    bottom: -0.02rem;
    height: 0.12rem;
    overflow: hidden;
    text-align: center;
    right: 0.1rem;
}
</style>
