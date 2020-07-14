<template>
  <div class="home">
    <Menu></Menu>
    <h2>門仲会へようこそ</h2>
    <img alt="Monnakakai logo" src="../assets/logo.webp" />
    <h2>最新の投稿</h2>
    <ArticleList :limit="10"></ArticleList>
    <!--画面下に投稿画面へのリンクを作成する-->
    <b-button variant="success" href="/articles/post/">
      投稿する
    </b-button>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "Home",
  components: {
    Menu,
    ArticleList
  }
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  text-align: center;
}
img {
  width: 100%;
}
</style>
