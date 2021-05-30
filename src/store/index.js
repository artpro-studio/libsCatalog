import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    libs: null,
  },
  mutations: {
    setLibs(state, data) {
      state.libs = data;
    },
    setClear(state) {
      state.libs = null;
    },
  },
  actions: {
    requestToLibs({ commit }) {
      commit("setClear");
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/base.json`)
        .then((response) => {
          commit("setLibs", JSON.stringify(response.data));
        });
    },
  },
  modules: {},
});
