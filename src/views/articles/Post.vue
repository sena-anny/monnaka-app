<template>
  <div class="post">
    <Menu></Menu>
    <h2>投稿画面</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="投稿名"
        label-for="input-1"
        description="タイトルを入力してください"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="title"
        >
        </b-form-input>
      </b-form-group>
    </b-form>
    <!-- 本文 -->
    <!-- タグ -->
    <!-- 写真 -->
    <!-- 投稿ボタン -->
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

// firestoreに投稿内容をアップロードする
// 写真はgoogle storage利用する
export default {
  name: "Home",
  components: {
    Menu
  },
  data() {
    return {
      form: {
        title: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      // 投稿内容登録
      // createdAt updatedAt uid
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
    }
  }
};
</script>

<style lang="sass" scoped></style>
