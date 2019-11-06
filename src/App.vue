<template>
  <q-layout>
    <Header />
    <q-page-container>
      <Home />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";

export default {
  name: "LayoutDefault",

  components: {
    Header,
    Home
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style>
</style>
