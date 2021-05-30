<template>
  <v-main class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" class="title">
          <h1 class="headline text-h3 font-weight-bold text-center title mb-3">
            Список библиотек
          </h1>
          <p class="text-center font-weight-light">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне
          </p>
        </v-col>
        <v-col cols="12">
          <catalog-filter
            @searchChange="searchChange"
            @sortName="sortElements"
          />
        </v-col>
        <v-col cols="12" class="pa-0 d-flex flex-wrap catalog__items">
          <v-col
            cols="12"
            md="6"
            v-for="(item, index) in pageElemets"
            :key="index"
          >
            <catalogItem :data="item.data.general" />
          </v-col>
        </v-col>

        <v-col cols="12" class="mt-10 mb-10">
          <v-pagination
            v-model="pageNavigations.page"
            :length="pageNavigations.pageLength"
            @input="paginationChange"
            :total-visible="12"
            circle
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
    <placeholder :isplaceholder="isPlaceholder" />
  </v-main>
</template>

<script>
import catalogItem from "./catalogItem";
import catalogFilter from "./catalogFilter";
import placeholder from "./placeholder";
export default {
  name: "catalog",
  data() {
    return {
      base: null,
      pageNavigations: {
        page: 1,
        countView: 10,
        pageLength: 0,
        startPage: 0,
        endPage: 10,
      },
      loadParams: {
        sort: this.$route.query.sort || null,
        search: this.$route.query.search || null,
      },
      isPlaceholder: true,
    };
  },
  components: { catalogItem, catalogFilter, placeholder },
  created() {
    if (this.base === null) {
      this.$store.dispatch("requestToLibs");
    }
  },
  computed: {
    pageElemets() {
      if (this.base === null) {
        return [];
      }

      return this.base.slice(
        this.pageNavigations.startPage,
        this.pageNavigations.endPage
      );
    },
  },
  methods: {
    paginationChange() {
      //Переход по страницам
      this.pageNavigations.startPage =
        (this.pageNavigations.page - 1) * this.pageNavigations.countView;
      this.pageNavigations.endPage =
        (this.pageNavigations.page + 1) * this.pageNavigations.countView;
    },
    paginationNull() {
      //Возращение на первую страницу
      this.pageNavigations.page = 1;
      this.pageNavigations.startPage = 0;
      this.pageNavigations.endPage = this.pageNavigations.countView;
    },
    searchChange(formData) {
      //Поиск элементов
      this.paginationNull();
      this.isPlaceholder = true;
      if (this.$store.state.libs === null) {
        return;
      }

      if (formData.search === "") {
        this.base = JSON.parse(this.$store.state.libs);
        this.pageNavigations.pageLength = Math.ceil(
          this.base.length / this.pageNavigations.countView
        );
        this.isPlaceholder = false;
        return;
      }

      this.base = JSON.parse(this.$store.state.libs);
      this.base = this.base.filter((item) =>
        item.data.general.name
          .toUpperCase()
          .includes(formData.search.toUpperCase())
      );

      this.pageNavigations.pageLength = Math.ceil(
        this.base.length / this.pageNavigations.countView
      );
      this.isPlaceholder = false;
    },
    sortElements(status) {
      this.paginationNull();

      if (status == true) {
        this.base = this.base.sort(function (a, b) {
          if (a.nativeName < b.nativeName) return -1;
          if (a.nativeName > b.nativeName) return 1;
          return 0;
        });
        return;
      }

      this.base = this.base.sort(function (a, b) {
        if (a.nativeName > b.nativeName) return -1;
        if (a.nativeName < b.nativeName) return 1;
        return 0;
      });
    },
  },
  watch: {
    "$store.state.libs": function (e) {
      if (e != null) {
        this.base = JSON.parse(e);
        this.pageNavigations.pageLength = Math.ceil(
          this.base.length / this.pageNavigations.countView
        );
        if (this.loadParams.sort != null) {
          this.sortElements(this.loadParams.sort);
        }
        if (this.loadParams.search != null) {
          let formData = {
            search: this.loadParams.search,
          };
          this.searchChange(formData);
        }
        this.isPlaceholder = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__items {
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar-button {
      background-image: url("");
      background-repeat: no-repeat;
      width: 5px;
      height: 0px;
    }

    &::-webkit-scrollbar-track {
      background-color: #ecedee;
    }

    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 0px;
      border-radius: 0px;
      background-color: #006afe;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #0668f1;
    }

    &::-webkit-resizer {
      background-image: url("");
      background-repeat: no-repeat;
      width: 4px;
      height: 0px;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }
  }
}
</style>
