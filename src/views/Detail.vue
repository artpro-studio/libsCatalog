<template>
  <v-main class="wrapper detail">
    <v-container>
      <v-row>
        <v-col cols="12" class="title">
          <h1 class="headline text-h3 font-weight-bold text-center title mb-5">
            {{ detail.data.general.name }}
          </h1>
          <div class="detail__info d-flex mb-9 justify-center flex-wrap">
            <a
              class="item d-flex align-center"
              v-if="detail.data.general.contacts.email"
              :href="'mailto:' + detail.data.general.contacts.email"
            >
              <v-icon small color="primary" class="mr-2">mdi-mail</v-icon>
              <span>{{ detail.data.general.contacts.email }}</span>
            </a>
            <a
              class="item d-flex align-center"
              v-if="detail.data.general.contacts.phones"
              :href="'tel:' + detail.data.general.contacts.phones[0].value"
            >
              <v-icon small color="primary" class="mr-2">mdi-phone</v-icon>
              <span>{{ detail.data.general.contacts.phones[0].value }}</span>
            </a>
            <a
              class="item d-flex align-center"
              v-if="detail.data.general.contacts.website"
              :href="detail.data.general.contacts.website"
            >
              <v-icon small color="primary" class="mr-2">mdi-web</v-icon>
              <span>{{ detail.data.general.contacts.website }}</span>
            </a>
          </div>
          <v-img
            max-height="500"
            :src="detail.data.general.image.url"
            :alt="detail.data.general.image.title"
          ></v-img>
          <div
            class="detail__text mt-9"
            v-html="detail.data.general.description"
          ></div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      detail: null,
    };
  },
  created() {
    this.detail = JSON.parse(this.$store.state.libs).find(
      (item) => item.data.general.id == this.$route.params.id
    );

    console.log(this.detail);
  },
};
</script>

<style lang="scss" scoped>
.detail {
  &__info {
    a {
      font-size: 0.7em;
      text-decoration: none;
      margin: 0 10px;
    }
  }
  &__text {
    font-size: 0.9em;
  }
}
</style>
