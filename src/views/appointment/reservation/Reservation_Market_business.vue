<template>
    <div class="market_business">
        <nav-bar></nav-bar>
        <header-title>
            <template v-slot:title_h>
                <h4>市场业务</h4>
            </template>
            <template v-slot:title_p>
                <p>请您填写预约信息</p>
            </template>
        </header-title>
        <reservation-form status="1" @reservation="getReservation($event)"></reservation-form>
        <layer :magShow="isShow">
            <template v-slot:message_top>
               <h4>您的预约申请已经提交</h4>
            </template>
            <template v-slot:message_middle>
               <p>工作人员会及时为您处理</p>
            </template>
            <template v-slot:message_bottom>
               <p>请耐心等待</p>
            </template>
        </layer>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'
import ReservationForm from '@/components/ReservationForm'
import Layer from '@/components/Layer'
export default {
   data() {
    return {
        isShow:false,
    }
   },
   methods: {
    getReservation(message){
        this.isShow = message;
    }
   },
   components:{
    NavBar,
    HeaderTitle,
    ReservationForm,
    Layer,
   }
}
</script>
<style scoped>
</style>
