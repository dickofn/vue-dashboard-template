<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  created() {
    this.$i18n.locale = localStorage.getItem("lang") || "en";
  },
};
</script>
