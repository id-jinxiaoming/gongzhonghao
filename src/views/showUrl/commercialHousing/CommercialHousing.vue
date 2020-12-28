<template>
    <div class="commercial_housing">
        <header-text>商贸/住宅类</header-text>
        <show-list type="3" urlName="commercialHousingDetail"></show-list>
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
.commercial_housing{
    width: 3.4rem;
    margin: 0 auto;
}
</style>
