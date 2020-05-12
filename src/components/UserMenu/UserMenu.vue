<template>
  <div class="UserMenu">
    <div class="UserInfoContainer">
      <div class="UserProfileImage" :style="InjectUserProfileImage"></div>
      <div class="UserName" >{{this.$auth.user.name}}</div>
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
    InjectUserProfileImage() {
      return { 'background-image': `url("${this.$auth.user.picture}")` };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./_UserMenu.scss";
</style>
