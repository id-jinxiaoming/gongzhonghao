<template>
    <div class="building_wall">
        <header-text>建筑幕墙类</header-text>
        <show-list type="5" urlName="buildingWallDetail"></show-list>
    </div>
</template>
<script>
import HeaderText from '@/components/HeaderText'
import ShowList from '@/components/ShowList'
export default {
   data() {
      return {
        
      }
   },
   components:{
       HeaderText,
       ShowList,
   }
}
</script>
<style scoped>
.building_wall{
    width: 3.4rem;
    margin: 0 auto;
}
</style>
