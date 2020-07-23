<template>
  <div>
    <b-card
      :title="this.post.title"
      :img-src="this.imgPath"
      :img-alt="this.post.title"
      style="max-width: 20rem;max-height: 40rem;"
      img-top
      tag="article"
      class="mb-2"
    >
      <b-card-text>
        <p>投稿者 {{ user.displayName }}</p>
        <p>最終更新日時 {{ post.updatedAt }}</p>
      </b-card-text>
      <b-button v-if="this.card" :href="getArticlePath" variant="primary">詳細</b-button>
    </b-card>

  </div>
</template>

<script>
import { db, storage } from "@/plugins/firebase";

export default {
  name: "Article",
  props: ["post", "card"],
  data() {
    return {
      user: {},
      imgPath: ""
    };
  },
  computed: {
    getArticlePath() {
      const article_id = this.$props.post.id;
      return "/articles/" + article_id + "/";
    }
  },
  created() {
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
  },
  firestore() {
    return {
      user: db()
        .collection("users")
        .doc(this.$props.post.uid)
    };
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
