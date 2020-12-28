<template>
    <div class="swippers">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,index) in imgList" :key="index">
                <img :src="item.images" :alt="item.name" @click="jump(index,item.linkId,item.type)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import { getLunBo,starQuestionnaire } from '@/api/index'
import { messAlert } from '@/utils/message'
export default {
   data() {
    return {
        imgList:[],
    }
   },
   methods:{
    jump(index,linkId,type){
        if(type == "2"){
            this.$router.push({name:'InternalAnnouncementListDetail',params:{linkId:linkId}});
        }else if(type == "3"){
            this.$router.push({name:'internalAnnouncementDetail',params:{linkId:linkId}});
        }else{
            let url = this.imgList[index].url || '';
            location.href = url;
        }
    }
   },
    async created(){
        let res = await getLunBo()
        if(res.data.state == 200){
            if(res.data.datas.length != 0){
                this.imgList = res.data.datas;
            }
        }else if(res.data.state == 500){
            messAlert(res.data.message);
        }
        let resSecond = await starQuestionnaire();
        if(resSecond.data.state == 200){
            this.imgList.push(resSecond.data.datas);
        }
    }
}
</script>
<style scoped>
.mint-swipe{
    width: 3.4rem;
    height: 1.8rem;
}
.mint-swipe-item img{
    width: 3.4rem;
    height: 1.8rem;
}
</style>
