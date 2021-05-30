<template>
  <v-app>
    <v-app-bar app class="header white">
      <div class="d-flex align-center">
        <router-link
          to="/"
          class="header__logo d-flex align-center font-weight-bold"
        >
          <img src="./assets/logo.png" alt="" />
          <span>libsCatalog</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn color="secondary" class="main_btn secondary"> Контакты </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.theme--light.v-application {
  color: #10193e !important;
  a {
    color: #10193e;
  }
  .v-btn--is-elevated {
    box-shadow: none !important;
  }
}
body .v-application .secondary {
  color: #006afe !important;
}

body {
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #10193e !important;
  }
  .theme--light.v-list-item .v-list-item__subtitle,
  .theme--light.v-list-item .v-list-item__action-text {
    color: #10193e !important;
  }
  .v-pagination {
    &__item {
      font-size: 1em;
    }
  }
}

body {
  font-size: 18px;
  .v-application {
    .header {
      box-shadow: none !important;
      &__logo {
        img {
          height: 30px;
          margin-right: 10px;
        }
      }
      a {
        text-decoration: none;
      }
    }
    .title {
      h1 {
        text-shadow: 0px 13px 50px #b1b4c0;
        font-size: 2.8em !important;
      }
      p {
        font-size: 0.9em;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  body {
    font-size: 12px;
    .v-application {
      .title {
        h1 {
          text-shadow: 0px 13px 50px #b1b4c0;
          font-size: 1.5em !important;
        }
        p {
          font-size: 0.7em;
          line-height: 1.4;
        }
      }
      .header {
        .main_btn {
          font-size: 1em;
        }
      }
    }
  }
}
</style>
