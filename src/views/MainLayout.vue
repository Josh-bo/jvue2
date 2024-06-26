<template>
  <div>
    <Navbar />
    <main class="container mt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "MainLayout",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
/* Add any specific styles for the main layout here */
</style>
