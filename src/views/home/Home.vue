<template>
    <div class="home">
        <div class="home_users">
            <div class="users_detail">
                <p>Hi,<span>{{ user }}</span></p>
                <p>欢迎来到铭筑艺成园！</p>
               <!-- <button class="jump_list" @click="jumpList">公告列表</button> -->
            </div>
        </div>
        <!-- 轮播 -->
        <div class="swipper">
            <swipper></swipper>
        </div>

        <!-- 宫格后增 -->
        <div class="standard_system1">
                <h4>内部通告</h4>    <!--公告列表-->
                <div class="xsnys"></div>     
            <ul>
                <li v-for="item in grid1" :key="item.id">
                    <router-link :to="item.router">
                        <img :src="item.img" :alt="item.title">
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- 宫格 -->
        <div class="standard_systemt">    <!--project_wrapper-->
            <h4>业务办理</h4>             <!--选择您要办理的工程类型-->
            <div class="xsnyst"></div>
            <ul>
                <li v-for="item in grid" :key="item.id">
                    <router-link :to="item.router">
                        <img :src="item.img" :alt="item.title">
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Swipper from '@/components/Swipper'
import { messAlert } from '@/utils/message'
import { getName } from '@/utils/token'
import Appointment from '@/assets/img/Appointment_service.png'
import financial from '@/assets/img/Financial_taxation.png'
import project from '@/assets/img/Project_cooperation.png'
import engineering from '@/assets/img/engineering_management.png'
import Notice from '@/assets/img/notice.png' 
import InstitutionalNorms from '@/assets/img/institutional_norms.png'
import TechnologicalProcess from '@/assets/img/technological_process.png'

let grid = [
    {id:1,img:Appointment,title:'预约办事',router:{name:'appointment'}},
    {id:2,img:financial,title:'财务税务',router:{name:'financial'}},
    {id:3,img:project,title:'项目合作',router:{name:'project'}},
    {id:4,img:engineering,title:'工程管理',router:{name:'engineering'}},
]

let grid1 = [
    {id:1,img:Notice,title:'通知公告',router:{name:'internalAnnouncement'}},
    {id:2,img:InstitutionalNorms,title:'规范制度',router:{name:'standardSystem'}},
    {id:3,img:TechnologicalProcess,title:'办公流程',router:{name:'workFlow'}},
]

export default {
    name:'home',
    data() {
        return {
            grid:grid,
            grid1:grid1,
            user:'',
        }
    },
    methods:{
        jumpList(){
            this.$router.push({name:'internalDisplay'});
        }
    },
    created(){
        this.user = getName() || '尊敬的用户' ;
    },
    components:{
        Swipper,
    }
}
</script>
<style scoped>
.home{
    margin-top:0.2rem;
}
.home_users{
    height: 0.4rem;
    position: relative;
}
.home_users .users_detail{
    margin-left: 0.17rem;
    height: 100%;
}
.users_detail p{
    margin-top: 0.04rem;
    color: #ffffff;
}
.users_detail p>span{
    color: #fee97a;
}
.users_detail p:nth-child(1){
    font-size: 0.18rem;
}
.users_detail p:nth-child(2){
    font-size: 0.14rem;
}
.jump_list{
    position: absolute;
    color: #ffffff;
    right: 0.2rem;
    top: 0.06rem;
    background-color: transparent;
    font-size: 0.16rem;
}
.swipper{
    width: 3.4rem;
    /* height: 1.65rem; */
    margin: 0.1rem auto 0;
}
.project_wrapper{
    margin-top: 0.27rem;
    padding-left: 0.17rem;
}
.project_wrapper>h4{
    font-size: 0.18rem;
    color: #ffffff;
}
.project_wrapper>ul{
    display: inline-block;
    margin-top: 0.11rem;
}
.project_wrapper>ul>li{
    float: left;
    width: 1.63rem;
    height: 0.6rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-top: 0.13rem;
}
.project_wrapper>ul>li:nth-child(even){
    margin-left: 0.14rem;
}
.project_wrapper>ul>li a{
    width: 1.63rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
}
.project_wrapper>ul>li a img{
    height: 0.42rem;
    width: 0.42rem;
}
.project_wrapper>ul>li a span{
    color: #000000;
    font-size: 0.16rem;
    margin-left: 0.13rem;
    vertical-align: middle;
}


.standard_system1 ul{
    width: 2rem;
    margin: 0 auto;
}
.standard_system1 ul li{
    height: 0.4rem;
    width: 100%;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    position: relative;
}
.standard_system1 ul li a{
    width: 100%;
    height: 0.4rem;
}
.standard_system1 ul li a img{
    height: 0.3rem;
    width: 0.3rem;
    margin-top: -0.1rem;
}
.standard_system1 ul li a span{
    display: inline-block;
    color: #000000;
    font-size: 0.14rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.2rem;
}
.standard_system1>h4{
    margin-top: 0.27rem;
    /*padding-left: 0.17rem;*/
    padding-left: 1.5rem;
    font-size: 0.18rem;
    color: #ffffff;
}


.standard_systemt ul{
    width: 2rem;
    margin: 0 auto;
}
.standard_systemt ul li{
    height: 0.4rem;
    width: 100%;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    position: relative;
}
.standard_systemt ul li a{
    width: 100%;
    height: 0.4rem;
}
.standard_systemt ul li a img{
    height: 0.3rem;
    width: 0.3rem;
    margin-top: -0.1rem;
}
.standard_systemt ul li a span{
    display: inline-block;
    color: #000000;
    font-size: 0.14rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: 0.2rem;
}
.standard_systemt>h4{
    margin-top: 0.27rem;
    /*padding-left: 0.17rem;*/
    padding-left: 1.5rem;
    font-size: 0.18rem;
    color: #ffffff;
}

.xsnys{
    position: absolute;
    background-image: url('../../assets/img/title4.png');
    background-size: cover;
    width: 1.8rem;
    height: 0.88rem;
    right: 0.98rem;
    top: 2rem;
}
.xsnyst{
    position: absolute;
    background-image: url('../../assets/img/title5.png');
    background-size: cover;
    width: 1.8rem;
    height: 0.88rem;
    right: 0.98rem;
    top: 4.95rem;
}

</style>
