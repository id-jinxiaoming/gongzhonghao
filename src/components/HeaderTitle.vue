<template>
    <div class="header_title">
        <div class="choice_title">
            <slot name="title_h"></slot>
            <slot name="title_p"></slot>
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
.choice_title{
    padding-left: 0.22rem;
}
.choice_title>h4{
    font-size: 0.22rem;
    color: #ffffff;
}
.choice_title>p{
    margin-top: 0.12rem;
    font-size: 0.15rem;
    color: #ffffff;
}
</style>
