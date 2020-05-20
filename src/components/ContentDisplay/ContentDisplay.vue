<template>
  <div class="ContentDisplay">
    <iframe v-if="sourcePage" :src="sourcePage"></iframe>
    <router-view name="ContentDisplay"></router-view>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      sourcePage: '',
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./_ContentDisplay.scss";
</style>
