<template>
  <div class="fill-height">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center justify-center mr-5">
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="@/assets/logo--light.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <LanguagesDropdown />
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="fill-height">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import LanguagesDropdown from "@/components/layouts/LanguagesDropdown";

export default {
  name: "LayoutClean",

  components: {
    LanguagesDropdown,
  },

  methods: {
    changeLang(lang) {
      if (this.$i18n.locale != lang) {
        localStorage.setItem("lang", lang);
        this.$i18n.locale = lang;
        this.$router.go();
      }
    },
  },
};
</script>
