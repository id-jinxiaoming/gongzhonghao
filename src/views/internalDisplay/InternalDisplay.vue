<template>
    <div class="internal_display">
        <mt-header title="艺成园内部公告">
            <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
        </mt-header>
        <div class="swipper">
            <swipper></swipper>
        </div>
        <div class="display_content">
            <div class="content_header">
                <ul class="clearfix">
                    <li v-for="(item,index) in grid" :key="item.id">
                        <!-- <router-link :to="item.router" :class="{active:current == index}" @click.native="tab(index)">{{item.title}}</router-link> -->
                        <router-link :to="item.router" active-class="active">{{item.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="content_main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Swipper from '@/components/Swipper'
let grid = [
    {id:1,title:'通知公告',router:{name:'internalAnnouncement'}},//内部公告改为“通知公告”
    {id:2,title:'规范制度',router:{name:'standardSystem'}},
    {id:3,title:'办公流程',router:{name:'workFlow'}},
]
export default {
   data() {
      return {
        grid:grid,
        current:0,
      }
   },
   methods: {
    tab(i){
        this.current = i;
    },
    handleClose(){
        this.$router.push({name:'home'})
    }
   },
   components:{
    Swipper,
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
.swipper{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
.display_content{
    margin-top: 0.2rem;
}
.display_content .content_header{
    height: 0.4rem;
    width: 3.4rem;
    margin: 0 auto;
}
.display_content .content_header ul li{
    float: left;
    width: 33%;
    height: 0.4rem;
}
.display_content .content_header ul li:nth-child(2){
    text-align: center;
}
.display_content .content_header ul li:nth-child(3){
    text-align: right;
}
.display_content .content_header ul li a{
    color: #ffffff;
    font-size: 0.13rem;
    height: 0.4rem;
    line-height: 0.4rem;
    opacity: 0.7;
}
.display_content .content_header ul li a.active{
    font-size: 0.16rem;
    opacity: 1;
    position: relative;
}
.display_content .content_header ul li a.active::after{
    content: url('../../assets/img/active.png');
    width: 0.5rem;
    height: 0.05rem;
    position: absolute;
    left: 0;
    bottom: 0.3rem;
    z-index: -1;
}
.display_content .content_main{
    width: 3.4rem;
    margin: 0.1rem auto 0;
}
</style>
