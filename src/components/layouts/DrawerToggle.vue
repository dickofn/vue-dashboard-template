<template>
  <v-btn class="ml-3 mr-4" elevation="1" fab small @click="mini = !mini">
    <v-icon>
      {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "DrawerToggle",

  computed: {
    mini: {
      get: function () {
        return this.$store.state.app.mini;
      },
      set: function (val) {
        this.$store.dispatch("app/updateMini", val);
      },
    },
  },
};
</script>
