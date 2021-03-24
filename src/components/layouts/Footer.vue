<template>
  <v-footer id="default-footer" color="transparent" absolute app inset>
    <v-container>
      <v-row align="center">
        <v-spacer></v-spacer>
        <v-col cols="12" md="auto">
          <div class="pt-6 pt-md-0 text-center">
            &copy; {{ new Date().getFullYear() }},
            <span class="primary--text"> Dicko Finus </span>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
