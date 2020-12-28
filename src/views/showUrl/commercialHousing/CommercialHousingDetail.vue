<template>
    <div class="commercial_housing_detail public_img">
        <nav-bar navTitle="商贸/住宅楼"></nav-bar>
        <title-img sort="2"></title-img>
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
