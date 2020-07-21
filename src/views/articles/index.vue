<template>
  <div class="articleList">
    <Menu></Menu>

    <b-button variant="success" href="/articles/post/">
      投稿する
    </b-button>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

// 記事詳細画面
export default {
  name: "articleList",
  components: {
    Menu
  }
};
</script>

<style lang="sass" scoped></style>
