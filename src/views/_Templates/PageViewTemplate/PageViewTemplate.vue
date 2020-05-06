<template>
    <div class="PageViewTemplate">
      <table>
        <thead>
          <tr>
            <th colspan=2>AUTH0 USER INFO</th>
          </tr>
          <tr>
            <th>PROPERTY</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tr v-for="(value, prop) in userInfo" v-bind:key="prop">
          <td>{{prop}}</td>
          <td>{{value}}</td>
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
