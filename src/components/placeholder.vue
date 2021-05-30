<template>
  <div
    class="placeholder d-flex align-center justify-center"
    v-if="isplaceholder == true"
  >
    <div class="placeholder__content">
      <v-progress-circular
        class="ml-auto mr-auto d-flex align-center justify-center"
        :size="80"
        indeterminate
        color="primary"
      ></v-progress-circular>
      <p>Загрузка данных...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "placeholder",
  props: ["isplaceholder"],
};
</script>

<style lang="scss" scoped>
.placeholder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.9);
  &__content {
    p {
      margin-top: 30px;
      font-size: 1em;
    }
  }
}
</style>
