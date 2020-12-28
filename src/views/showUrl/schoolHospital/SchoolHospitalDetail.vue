<template>
    <div class="school_hospital_detail public_img">
        <nav-bar navTitle="学校/医院类"></nav-bar>
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
