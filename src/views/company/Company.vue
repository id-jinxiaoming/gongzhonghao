<template>
  <div class="company">
    <header-text>公司概览</header-text>
    <img-show status="1" sort="1">
      <h4>公司简介</h4>
    </img-show>
    <div class="main_list">
      <ul class="clearfix">
        <li v-for="item in grid" :key="item.id">
          <router-link :to="item.router">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ImgShow from "@/components/ImgShow";
import HeaderText from "@/components/HeaderText";
let grid = [
  { id: 1, title: "设计顾问", router: { name: "designConsultant" } },
  { id: 2, title: "投标报价", router: { name: "tenderOffer" } },
  { id: 3, title: "管理咨询", router: { name: "managementConsulting" } },
  { id: 4, title: "资金援助", router: { name: "financialAssistance" } },
  { id: 5, title: "商务服务", router: { name: "businessServices" } },
  { id: 6, title: "竣工结算", router: { name: "completionSettlement" } },
  { id: 7, title: "铭筑集采", router: { name: "inscriptionCollection" } },
  { id: 8, title: "铭筑工匠", router: { name: "mingCraftsman" } }
];
export default {
  data() {
    return {
      grid: grid,
      scrollTop: null
    };
  },
  activated() {
    window.scroll(0, document.body.scrollHeight);
  },
  components: {
    ImgShow,
    HeaderText
  }
};
</script>
<style scoped>
.main_list {
  margin-top: 0.1rem;
  padding: 0 0.5rem;
}
.main_list ul li {
  margin-top: 0.13rem;
  margin-left: 0.15rem;
  float: left;
  width: 1.3rem;
  height: 0.4rem;
  border-radius: 0.15rem;
  background-color: #f62347;
}
.main_list ul li:nth-child(odd) {
  margin-left: 0;
}
.main_list ul li a {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  color: #ffffff;
  line-height: 0.4rem;
  text-align: center;
}
</style>
