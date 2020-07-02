<template>
  <div class="post">
    <Menu></Menu>
    <h2>投稿画面</h2>
    <!-- タイトル -->
    <!-- 本文 -->
    <!-- タグ -->
    <!-- 写真 -->
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

// firestoreに投稿内容をアップロードする
// 写真はgoogle storage利用する
export default {
  name: "Home",
  components: {
    Menu
  },
  data() {
    return {};
  },
  methods: {
    postData: function() {
      // 投稿内容登録
      // createdAt updatedAt uid
    }
  }
};
</script>

<style lang="sass" scoped></style>
