<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
#app {
  padding-bottom: 0.5rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
