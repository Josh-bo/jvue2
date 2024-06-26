<template>
  <div class="container">
    <h1 class="my-4">Products</h1>
    <div v-if="loading" class="text-center"><LoaderVue /></div>
    <div v-else class="row mx-auto justify-content-center">
      <div
        class="col-sm-12 col-md-5 col-lg-3 my-5 shadow-lg cardHeight"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card border-0 mb-4">
          <img :src="product.image" class="card-img-top" :alt="product.title" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <hr />
            <div class="d-flex justify-content-between">
              <div class="card-text mt-2">
                <strong>Price:</strong> ${{ product.price }}
              </div>

              <button class="btn text-light border-0 bg-primary">
                <small> Add to cart </small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "../store/productStore";
import LoaderVue from "./LoaderSpin.vue";

export default {
  name: "ProductList",
  components: {
    LoaderVue,
  },
  setup() {
    const productStore = useProductStore();
    const loading = ref(true);

    onMounted(async () => {
      await productStore.getAllProducts();
      loading.value = false;
    });

    return {
      products: computed(() => productStore.filteredProducts),
      loading,
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.cardHeight {
  height: 23rem !important;
}
</style>
