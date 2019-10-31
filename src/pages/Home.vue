<template>
  <q-page class="flex q-mt-sm">
    <div v-if="$apollo.loading">Loading...</div>
    <PokemonsList />
  </q-page>
</template>

<style>
</style>

<script>
import PokemonsList from "../components/PokemonsList";

export default {
  name: "Home",

  components: { PokemonsList }
};
</script>
