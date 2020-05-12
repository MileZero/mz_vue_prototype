<template>
  <div class="UserMenu">
    <div class="UserInfoContainer">
      <div :style="ProfileImage"></div>
      <div class="UserName" v-if="this.$auth.user.name">{{this.$auth.user.name}}</div>
    </div>
    <div class="UserNotifications">
    </div>
    <div class="UserSettings">
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  computed: {
    ProfileImage() {
      return {
        'background-repeat': 'round',
        content: '',
        width: '35px',
        height: '35px',
        'border-radius': '50%',
        'background-image': `url("${this.$auth.user.picture}")`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_UserMenu.scss";
</style>
