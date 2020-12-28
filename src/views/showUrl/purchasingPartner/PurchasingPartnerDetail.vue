<template>
    <div class="purchasing_partner_detail">
        <nav-bar navTitle="集采伙伴详情"></nav-bar>
        <title-img sort="6"></title-img>
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
