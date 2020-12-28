<template>
    <div class="up_load">
        <slot></slot>
    </div>
</template>
<script>
export default {
   data() {
    return {
        
    }
   },
   methods: {
    onScroll(){
        if(this.allLoaded){
            return;
        }
        let innerHeight = document.querySelector('#app').clientHeight;
        let outerHeight = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (innerHeight <= (outerHeight + scrollTop)) {
            this.upLoad();
        }
    }
   },
   created(){
    window.addEventListener('scroll',this.onScroll);
   },
   beforeDestroy(){
    window.removeEventListener('scroll',this.onScroll);
   },
   props:{
    upLoad: { // 加载回调
        type: Function,
        require: true
    },
    allLoaded:{
        type: Boolean,
        require: true,
        default:true,
    },
   }
}
</script>
<style scoped>
</style>
