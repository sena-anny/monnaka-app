<template>
  <div>
    <b-card
      :title="this.post.title"
      :img-src="this.imgPath"
      :img-alt="this.post.title"
      style="width: 20rem;"
      class="mb-2 ml-4 mr-4"
      img-top
      tag="article"
    >
      <b-card-text>
        <p>投稿者 {{ editor.displayName }}</p>
        <p>最終更新日時 {{ post.updatedAt }}</p>
      </b-card-text>
      <b-card-body v-if="!card">
        <p>{{ this.post.content }}</p>
      </b-card-body>
      <b-button v-if="canEdit" :href="getArticleEditPath" variant="primary"
        >投稿内容を編集する</b-button
      >
      <b-button v-if="this.card" :href="getArticlePath" variant="primary"
        >詳細</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { db, storage, auth } from "@/plugins/firebase";

export default {
  name: "Article",
  props: ["post", "card"],
  data() {
    return {
      editor: {},
      loginUser: { uid: String },
      imgPath: ""
    };
  },
  computed: {
    getArticlePath() {
      const article_id = this.$props.post.id;
      return "/articles/" + article_id + "/";
    },
    canEdit() {
      if (this.$props.card) return false;
      if (!this.loginUser.uid) return false;
      if (this.$props.post.uid != this.$data.loginUser.uid) return false;
      return true;
    },
    getArticleEditPath() {
      const article_id = this.$props.post.id;
      return "/articles/" + article_id + "/edit";
    }
  },
  created() {
    // ユーザー情報取得
    auth().onAuthStateChanged(user => {
      this.loginUser.uid = user.uid;
    });
    if (this.post.image) {
      const gsReference = storage()
        .ref()
        .child(this.post.image);
      gsReference
        .getDownloadURL()
        .then(
          function(url) {
            this.imgPath = url;
          }.bind(this)
        )
        .catch(e => console.log(e));
    }
  },
  firestore() {
    return {
      editor: db()
        .collection("users")
        .doc(this.$props.post.uid)
    };
  }
};
</script>

<style scoped></style>
