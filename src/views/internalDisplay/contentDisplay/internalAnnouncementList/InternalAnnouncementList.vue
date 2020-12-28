<template>
    <div class="interanl_nanouncement_list">
        <mt-header :title="title">
            <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
        </mt-header>
        <list-two :type="type" :classification="classification" sort="1" urlName="InternalAnnouncementListDetail"></list-two>
    </div>
</template>
<script>
import ListTwo from '@/components/ListTwo'
export default {
   data() {
    return {
        type:'',
        classification:'',
        title:'',
    }
   },
   methods:{
    handleClose(){
        this.$router.go(-1);
    },
   },
   created(){
    this.type = this.$route.params.type.toString();
    this.classification = this.$route.params.classification.toString();
    this.title = this.$route.query.title;
    document.title = this.title;
   },
   components:{
    ListTwo,
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
