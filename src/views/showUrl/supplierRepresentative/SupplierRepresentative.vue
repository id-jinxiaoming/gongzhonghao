<template>
    <div class="supplierRepresentative">
        <header-text>供货商代表</header-text>
        <div class="main_img">
            <img src="../../../assets/img/supplierRepresentative.jpg" alt="供货商代表">
        </div>
        <div class="content_main">
            <supplier-representative-list type="1" urlName="supplierRepresentativeDetail"></supplier-representative-list>
        </div>
    </div>
</template>
<script>
import HeaderText from '@/components/HeaderText'
import SupplierRepresentativeList from '@/components/SupplierRepresentativeList'
export default {
   data() {
      return {
        
      }
   },
   components:{
       HeaderText,
       SupplierRepresentativeList,
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
