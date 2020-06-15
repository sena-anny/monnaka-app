<template>
  <div class="home">
    <Menu></Menu>
    <h2>門仲会へようこそ</h2>
    <img alt="Monnakakai logo" src="../assets/logo.webp" />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu
  }
};
</script>

<style scoped>
h2 {
  margin-top: 80px;
  text-align: center;
}
</style>
