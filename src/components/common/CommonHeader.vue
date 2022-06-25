<template>
  <div class="header-wrapper">
    <span class="name">ㄴㄴㄴ</span>
    <div></div>
    <button class="login-button">로그인</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.header-wrapper {
  display: flex;
  /* 축정렬 */
  justify-content: space-between;
  /* 축수직방향 정렬 */
  align-items: center;
  height: 70px;
  background-color: blueviolet;
  padding: 0 20px;
}
.login-button {
  width: 100px;
  height: 36px;
  background: #abc234;
  color: blue;
  border: none;
  border-radius: 10px;
}
.login-button:hover {
  cursor: pointer;
  background-color: bisque;
}
.name {
  /* fontsize는 px말고 rem으로 해보자 */
  font-size: 1.5rem;
  color: aqua;
  font-weight: 700;
}
</style>
