<template>
  <v-container class="fluid fill-height">
    <v-layout justify-center align-center>
      <v-card class="mx-auto" width="500" max-width="100%">
        <v-card-title class="primary white--text"
          ><v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo--light.png"
            transition="scale-transition"
            width="40"
          />{{ $t("login.login") }}</v-card-title
        >

        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(login)">
            <v-card-text>
              <ValidationProvider
                mode="lazy"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  id="username"
                  v-model="username"
                  :label="$t('login.username')"
                  :error-messages="errors"
                  prepend-icon="mdi-account"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                mode="lazy"
                rules="required|min:8"
                v-slot="{ errors }"
              >
                <v-text-field
                  autocomplete
                  id="password"
                  v-model="password"
                  :label="$t('login.password')"
                  :hint="$t('rules.passwordHint')"
                  :error-messages="errors"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                ></v-text-field>
              </ValidationProvider>
            </v-card-text>

            <v-card-actions class="text-right">
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary">
                {{ $t("login.login") }}
              </v-btn>

              <v-btn
                v-if="false"
                :to="{ name: 'ForgotPassword' }"
                color="primary"
                text
              >
                {{ $t("login.forgotPassword") }}
              </v-btn>
            </v-card-actions>
          </form>
        </ValidationObserver>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import t from "@/plugins/i18n.js";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { min, required } from "vee-validate/dist/rules";

extend("required", { ...required, message: t.t("rules.required") });
extend("min", { ...min, message: t.t("rules.min") + " {length}" });

export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      console.log(data);
    },
  },
};
</script>
