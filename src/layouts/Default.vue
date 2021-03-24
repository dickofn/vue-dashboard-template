<template>
  <div class="fill-height">
    <AppBar />

    <Drawer />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <Footer />
  </div>
</template>

<script>
import AppBar from "@/components/layouts/AppBar";
import Drawer from "@/components/layouts/Drawer";
import Footer from "@/components/layouts/Footer";

export default {
  name: "LayoutDefault",

  components: {
    AppBar,
    Drawer,
    Footer,
  },
};
</script>
