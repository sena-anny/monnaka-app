<template>
  <div class="articleView">
    <Menu></Menu>
    <Article v-if="post.uid" :post="post" :card="card" />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Article from "@/components/Article.vue";
import { db } from "@/plugins/firebase";

// 記事詳細画面
export default {
  name: "articleView",
  components: {
    Menu,
    Article
  },
  data() {
    return {
      post: {},
      card: false
    };
  },
  firestore() {
    return {
      post: db()
        .collection("posts")
        .doc(this.$route.params.articleId)
    };
  }
};
</script>

<style lang="sass" scoped></style>
