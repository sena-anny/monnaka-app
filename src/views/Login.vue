<template>
  <div>
    <h2>門仲会</h2>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import { auth, db } from "../plugins/firebase";
import firebaseui from "firebaseui-ja";
import "firebaseui-ja/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    registerUser(uid, displayName, photoURL) {
      console.log(uid, displayName, photoURL);
      let res = db()
        .collection("users")
        .doc(uid)
        .set({
          displayName: displayName,
          photoURL: photoURL
        });
      console.log(res);
    }
  },
  mounted() {
    // let res = this.registerUser("001","Hello","world");
    // console.log(res);
    // thisを格納
    const root = this;
    // 認証設定
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
          // 初回ログイン時にユーザー情報登録
          if (authResult.additionalUserInfo.isNewUser) {
            console.log("初回ログイン");
            // console.log(authResult.user.uid);
            // console.log(authResult.user.displayName);
            // console.log(authResult.user.photoURL);
            // root.registerUser("004","Hello","world");
          }
          // 認証種類判定
          if (authResult.additionalUserInfo.providerId === "google.com") {
            return true;
          } else {
            // 確認メールの有無
            const mailFlag = authResult.user.emailVerified;
            if (mailFlag === false) {
              // 確認メール未時に確認メール送信
              auth()
                .currentUser.sendEmailVerification()
                .then(function() {
                  alert("登録メールを送信しました。ご確認ください。");
                  // URLリロード
                  root.$router.go();
                });
            } else {
              // 確認メール済時にメイン画面へ移動
              return true;
            }
          }
        },
        uiShown: function() {
          document.getElementById("loader").style.display = "none";
        }
      },
      // 認証時に同一ウィンドウで表示
      signInFlow: "redirect",
      // ログイン後リダイレクト先
      signInSuccessUrl: "/",
      // 認証方法
      signInOptions: [
        auth.EmailAuthProvider.PROVIDER_ID,
        auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // 利用規約へリンク
      tosUrl: "https://monnaka-app.web.app/rules",
      // プライバシーポリシーリンク
      privacyPolicyUrl: "https://monnaka-app.web.app/privacy"
    };

    // 認証UI表示
    const ui = new firebaseui.auth.AuthUI(auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
}
</style>
