<template>
  <div class="history_list">
    <nav-bar></nav-bar>
    <div class="invoice_list">
      <up-load :upLoad="onload" :allLoaded="allLoaded">
        <ul>
          <li v-for="item in lists" :key="item.id">
            <router-link :to="{name:'reservation_application_Invoice',query:{id:item.id}}">
              <p>
                <em>申请时间:</em>
                <span>{{ item.addTime }}</span>
              </p>
              <p>
                <em>项目名称:</em>
                <span>{{ item.entryName }}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </up-load>
    </div>
  </div>
</template>
<script>
import { historyList } from "@/api/index";
import NavBar from "@/components/NavBar";
import { getToken } from "@/utils/token";
import { messAlert } from "@/utils/message";
import UpLoad from "@/components/UpLoad";
export default {
  data() {
    return {
      lists: [],
      page: 1,
      allLoaded: false
    };
  },
  methods: {
    onload() {
      this.page++;
      this.getList(this.page);
    },
    getList(page) {
      let token = getToken() || "";
      historyList({
        token,
        page: page,
        rows: 10
      })
        .then(res => {
          if (res.data.state == 200) {
            this.lists = this.lists.concat(res.data.datas.all);
            if (res.data.datas.all.length < 10) {
              this.allLoaded = true;
            }
          } else if (res.data.state == 500) {
            messAlert(res.data.message);
          } else if (res.data.state == 1000) {
            messAlert(res.data.message);
            this.$router.push({ name: "login" });
          }
        })
        .catch(err => {
          messAlert(err.message);
        });
    }
  },
  created() {
    this.getList(1);
  },
  components: {
    NavBar,
    UpLoad
  }
};
</script>
<style scoped>
.invoice_list {
  width: 3.4rem;
  margin: 0 auto;
}
.invoice_list ul li {
  width: 100%;
  padding: 0.12rem;
  height: 0.8rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.07rem;
  margin-top: 0.1rem;
}
.invoice_list ul li a {
  width: 3.16rem;
  color: #000000;
}
.invoice_list ul li a p em {
  display: inline-block;
  font-style: normal;
  height: 0.28rem;
  line-height: 0.28rem;
  font-size: 0.16rem;
}
.invoice_list ul li a p span {
  display: inline-block;
  margin-left: 0.15rem;
  width: 2rem;
  height: 0.28rem;
  line-height: 0.28rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  font-size: 0.16rem;
}
</style>
