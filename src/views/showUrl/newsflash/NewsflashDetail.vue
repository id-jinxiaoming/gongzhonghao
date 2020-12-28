<template>
    <div class="newsflash_detail">
        <nav-bar navTitle="新闻资讯"></nav-bar>
        <title-img sort="1"></title-img>
    </div>
</template>
<script>
import TitleImg from '@/components/TitleImg' 
import NavBar from '@/components/NavBar' 
export default {
   data() {
      return {
        detail:'',
      }
   },
   components:{
       TitleImg,
       NavBar,
   }
}
</script>
<style scoped>

</style>
