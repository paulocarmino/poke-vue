<template>
  <q-header class="q-mt-sm">
    <q-toolbar class="bg-white text-black vertical-middle">
      <img src="../assets/logo.svg" class="q-mr-md" height="40px" width="40px" />

      <q-input
        dense
        filled
        hide-bottom-space
        debounce="500"
        v-model="text"
        placeholder="Search for pokemons..."
        class="searchInput"
        color="grey-4"
      >
        <template v-slot:prepend>
          <q-icon name="mdi-magnify" />
        </template>
        <template v-slot:append>
          <q-icon v-if="text" name="mdi-close" class="cursor-pointer" @click="text = ''" />
        </template>
      </q-input>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(["setSearchInputText"])
  },
  watch: {
    text: function() {
      this.setSearchInputText(this.text);
    }
  }
};
</script>

<style lang="scss">
.searchInput {
  flex: 1;
  .q-field__inner {
    .q-field__control,
    .q-field__marginal {
      height: 34px;
      border-radius: 4px;
    }
  }
}
</style>
