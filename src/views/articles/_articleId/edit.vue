<template>
  <div class="articleEdit">
    <Menu></Menu>
    <h2>投稿編集画面</h2>
    <Form :articleId="this.$route.params.articleId" :new="false"></Form>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Form from "@/components/Form.vue";

// 記事編集
export default {
  name: "artileEdit",
  components: {
    Menu,
    Form
  }
};
</script>

<style lang="sass" scoped></style>
