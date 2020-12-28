<template>
    <div class="appointment">
        <nav-bar></nav-bar>
        <header-title>
            <template v-slot:title_h>
                <h4>预约办事</h4>
            </template>
            <template v-slot:title_p>
                <p>请选择您要办理的工程业务类型</p>
            </template>
        </header-title>
        <div class="gird_list">
            <ul class="clearfix">
                <li v-for="item in grid" :key="item.id">
                    <router-link :to="item.router">
                        <img :src="item.img" :alt="item.title">
                        <span>{{item.title}}</span>
                        <em></em>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import HeaderTitle from '@/components/HeaderTitle'
import ReservationMarketBusiness from '@/assets/img/Market_business.png'
import ReservationSeniorTenderingOfficer from '@/assets/img/Senior_tendering_Officer.png'
import ReservationEngineeringManagement from '@/assets/img/engineering_management.png'
import ReservationAdministrativeAppointment from '@/assets/img/administrative_appointment.png'
import ReservationFinancialAppointment from '@/assets/img/Financial_appointment.png'
import ReservationApplicationInvoice from '@/assets/img/Application_for_Reservation_Invoice.png'
let grid = [
    {id:1,img:ReservationMarketBusiness,title:'市场业务',router:{name:'reservation_Market_business'}},
    {id:2,img:ReservationSeniorTenderingOfficer,title:'投标资审',router:{name:'reservation_Senior_tendering_Officer'}},
    {id:3,img:ReservationEngineeringManagement,title:'工程管理',router:{name:'reservation_Engineering_Management'}},
    {id:4,img:ReservationAdministrativeAppointment,title:'行政预约',router:{name:'reservation_Administrative_appointment'}},
    {id:5,img:ReservationFinancialAppointment,title:'财务预约',router:{name:'reservation_Financial_appointment'}},
    {id:6,img:ReservationApplicationInvoice,title:'发票申请',router:{name:'reservation_application_Invoice'}},
]
export default {
   data() {
      return {
          grid:grid,
      }
   },
   methods: {
       
   },
   components:{
       NavBar,
       HeaderTitle,
   }
}
</script>
<style scoped>
.gird_list{
    margin-top: 0.09rem;
    text-align: center;
}
.gird_list ul{
    display: inline-block;
    text-align: left;
}
.gird_list ul li{
    height: 0.8rem;
    width: 3.2rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    position: relative;
}
.gird_list ul li a{
    width: 100%;
    height: 0.8rem;
}
.gird_list ul li a img{
    height: 0.4rem;
    width: 0.4rem;
    margin-top: -0.1rem;
}
.gird_list ul li a span{
    display: inline-block;
    color: #000000;
    font-size: 0.16rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-left: 0.15rem;
}
.gird_list ul li a em{
    position: absolute;
    background-image: url('../../assets/img/right.png');
    background-size: cover;
    width: 0.09rem;
    height: 0.15rem;
    right: 0.2rem;
    top: 0.32rem;
}
</style>
