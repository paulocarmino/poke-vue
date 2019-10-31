<template>
  <div class="pokemonsListContainer">
    <Card v-for="(pokemon) in pokemons" :key="pokemon._id" :pokemon="pokemon" />
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapState } from "vuex";

import Card from "./Card";

export default {
  name: "PokemonsList",

  components: {
    Card
  },

  computed: {
    ...mapState(["searchText"])
  },

  data() {
    return {
      skip: null
    };
  },

  apollo: {
    pokemons: {
      query: gql`
        query Pokemons($name: String, $skip: Int) {
          pokemons(
            where: { name_contains: $name }
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
      },
      result({ data }) {
        this.skip = data.pokemons.length;
      }
    }
  }
};
</script>

<style lang="scss">
.pokemonsListContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  padding: 15px 15px;
  /* width: 100%; */
  cursor: pointer;
  filter: saturate(1.6);
}
</style>
