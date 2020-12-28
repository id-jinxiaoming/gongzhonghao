<template>
    <div clas="nav_bar">
        <mt-header :title="navTitle">
            <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   methods: {
       handleClose(){
           this.$router.go(-1);
       }
   },
   props:{
       navTitle:{
           tyep:String
       }
   }
}
</script>
<style scoped>
.mint-header{
    height: 0.55rem;
    background-color: inherit;
    padding: 0 0.22rem;
    font-size: 0.18rem;
    color: #ffffff;
}
</style>
