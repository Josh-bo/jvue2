<script setup>
import displayProductVue from "./components/displayProduct.vue";

// const user = {
//   id: "123",
//   name: "Joshua",
// };
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- <OptionsComponent /> -->
  <!-- <FormValidate /> -->

  <div class="bg-dark d-flex justify-content-between p-3 text-light">
    <div class="fw-bold fs-3">VUE</div>
    <div class="d-flex gap-3 mt-3 text-end">
      <div>
        <router-link :to="{ name: 'productList' }" class=""
          >Go to Product</router-link
        >
      </div>
    </div>
  </div>
  <router-view />
  <displayProductVue />
</template>

<style scoped></style>
