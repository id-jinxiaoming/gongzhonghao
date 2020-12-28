<template>
    <div class="layer" >
        <div class="msg" v-show="magShow" ref="layer">
            <div class="msg_wrapper" @touchmove.prevent>
                <div class="msg_title_img">
                    <img src="../assets/img/message.png" alt="提交图标">
                </div>
                <div class="msg_detail">
                    <slot name="message_top"></slot>
                    <slot name="message_middle"></slot>
                    <slot name="message_bottom"></slot>
                </div>
                <div class="msg_btn">
                    <button @click="backHome">返回首页</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   data() {
    return {
    }
   },
   methods: {
    backHome(){
        this.$router.push({name:'home'});
    }
   },
    mounted () {
       this.$refs.layer.style.height = document.getElementById('app').clientHeight + 'px'
    },
   props:{
    magShow:{
        type: Boolean,
        required: true,
    }
   }
}
</script>
<style scoped>
/*消息弹框*/
.msg{
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
}
.msg_wrapper{
    position: fixed;
    height: 2.5rem;
    width: 2.2rem;
    background-color: #ffffff;
    border-radius: 0.1rem;
    left: 50%;
    top: 50%;
    margin-left: -1.1rem;
    margin-top: -1.25rem;
    z-index: 88;
    text-align: center;
}
.msg_wrapper .msg_title_img img{
    height: 0.95rem;
    width: 0.95rem;
    margin-top: -0.2rem;
}
.msg_wrapper .msg_detail{
    margin-top: 0.2rem;
}
.msg_wrapper .msg_detail h4{
    font-size: 0.15rem;
}
.msg_wrapper .msg_detail p{
    font-size: 0.12rem;
    color: #999999;
    margin-top: 0.1rem;
}
.msg_btn{
    margin-top: 0.2rem;
}
.msg_btn button{
    height: 0.44rem;
    line-height: 0.44rem;
    width: 1.3rem;
    border-radius: 0.3rem;
    color: #ffffff;
    font-size: 0.16rem;
    background-color: #f62347;
}
</style>
