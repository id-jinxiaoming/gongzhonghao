<template>
    <div class="supplier_representative_detail">
        <nav-bar navTitle="供货商代表详情"></nav-bar>
        <title-img sort="5"></title-img>
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
