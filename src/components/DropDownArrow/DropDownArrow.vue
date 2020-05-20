<template>
  <div class="ArrowContainer" v-bind:class="{ArrowSelected: isSelected}">
    <div class="Arrow ArrowLeftSide"></div>
    <div class="Arrow ArrowRightSide"></div>
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_DropDownArrow.scss";
</style>
