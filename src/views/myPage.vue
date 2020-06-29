<template>
  <div class="myPage">
    <!--メニュー-->
    <Menu></Menu>
    <b-container>
        <b-col cols="12" class="my-5">
          <h4>ユーザー情報</h4>
        </b-col>

        <b-col cols="12" class="mb-5">
          <div v-if="isLogin">
            <div>名前: {{ loginUser.displayName }}</div>
            <div>アイコン画像: <img :src="loginUser.photoURL" /></div>
          </div>
        </b-col>

        <b-col cols="12" class="mb-5">
          <!--削除ボタン-->
          <button @click="deleteUser" class="btn btn-primary mt-3">
            ユーザー削除
          </button>
        </b-col>
    </b-container>
  </div>
</template>

<script>
// Firebase Auth読み込み
import { auth } from "@/plugins/firebase";
import Menu from "@/components/Menu.vue";

export default {
  name: "MyPage",
  components: {
    Menu
  },
  data() {
    return {
      isLogin: false,
      loginUser: null
    };
  },
  mounted() {
    // ユーザー情報取得
    auth().onAuthStateChanged(user => {
      this.isLogin = true;
      this.loginUser = user;
    });
  },
  methods: {
    deleteUser: function() {
      // ユーザー削除処理
      auth()
        .currentUser.delete()
        .then(function(res) {
          console.log("currentUser.delete", res);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
