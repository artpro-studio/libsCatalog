<template>
  <v-card class="catalog__item mx-auto" outlined @click="clickElement(data.id)">
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey">
        <v-img
          height="250"
          :src="data.image.url"
          :alt="data.image.title"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content class="catalog__item_content">
        <v-list-item-title class="catalog__item_title headline mb-1">
          {{ data.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="catalog__item_desc">{{
          data.organization.name
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="catalog__item_btn" outlined rounded text> Перейти </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "catalogItem",
  props: ["data"],
  methods: {
    clickElement(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &__item {
    &_title {
      font-size: 1.2em;
      font-weight: 500;
    }
    &_desc {
      font-size: 0.8em;
    }
    &_btn {
      font-size: 0.7em;
      color: #10193e;
    }
  }
}
@media screen and (max-width: 650px) {
  .catalog {
    &__item {
      &_title {
        white-space: normal;
        font-size: 1.3em !important;
        margin-bottom: 8px !important;
      }
      &_desc {
        font-size: 0.9em;
      }
      &_content {
        align-self: flex-start !important;
      }
      &_btn {
        font-size: 0.9em;
      }
    }
  }
}
</style>
