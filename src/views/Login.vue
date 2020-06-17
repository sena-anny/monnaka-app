<template>
  <div>
    <h2>門仲会</h2>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import { auth } from "@/plugins/firebase";
import firebaseui from "firebaseui-ja";
import "firebaseui-ja/dist/firebaseui.css";

export default {
  name: "Login",
  data() {
    return {};
  },
  mounted() {
    // thisを格納
    const root = this;
    // 認証設定
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
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
