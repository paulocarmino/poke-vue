<template>
  <q-page class="flex">
    <div v-if="$apollo.loading">Loading...</div>
    {{ pokemons }}
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from "vuex";
import gql from "graphql-tag";

export default {
  name: "Home",

  data() {
    return {};
  },

  computed: {
    ...mapState(["searchText"])
  },

  apollo: {
    pokemons: {
      query: gql`
        query Pokemons($name: String, $skip: Int) {
          pokemons(
            where: { name_contains: $name }
            first: 20
            skip: $skip
            orderBy: number_ASC
          ) {
            _id
            number
            name
            specie
            weight
            height
            description
            color
            img
            types
            strengths
            weaknesses
            stats {
              hp
              attack
              defense
              specialAttack
              specialDefense
              speed
              total
            }
          }
        }
      `,
      variables() {
        return {
          name: this.searchText
        };
      }
    }
  }
};
</script>
