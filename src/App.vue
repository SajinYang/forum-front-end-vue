<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<!-- 載入boostrap/Navbar -->
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>

