<template>
    <div class="micro_classroom">
        <header-text>微课堂</header-text>
        <div class="main_img">
            <img src="../../../assets/img/microClassroom.jpg" alt="微课堂">
        </div>
        <div class="content_main">
            <internal-list type="2" urlName="microClassroomDetail"></internal-list>
        </div>
    </div>
</template>
<script>
import HeaderText from '@/components/HeaderText'
import InternalList from '@/components/InternalList'
export default {
   data() {
      return {
        
      }
   },
   components:{
       HeaderText,
       InternalList,
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

