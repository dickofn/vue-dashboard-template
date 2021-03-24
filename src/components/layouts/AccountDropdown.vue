<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :medium="$vuetify.breakpoint.xs"
        :small="$vuetify.breakpoint.md"
        :x-small="$vuetify.breakpoint.sm"
        text
        elevation="0"
        v-bind="attrs"
        v-on="on"
      >
        <div class="mr-2 hidden-sm-and-down">{{ username }}</div>
        <v-icon>mdi-account</v-icon>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list nav dense>
      <v-list-item class="hidden-md-and-up">
        <v-list-item-content>
          <v-list-item-title v-text="username"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="logout()">
        <v-list-item-content>
          <v-list-item-title v-text="$t('nav.logout')"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "AccountDropdown",

  computed: {
    username() {
      return "Dummy";
    },
  },

  methods: {
    logout() {
      console.log("Logout");
    },
  },
};
</script>
