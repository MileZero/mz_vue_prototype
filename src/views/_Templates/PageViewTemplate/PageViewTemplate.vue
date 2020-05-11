<template>
    <div class="PageViewTemplate">
      <table>
        <thead>
          <tr>
            <th colspan=4>AUTH0 USER INFO</th>
          </tr>
          <tr>
            <th colspan=1>PROPERTY</th>
            <th colspan=3>VALUE</th>
          </tr>
        </thead>
        <tr v-for="(value, prop) in userInfo" v-bind:key="prop">
          <td colspan=1>{{prop}}</td>
          <td colspan=3>{{value}}</td>
        </tr>
      </table>
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
@import "./_PageViewTemplate.scss";
</style>
