<template>
    <div class="second_company">
        <header-text>公司概览</header-text>
        <img-show status="4" sort="1">
            <h4>公司简介</h4>
        </img-show>
    </div>
</template>
<script>
import ImgShow from '@/components/ImgShow'
import HeaderText from '@/components/HeaderText'
export default {
   data() {
      return {
      }
   },
   components:{
    ImgShow,
    HeaderText,
   },
}
</script>
<style scoped>
</style>
