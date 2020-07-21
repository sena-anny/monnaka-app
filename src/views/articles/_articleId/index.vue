<template>
  <div class="articleView">
    <Menu></Menu>
    <Article :post="post"></Article>
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
      post: {}
    };
  },
  async created() {
    // 記事IDから投稿内容を呼び出し 画像読み込み
    // 作者の場合だけ編集可能
    const article_id = this.$route.params.articleId;
    const doc_ref = db()
      .collection("posts")
      .doc(article_id);
    doc_ref
      .get()
      .then(
        function(doc) {
          console.log("document data:", doc.data());
          this.post = doc.data();
          this.post.id = article_id;
        }.bind(this)
      )
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  // firestore() {
  //   return {
  //     post: db()
  //       .collection("posts")
  //       .doc(this.$route.params.articleId)
  //   };
  // }
};
</script>

<style lang="sass" scoped></style>
