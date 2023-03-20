<template>
  <div class="staste-header">
    <div class="top-banner">
      <span class="name">STaste</span>
      <template v-if="isLoggedIn">
        <span> {{ username }}님 환영합니다! </span>
        <button class="logout-button" @click="logout">로그아웃</button>
      </template>
      <template v-else>
        <a href="/signin" class="login-button">로그인</a>
      </template>
    </div>
  </div>
  <div @click="pp">dddcdddccd</div>
</template>


<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();

    let isLoggedIn = ref(store.getters.isLoggedIn);
    const username = store.state.username;

    //method
    const pp = () => {
      console.log(isLoggedIn);
      console.log(store.state.username);
      console.log(store.state.token);
    };

    const logout = async () => {
      try {
        store.dispatch("removeToken");
        store.commit("resetUsername", "");
        console.log("제거완료..");
        isLoggedIn = store.getters.isLoggedIn;
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      isLoggedIn,
      username,
      logout,
      pp,
    };
  },
});
</script>

<style scoped>
.staste-header {
  width: 80%;
  margin: 0 auto;
}
.top-banner {
  display: flex;
  /* 축정렬 */
  justify-content: space-between;
  /* 축수직방향 정렬 */
  align-items: center;
  height: 70px;
  background-color: crimson;
  padding: 0 20px;
}
.login-button {
  width: 100px;
  height: 36px;
  background: crimson;
  color: white;
  border: 10cm;
  border-radius: 10px;
  border-color: white;
  font-size: 1rem;
  font-weight: 500;
}
.login-button:hover {
  cursor: pointer;
  background-color: rgb(221, 38, 74);
}
.name {
  /* fontsize는 px말고 rem으로 해보자 */
  font-size: 1.7rem;
  color: aliceblue;
  font-weight: 700;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
}
</style>
