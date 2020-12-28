<template>
    <div class="school_hospital">
        <header-text>学校/医院类</header-text>
        <show-list type="2" urlName="schoolHospitalDetail"></show-list>
    </div>
</template>
<script>
import ShowList from '@/components/ShowList'
import HeaderText from '@/components/HeaderText'
export default {
   data() {
      return {
      }
   },
   components:{
       ShowList,
       HeaderText,
   }
}
</script>
<style scoped>
.school_hospital{
    width: 3.4rem;
    height: 100%;
    margin: 0 auto;
}
</style>
