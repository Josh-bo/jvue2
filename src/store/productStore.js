import { defineStore } from "pinia";
import axios from "axios";
const url = "https://fakestoreapi.com/products";

export const useProductStore = defineStore("productStore", {
  state: () => {
    return {
      products: [],
      searchResults: [],
    };
  },
  getters: {
    filteredProducts(state) {
      return state.searchResults.length ? state.searchResults : state.products;
    },
  },
  actions: {
    async getAllProducts() {
      try {
        const response = await axios.get(url);
        this.products = response.data; // Update the products array
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async searchProducts(query) {
      try {
        const response = await axios.get(`${url}?q=${query}`);
        this.searchResults = response.data; // Update the searchResults array
      } catch (error) {
        console.error("Error searching products:", error);
      }
    },
  },
});
