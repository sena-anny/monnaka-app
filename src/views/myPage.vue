<template>
  <div class="myPage">
    <!--メニュー-->
    <Menu></Menu>

    <b-container>
      <b-row>
        <b-col cols="12" offset="5" class="my-5">
          <h4>ユーザー情報</h4>
        </b-col>

        <b-col cols="12" offset="5" class="mb-5">
          <div v-if="isLogin">
            <div>name: {{ loginUser.displayName }}</div>
            <div>img: <img :src="loginUser.photoURL" /></div>
          </div>
        </b-col>

        <b-col cols="12" offset="5" class="mb-5">
          <!--削除ボタン-->
          <button @click="deleteUser" class="btn btn-primary mt-3">
            ユーザー削除
          </button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Firebase読み込み
import firebase from "firebase";
import Menu from "@/components/Menu.vue";

export default {
  name: "Main",
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
    firebase.auth().onAuthStateChanged(user => {
      this.isLogin = true;
      this.loginUser = user;
    });
  },
  methods: {
    deleteUser: function() {
      // ユーザー削除処理
      firebase
        .auth()
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

<style scoped></style>
