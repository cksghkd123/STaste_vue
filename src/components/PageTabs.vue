<template>
  <aside class="PageTabs_wrap">
    <nav class="PageTabs_container">
      <div @click="goPage('main')" class="PageTabs_label">
        <img src="@/assets/pagetab_home.png" alt="홈" class="PageTab_img" />
        <span class="PageTab_name">홈</span>
      </div>
      <div @click="goPage('mylist')" class="PageTabs_label">
        <img src="@/assets/pagetab_list.png" alt="찜" class="PageTab_img" />
        <span class="PageTab_name">찜</span>
      </div>
      <div @click="goPage('map')" class="PageTabs_label">
        <img src="@/assets/pagetab_map.png" alt="지도" class="PageTab_img" />
        <span class="PageTab_name">지도</span>
      </div>
      <a href="/mypage" class="PageTabs_label">
        <img src="@/assets/pagetab_me.png" alt="내정보" class="PageTab_img" />
        <span class="PageTab_name">내정보</span>
      </a>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goPage = (pagename: string) => {
      router.push({
        name: pagename,
      });
    };
    return {
      goPage,
    };
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
    :hover {
      cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    font-weight: 600;
    font-size: 1.2rem;
  }
  .PageTab_img {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
  }
  .PageTab_name {
    margin: 0 auto;
  }
}
a {
  color: black;
  text-decoration: none;
}
</style>
