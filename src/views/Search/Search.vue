<template>
    <div class="Search">

    </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      userInfo: this.$auth.user,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./_Search.scss";
</style>
