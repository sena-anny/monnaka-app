<template>
  <div>
    <p>{{ post.image }}</p>
    <h2>{{ post.title }}</h2>
    <p>{{ post.createdAt }}</p>
    <p>{{ user.displayName }}</p>
    <p>{{ user.photoURL }}</p>
  </div>
</template>

<script>
import { db } from "../plugins/firebase";

export default {
  name: "Article",
  props: ["post"],
  data() {
    return {
      user: {}
    };
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
