<template>
  <div class="post">
    <Menu></Menu>
    <h2>投稿画面</h2>
    <Form :new="true"></Form>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Form from "@/components/Form.vue";

// firestoreに投稿内容をアップロードする
// 写真はcloud storage利用する
export default {
  name: "Post",
  components: {
    Menu,
    Form
  }
};
</script>

<style scoped></style>
