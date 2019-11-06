import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: "",
    openDetails: false,
    activePokemon: {}
    // activePokemon: {
    //   _id: "ck26kthz800880706xk67720i",
    //   number: "#001",
    //   name: "Bulbasaur",
    //   specie: "Seed Pokémon",
    //   weight: "6.9 kg",
    //   height: "0.7 m",
    //   description:
    //     "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker green patches. It has red eyes with white pupils and scleras and pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
    //   color: "#87c4a2",
    //   img:
    //     "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png",
    //   types: ["Grass", "Poison"],
    //   strengths: ["Fighting", "Water", "Grass", "Electric", "Fairy"],
    //   weaknesses: ["Flying", "Fire", "Psychic", "Ice"],
    //   stats: {
    //     hp: "45",
    //     attack: "49",
    //     defense: "49",
    //     specialAttack: "65",
    //     specialDefense: "65",
    //     speed: "45",
    //     total: "318",
    //     __typename: "PokemonStat"
    //   },
    //   __typename: "Pokemon"
    // }
  },
  mutations: {
    setSearchInputText(state, text) {
      state.searchText = text;
    },
    openDetailsHandler(state) {
      if (state.openDetails === true) {
        state.activePokemon = {};
      }

      state.openDetails = !state.openDetails;
    },
    setActivePokemon(state, pokemon) {
      state.activePokemon = pokemon;
    }
  },
  actions: {
    setSearchInputText({ commit }, text) {
      commit("setSearchInputText", text);
    },
    openDetailsHandler({ commit }) {
      commit("openDetailsHandler");
    },
    setActivePokemon({ commit }, pokemon) {
      console.log("passou");
      commit("setActivePokemon", pokemon);
    }
  },
  modules: {}
});
