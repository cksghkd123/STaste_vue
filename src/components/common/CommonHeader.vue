<template>
  <div class="staste-header">
    <div class="top-banner">
      <span class="name">STaste</span>
      <button class="login-button">로그인</button>
    </div>
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
</style>
