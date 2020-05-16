<template>
  <div class="Unauthorized">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css"
      integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ"
      crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <!-- For backards compatibility with v4 names. Please use new names only to get rid of this. -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/v4-shims.css">

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="https://milevision.milezero.com/">
            <img src="../../assets/mzlogoInvert.png" width="200" alt="">
        </a>
    </nav>
    <div class="container align-items-center">
        <div class="row">
            <div class="col text-center">
                <h2>
                    You are not authorized to view this page. Please log in.</h2>
                <img src="../../assets/nowhere.png">
            </div>
        </div>
    </div>
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
@import "./_Unauthorized.scss";
</style>
