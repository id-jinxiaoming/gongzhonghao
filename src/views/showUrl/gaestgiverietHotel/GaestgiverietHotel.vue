<template>
    <div class="gaestgiveriet_hotel">
        <header-text>酒店/办公类</header-text>
        <show-list type="1" urlName="gaestgiverietHotelDetail"></show-list>
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
.gaestgiveriet_hotel{
    width: 3.4rem;
    margin: 0 auto;
}
</style>
