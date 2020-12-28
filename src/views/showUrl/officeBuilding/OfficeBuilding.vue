<template>
    <div class="office_building">
        <header-text>展览展示类</header-text>
        <show-list type="4" urlName="officeBuildingDetail"></show-list>
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
.office_building{
    width: 3.4rem;
    margin: 0 auto;
}
</style>
