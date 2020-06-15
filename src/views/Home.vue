<template>
  <div class="home">
    <img alt="Monnakakai logo" src="../assets/logo.webp" />
    <Menu></Menu>
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
