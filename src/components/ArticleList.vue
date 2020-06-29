<template>
  <div>
    <Article v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { db } from "../plugins/firebase";
import Article from "@/components/Article.vue";

// URLとタイトルを作成してArticleコンポーネントに渡す

export default {
  name: "ArticleList",
  components: {
    Article
  },
  props: { limit: Number },
  data() {
    return {
      posts: []
    };
  },
  firestore() {
    return {
      posts: db()
        .collection("posts")
        .orderBy("updatedAt", "desc")
        .limit(this.$props.limit)
    };
  }
};
</script>

<style scoped></style>
