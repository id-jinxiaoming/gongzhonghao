<template>
    <div class="login_form">
        <div class="login_wrapper">
            <h4>
                <slot name="title"></slot>
            </h4>
            <div class="main">
                <div class="head"><a href="javascript:;"><img src="../assets/img/head.png" alt="头像"></a></div>
                <div class="form_list">
                    <slot name="form"></slot>
                </div>
                <slot name="btn"></slot>
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
}
</script>
<style scoped>
.login_wrapper{
    margin-top: 0.5rem;
}
.login_wrapper>h4{
    font-size: 0.24rem;
    color: #fee97a;
    text-align: center;
}
.login_wrapper .main{
    margin: 0.8rem auto 0;
    background-color: #ffffff;
    border: 0.03rem solid #fee97a;
    width: 3.1rem;
    border-radius: 0.1rem;
    padding: 0 0.36rem 0.3rem;
}
.main .head{
    text-align: center;
    margin-top: -0.43rem;
}
.main .head a{
    border: 0.03rem solid #fee97a;
    border-radius: 50%;
    height: 0.8rem;
    width: 0.8rem;
}
.main .head a img{
    height: 0.8rem;
    width: 0.8rem;
    display: block;
    margin-top: -0.005rem;
}
.form_btn{
    margin-top: 0.2rem;
    text-align: center;
}
.form_btn button{
    width: 2.32rem;
    height: 0.5rem;
    font-size: 0.16rem;
    color: #efc464;
    border: 0.02rem solid #fee97a;
    background-color: #ffffff;
    border-radius: 0.3rem;
}
</style>
