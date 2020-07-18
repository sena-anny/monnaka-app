<template>
  <div class="articleView">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

// 記事詳細画面
export default {
  name: "articleView",
  components: {
    Menu
  }
  // article_idから投稿内容を呼び出し 画像読み込み
  // 作者の場合だけ編集可能


};
</script>

<style lang="sass" scoped></style>
