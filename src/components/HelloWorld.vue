<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="../assets/logo.png" /> -->
    <div v-if="$apollo.loading">Loading...</div>
    <input type="text" v-model="searchText" />
    {{ searchText }}
    <br />
    {{ pokemons }}
  </q-page>
</template>

<style>
</style>

<script>
import gql from "graphql-tag";

export default {
  name: "HelloWorld",

  data() {
    return {
      searchText: ""
    };
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
