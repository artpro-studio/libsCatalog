<template>
  <v-form class="mb-5 catalog__filter" @submit.prevent="searchChange">
    <v-col cols="12" class="pa-0">
      <v-text-field
        v-model="query.search"
        label="Поиск"
        @keyup="searchChange"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="6" class="pa-0">
      <a
        href="javascript:void(0)"
        @click="sortName"
        class="catalog__filter_sort"
        >Сортировка по названию</a
      >
    </v-col>
  </v-form>
</template>

<script>
export default {
  name: "catalogFilter",
  data() {
    return {
      setTime: null,
      query: {
        search: this.$route.query.search || "",
        sort: this.$route.query.sort == true ? true : false,
      },
    };
  },
  methods: {
    searchChange() {
      //Поиск библиотек
      clearTimeout(this.setTime);
      this.setTime = setTimeout(async () => {
        let formData = {
          search: this.query.search,
        };
        this.$emit("searchChange", formData);
        this.$router
          .push({ path: "/", query: { ...this.query } })
          .catch(() => {});
      }, 1000);
    },
    sortName() {
      this.sort = !this.sort;
      this.$emit("sortName", this.sort);
      this.$router
        .push({ path: "/", query: { ...this.query } })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__filter {
    &_sort {
      text-decoration: none;
      font-size: 0.9em;
      opacity: 0.7;
    }
  }
}
</style>
