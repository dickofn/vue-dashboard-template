<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text elevation="0" v-bind="attrs" v-on="on">
        <div class="mr-2 hidden-sm-and-down">
          {{ $t("locales.language") }}
        </div>
        <v-img
          v-if="$i18n.locale === 'en'"
          alt="English"
          src="@/assets/flag-en.png"
          transition="scale-transition"
          width="20"
        />
        <v-img
          v-else
          alt="Indonesia"
          src="@/assets/flag-id.png"
          transition="scale-transition"
          width="20"
        />
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list nav dense>
      <v-list-item @click="changeLang('en')">
        <v-list-item-avatar :rounded="'0'">
          <v-img
            alt="English"
            src="@/assets/flag-en.png"
            transition="scale-transition"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="$t('locales.en')"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="changeLang('id')">
        <v-list-item-avatar :rounded="'0'">
          <v-img
            alt="Indonesia"
            src="@/assets/flag-id.png"
            transition="scale-transition"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="$t('locales.id')"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguagesDropdown",

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
