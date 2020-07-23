<template>
  <div class="menu">
    <b-navbar toggleable="lg" type="light" variant="info" class="shadow-sm">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!--ユーザー表示-->
          <b-nav-item-dropdown text="設定" right>
            <!--ホームへ-->
            <b-dropdown-item class="dropdown-link-color" href="/">
              ホーム
            </b-dropdown-item>
            <!--マイページへ-->
            <b-dropdown-item class="dropdown-link-color" href="mypage">
              マイページ
            </b-dropdown-item>
            <!--ログイン画面へ-->
            <b-dropdown-item
              class="dropdown-link-color"
              href="#"
              @click="logout()"
            >
              ログアウト
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// Firebase読み込み
import { auth } from "@/plugins/firebase";

export default {
  name: "Menu",
  methods: {
    logout: function() {
      // ログアウト処理
      auth().signOut();
    }
  }
};
</script>

<style scoped>
.dropdown-link-color {
  color: #212529;
}
.dropdown-link-color:hover {
  text-decoration: none;
}
.link-color {
  color: rgba(255, 255, 255, 0.5);
}
.link-color:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
}
</style>
