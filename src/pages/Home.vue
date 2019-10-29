<template>
  <q-page class="flex">
    <div v-if="$apollo.loading">Loading...</div>
    <!-- {{ pokemons }} -->
    <q-infinite-scroll @load="onLoad" :offset="50" :debounce="500">
      <div v-for="(pokemon, index) in pokemons" :key="index" class="caption">
        <p>{{ pokemon.name }}</p>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">Loading...</div>
      </template>
    </q-infinite-scroll>
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
    return {
      skip: null
    };
  },

  computed: {
    ...mapState(["searchText"])
  },

  methods: {
    // onLoad(index, done) {
    // this.skip = index;
    // console.log(index, done);
    // this.$apollo.queries.pokemons.fetchMore({
    //   variables: {
    //     skip: this.skip
    //   },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     const pokemons = fetchMoreResult.pokemons;
    //     if (!fetchMoreResult) return prev;
    //     if (!prev) return;
    //     console.log(prev, fetchMoreResult, pokemons);
    //     return {
    //       pokemons: {
    //         __typename: prev.pokemons.__typename,
    //         pokemons: [...prev.pokemons, ...pokemons]
    //       }
    //     };
    //   }
    // });
    // done();
    // setTimeout(() => {
    //   if (this.pokemons) {
    //     this.skip = this.pokemons.lenght;
    //     done();
    //   }
    // }, 2000);
    // this.$apollo.queries.pokemons.fetchMore({
    //   variables: {
    //     skip: this.skip
    //   },
    //   updateQuery: (previousResult, { fetchMoreResult }) => {
    //     const pokemons = fetchMoreResult.pokemons.pokemons;
    //     console.log(previousResult);
    //     return {
    //       pokemons: {
    //         __typename: previousResult.pokemons.__typename,
    //         tags: [...previousResult.pokemons.pokemons, ...pokemons]
    //       }
    //     };
    //   }
    // });
    // done();
    onLoad(index, done) {
      // console.log(this.$apollo.queries.pokemons);
      // this.$apollo.queries.pokemons.fetchMore({})
      this.$apollo.queries.pokemons.fetchMore({
        variables: {
          skip: this.skip
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return;

          if (!prev) return;

          console.log(
            prev.pokemons.every(e => fetchMoreResult.pokemons.includes(e))
          );

          // if (prev.pokemons[0].name === "") return;

          return {
            __typename: prev.pokemons.__typename,
            pokemons: [...prev.pokemons, ...fetchMoreResult.pokemons]
          };
        }
      });
      done();
    }
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
      },
      result({ data }) {
        this.skip = data.pokemons.length;
      }
    }
  }
};
</script>
