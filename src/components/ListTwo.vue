<template>
    <div class="list_two">
        <div class="classification_list">
            <up-load :upLoad="onload" :allLoaded="allLoaded">
                <ul class="clearfix">
                    <li v-for="item in showList" :key="item.id">
                        <router-link :to="{name:urlName,params:{linkId:item.id}}">
                            <div class="fl internal_announcement_list_img">
                                <img v-lazy="item.image" alt="item.title">
                                <p>{{ item.createTime || item.addTime }}</p>
                            </div>
                            <div class="fl internal_announcement_list_introduce">
                                <p>{{ item.title | ellipsis }}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </up-load>
        </div>
    </div>
</template>
<script>
import { textManagement,detailsContentGetListed } from '@/api/index'
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
        if(value.length <= 34){
            return value;
        }else{
            let val = value.slice(0,33);
            return (val + '...');
        }
    }
   },
   methods:{
    onload(){
        this.page++;
        this.getShowList(this.page);
    },
    getShowList(page){
        let token = getToken() || '';
        if(this.sort == '1'){
            textManagement({
                token,
                type:this.type,
                page:page,
                rows:10,
                classification:this.classification,
            }).then(res=>{
                if(res.data.state == 200){
                    this.showList = this.showList.concat(res.data.datas.data);
                    if(res.data.datas.data.length < 10){
                        this.allLoaded = true;
                    }
                }else if(res.data.state == 500){
                    this.$router.push({name:'login'});
                }else if(res.data.state == 1000){
                    messAlert(res.data.message);
                    this.$router.push({name:'login'});
                }
            }).catch(err=>{
                messAlert(err.message)
            })
        }else if(this.sort == '2'){
            detailsContentGetListed({
                type:this.type,
                page:page,
                rows:10,
                token,
            }).then(res=>{
                if(res.data.state == 200){
                    this.showList = this.showList.concat(res.data.datas.data);
                    if(res.data.datas.data.length < 10){
                        this.allLoaded = true;
                    }
                }else if(res.data.state == 500){
                    this.$router.push({name:'login'});
                }else if(res.data.state == 1000){
                    messAlert(res.data.message);
                    this.$router.push({name:'login'});
                }
            }).catch(err=>{
                messAlert(err.message)
            })
        }
    },
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
        classification:{
            type:String,
            default:'1',
        },
        sort:{
            type:String,
            required:true,
        },
        urlName:{
            type:String,
            required:true,
        }
    }
}
</script>
<style scoped>
.classification_list{
    width: 3.4rem;
    margin: 0 auto;
}
.classification_list ul li{
    padding: 0.11rem 0.1rem 0.09rem 0.1rem;
    height: 0.8rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    margin-top:0.1rem;
    border-radius: 0.07rem;
}
.classification_list ul li .internal_announcement_list_img{
    width: 0.45rem;
    height: 0.45rem;
    margin-left: 0.1rem;
    position: relative;
}
.classification_list ul li .internal_announcement_list_img img{
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 0.05rem;
}
.classification_list ul li .internal_announcement_list_introduce{
    margin-left: 0.22rem;
    width: 2.4rem;
    height: 100%;
    overflow: hidden;
}
.classification_list ul li .internal_announcement_list_introduce p{
    width: 100%;
    height: 0.4rem;
    font-size: 0.14rem;
    color: #000000;
    line-height: 0.2rem;
    overflow : hidden;
    margin-top: 0.1rem;
}
.classification_list ul li a .internal_announcement_list_img>p{
    position: absolute;
    width: 0.85rem;
    color: #000000;
    font-size: 0.1rem;
    bottom: -0.16rem;
    height: 0.12rem;
    /* overflow: hidden; */
    left: -0.06rem;
}
</style>
