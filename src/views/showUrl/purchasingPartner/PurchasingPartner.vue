<template>
    <div class="purchasingPartner">
        <header-text>集采伙伴</header-text>
        <div class="main_img">
            <img src="../../../assets/img/purchasingPartner.jpg" alt="集采伙伴">
        </div>
        <div class="content_main">
            <purchasing-partner-list type="1" urlName="purchasingPartnerDetail"></purchasing-partner-list>
        </div>
    </div>
</template>
<script>
import HeaderText from '@/components/HeaderText'
import PurchasingPartnerList from '@/components/PurchasingPartnerList'
export default {
   data() {
      return {
        
      }
   },
   components:{
       HeaderText,
       PurchasingPartnerList,
   }
}
</script>
<style scoped>
.main_img{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
.main_img img{
    width: 3.4rem;
}
.content_main{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
</style>
