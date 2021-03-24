<template>
  <v-navigation-drawer
    id="default-drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    mini-variant-width="80"
    app
    mobile-breakpoint="960"
    color="primary"
    width="320"
  >
    <div class="px-2">
      <DrawerHeader />

      <v-divider color="white" class="mx-3 mb-2" />

      <DrawerList :items="items" />
    </div>

    <div class="pt-12" />
  </v-navigation-drawer>
</template>

<script>
import DrawerHeader from "@/components/layouts/DrawerHeader";
import DrawerList from "@/components/layouts/DrawerList";

export default {
  name: "Drawer",

  components: {
    DrawerHeader,
    DrawerList,
  },

  data() {
    return {
      items: [
        {
          title: this.$t("nav.home"),
          icon: "mdi-home",
          to: "/",
        },
        {
          title: this.$t("nav.cardManagement"),
          icon: "mdi-credit-card-outline",
          items: [
            {
              title: this.$t("nav.generateCard"),
              icon: "mdi-credit-card-plus-outline",
              to: "/card-management/generate",
            },
            {
              title: this.$t("nav.cardActivation"),
              icon: "mdi-credit-card-check-outline",
              to: "/card-management/activation",
            },
            {
              title: this.$t("nav.history"),
              icon: "mdi-history",
              to: "/card-management/history",
            },
          ],
        },
        {
          title: this.$t("nav.supplierInformation"),
          icon: "mdi-account-group",
          items: [
            {
              title: "Test",
              icon: "mdi-clipboard-outline",
              to: "/supplier-information/test",
            },
          ],
        },
      ],
    };
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

<style lang="sass">
#default-drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
