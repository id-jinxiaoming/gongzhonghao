<template>
    <div class="internal_announcement_list_detail">
        <mt-header :title="title">
            <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
        </mt-header>
        <title-img sort="3" @changeTitle="changeHeader"></title-img>
    </div>
</template>
<script>
import TitleImg from '@/components/TitleImg'
export default {
   data() {
    return {
        title:'',
    }
   },
    methods: {
    handleClose(){
        this.$router.go(-1);
    },
    changeHeader(event){
        this.title = event;
    }
   },
   components:{
    TitleImg,
   }
}
</script>
<style scoped>
.mint-header{
    height: 0.45rem;
    background-color: inherit;
    padding: 0 0.22rem;
    font-size: 0.18rem;
    color: #ffffff;
}
</style>
