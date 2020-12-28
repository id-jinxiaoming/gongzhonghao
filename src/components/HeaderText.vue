<template>
    <div class="header_text">
        <div class="title">
            <h4>
                <slot></slot>
            </h4>
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
.title>h4{
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.18rem;
    color: #ffffff;
}
</style>
