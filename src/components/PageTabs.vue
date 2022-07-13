<template>
  <aside class="PageTabs_wrap">
    <nav class="PageTabs_container">
      <span class="PageTabs_label">홈</span>
      <span class="PageTabs_label">찜</span>
      <span class="PageTabs_label">지도</span>
      <span class="PageTabs_label">내정보</span>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.PageTabs_wrap {
  background-color: aliceblue;
  height: 60px;
  padding: 0 20px;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  .PageTabs_container {
    height: 100%;
    width: 100%;
    max-width: 75rem;
    display: flex;
    margin: 0 auto;
  }
  .PageTabs_label {
    display: flex;
    justify-content: center;
    width: 25%;
    font-weight: 600;
    font-size: 1.2rem;
  }
}
</style>
