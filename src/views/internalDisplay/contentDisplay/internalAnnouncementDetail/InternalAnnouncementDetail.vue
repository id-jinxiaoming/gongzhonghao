<template>
  <div class="internal_announcement_detail">
    <mt-header title="艺成园内部公告">
      <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
      <mt-button slot="right" @click="goList">全部</mt-button>
    </mt-header>
    <title-img sort="4"></title-img>
  </div>
</template>
<script>
import TitleImg from "@/components/TitleImg";
export default {
  data() {
    return {
      detail: ""
    };
  },
  methods: {
    handleClose() {
      this.$router.push({ name: "home" });
    },
    goList() {
      this.$router.push({ name: "internalDisplay" });
    },
    handleClose() {
      this.$router.go(-1);
    }
  },
  components: {
    TitleImg
  }
};
</script>
<style scoped>
.mint-header {
  height: 0.45rem;
  background-color: inherit;
  padding: 0 0.22rem;
  font-size: 0.18rem;
  color: #ffffff;
}
</style>
