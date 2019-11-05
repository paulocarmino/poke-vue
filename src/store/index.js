import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: "",
    openDetails: true,
    activePokemon: {}
  },
  mutations: {
    setSearchInputText(state, text) {
      state.searchText = text;
    },
    openDetailsHandler(state) {
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
