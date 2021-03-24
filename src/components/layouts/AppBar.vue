<template>
  <v-app-bar app absolute color="transparent" height="70" flat>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

    <DrawerToggle class="hidden-sm-and-down" />

    <v-toolbar-title class="font-weight-light" v-text="name" />

    <v-spacer />

    <AccountDropdown />

    <LanguagesDropdown />
  </v-app-bar>
</template>

<script>
import DrawerToggle from "@/components/layouts/DrawerToggle";
import AccountDropdown from "@/components/layouts/AccountDropdown";
import LanguagesDropdown from "@/components/layouts/LanguagesDropdown";

export default {
  name: "AppBar",

  components: {
    DrawerToggle,
    AccountDropdown,
    LanguagesDropdown,
  },

  computed: {
    drawer: {
      get: function () {
        return this.$store.state.app.drawer;
      },
      set: function (val) {
        this.$store.dispatch("app/updateDrawer", val);
      },
    },
    name() {
      switch (this.$route.name) {
        case "Home":
          return this.$t("nav.home");

        case "GenerateCard":
          return this.$t("nav.generateCard");

        case "CardActivation":
          return this.$t("nav.cardActivation");

        case "CardHistory":
          return this.$t("nav.history");

        default:
          return "SBUX CM";
      }
    },
  },
};
</script>
