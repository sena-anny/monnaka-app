<template>
  <div>
    <img :src="this.imgPath" alt="" />
    <p>{{ post.image }}</p>
    <h2>{{ post.title }}</h2>
    <p>{{ post.updatedAt }}</p>
    <p>{{ post.createdAt }}</p>
    <p>{{ user.displayName }}</p>
    <p>{{ user.photoURL }}</p>
  </div>
</template>

<script>
import { db, storage } from "../plugins/firebase";

export default {
  name: "Article",
  props: ["post"],
  data() {
    return {
      user: {},
      imgPath: ""
    };
  },
  mounted() {
    const gsReference = storage().refFromURL(
      "gs://monnaka-app.appspot.com/GVmzBgAvXhq6RrmuhJoH/IMG_3735.JPG"
    );
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
