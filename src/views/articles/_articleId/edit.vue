<template>
  <div></div>
</template>

<script>
// 記事編集
export default {
  name: "artileEdit",
  data() {
    return {
      id: null
    };
  },
  mounted() {
    const articleId = this.$route.params["articleId"];
    this.id = articleId;
  }
};
</script>

<style lang="sass" scoped></style>
