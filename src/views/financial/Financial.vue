<template>
    <div class="financial">
        <nav-bar></nav-bar>
        <header-title>
            <template v-slot:title_h>
                <h4>财务税务</h4>
            </template>
            <template v-slot:title_p>
                <p>请上传您的财务申请单照片</p>
            </template>
        </header-title>
        <grid-img status="1" @uploadImg="btnUpload($event)"></grid-img>
        <layer :magShow="isShow">
            <template v-slot:message_top>
                <h4>您的财务申请已上传完成</h4>
            </template>
            <template v-slot:message_middle>
                <p>工作人员会及时处理</p>
            </template>
            <template v-slot:message_bottom>
                <p>感谢您的配合</p>
            </template>
        </layer>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'
import Layer from '@/components/Layer'
import GridImg from '@/components/GridImg'
export default {
   data() {
    return {
        isShow:false,
    }
   },
   methods: {
    btnUpload($event){
        this.isShow = $event;
    }
   },
   components:{
    NavBar,
    HeaderTitle,
    Layer,
    GridImg,
   }
}
</script>
<style scoped>
</style>
