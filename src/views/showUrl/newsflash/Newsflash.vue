<template>
    <div class="newsflash">
        <header-text>新闻资讯</header-text>
        <div class="main_img">
            <img src="../../../assets/img/newsflash.jpg" alt="新闻资讯">
        </div>
        <div class="content_main">
            <internal-list type="1" urlName="newsflashDetail"></internal-list>
        </div>
    </div>
</template>
<script>
import HeaderText from '@/components/HeaderText'
import InternalList from '@/components/InternalList'
export default {
   data() {
      return {
        
      }
   },
   components:{
       HeaderText,
       InternalList,
   }
}
</script>
<style scoped>
.main_img{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
.main_img img{
    width: 3.4rem;
}
.content_main{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
</style>
