import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: ""
  },
  mutations: {
    setSearchInputText(state, text) {
      state.searchText = text;
    }
  },
  actions: {
    setSearchInputText(context, text) {
      context.commit("setSearchInputText", text);
    }
  },
  modules: {}
});
