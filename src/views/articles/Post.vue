<template>
  <div class="post">
    <Menu></Menu>
    <h2>投稿画面</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <!-- 投稿名 -->
      <b-form-group id="input-group-1" label="投稿名" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          :state="titleState"
          type="text"
          required
          aria-describedby="input-live-feedback"
          placeholder="title"
        >
        </b-form-input>
        {{ form.title }}
        <b-form-invalid-feedback id="input-live-feedback">
          投稿名が空です。
        </b-form-invalid-feedback>
      </b-form-group>
      <!-- 本文 -->
      <b-form-group id="input-group-2" label="本文" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.body"
          rows="3"
          max-rows="10"
          placeholder="門仲の魅力を教えて..."
        >
        </b-form-textarea>
      </b-form-group>
      <!-- タグ -->
      <b-form-group id="input-group-3" label="タグ" label-for="input-3">
        <b-form-tags input-id="input-3" v-model="form.tags"> </b-form-tags>
      </b-form-group>
      <!-- 写真 -->
      <b-form-group id="input-group-4" label="画像" label-for="input-4">
        <b-form-file
          id="input-4"
          :state="Boolean(form.img)"
          placeholder="写真をアップロード"
          drop-placeholder="写真をドロップ"
          accept="image/*"
          v-model="form.img"
          browse-text="選択"
        >
          <div class="mt-3">
            ファイル名: {{ form.img ? form.img.name : "" }}
          </div>
        </b-form-file>
      </b-form-group>
      <!-- 投稿ボタン/リセットボタン -->
      <b-button class="mr-3" type="submit" variant="primary">Submit</b-button>
      <b-button class="mr-3" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import { auth } from "@/plugins/firebase";

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
        title: "",
        body: "",
        tags: ["お役立ち", "門仲駅周辺"],
        img: null
      },
      loginUser: null
    };
  },
  mounted() {
    auth().onAuthStateChanged(user => {
      this.loginUser = user;
    });
  },
  computed: {
    titleState() {
      const str = String(this.form.title);
      return str.length > 0 ? true : false;
    }
  },
  methods: {
    onSubmit(evt) {
      // 投稿内容登録
      // createdAt updatedAt uid filepath
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.title = "";
      this.form.body = "";
      this.form.tags = ["お役立ち", "門仲駅周辺"];
      this.form.img = null;
    }
  }
};
</script>

<style scoped></style>
