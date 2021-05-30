import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#006AFE",
        secondary: "#E7F0FF",
        accent: "#8c9eff",
        error: "#b71c1c",
        white: "#fff",
        color: "#006AFE",
      },
    },
  },
});
