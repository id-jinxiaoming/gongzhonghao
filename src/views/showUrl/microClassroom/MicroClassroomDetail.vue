<template>
    <div class="micro_classroom_detail">
        <nav-bar navTitle="微课堂"></nav-bar>
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
