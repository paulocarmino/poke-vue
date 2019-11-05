<template>
  <QPage class="flex q-mt-sm">
    <div v-if="$apollo.loading">Loading...</div>
    <PokemonsList />

    <Drawer />
  </QPage>
</template>

<style>
</style>

<script>
import PokemonsList from "../components/PokemonsList";
import Drawer from "../components/Drawer";

export default {
  name: "Home",

  components: { PokemonsList, Drawer },

  data() {
    return {};
  }
};
</script>
