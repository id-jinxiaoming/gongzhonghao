<template>
    <div class="work_flow">
        <ul>
            <li v-for="item in grid" :key="item.id">
                <router-link :to="{name:'InternalAnnouncementList',params:{type:2,classification:item.id},query:{title:item.title}}">
                    <img :src="item.img" :alt="item.title">
                    <span>{{item.title}}</span>
                    <em></em>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import ReservationMarketBusiness from '@/assets/img/Market_business.png'//市场
import ReservationSeniorTenderingOfficer from '@/assets/img/Senior_tendering_Officer.png'
import ReservationEngineeringManagement from '@/assets/img/engineering_management.png'
import ReservationFinancialAppointment from '@/assets/img/Financial_appointment.png'
import ReservationAdministrativeAppointment from '@/assets/img/administrative_appointment.png'
let grid = [{id:1,title:'市场拓展',img:ReservationMarketBusiness},
    {id:2,title:'投标资审',img:ReservationSeniorTenderingOfficer},
    {id:3,title:'工程管理',img:ReservationEngineeringManagement},
    {id:4,title:'财务税务',img:ReservationFinancialAppointment},
    {id:5,title:'人力行政',img:ReservationAdministrativeAppointment},
]
export default {
   data() {
    return {
        grid:grid,
    }
   },
   components:{
   }
}
</script>
<style scoped>
.work_flow ul{
    width: 2rem;
    margin: 0 auto;
}
.work_flow ul li{
    height: 0.4rem;
    width: 100%;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    position: relative;
}
.work_flow ul li a{
    width: 100%;
    height: 0.4rem;
}
.work_flow ul li a img{
    height: 0.3rem;
    width: 0.3rem;
    margin-top: -0.1rem;
}
.work_flow ul li a span{
    display: inline-block;
    color: #000000;
    font-size: 0.14rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.2rem;
    /* letter-spacing: 0.03rem; */
}
.work_flow ul li a em{
    position: absolute;
    background-image: url('../../../assets/img/right.png');
    background-size: cover;
    width: 0.07rem;
    height: 0.12rem;
    right: 0.2rem;
    top: 0.14rem;
}
</style>
