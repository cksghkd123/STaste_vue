<template>
  <aside class="PageTabs_wrap">
    <nav class="PageTabs_container">
      <div @click="goPage('main')" class="PageTabs_label">
        <img src="@/assets/pagetab_home.png" alt="홈" class="PageTab_img" />
        <span class="PageTab_name">홈</span>
      </div>
      <div @click="goPage('markets')" class="PageTabs_label">
        <img src="@/assets/pagetab_map.png" alt="찾기" class="PageTab_img" />
        <span class="PageTab_name">찾기</span>
      </div>
      <div @click="goPageIfLoggedIn('mylist')" class="PageTabs_label">
        <img src="@/assets/pagetab_list.png" alt="내리뷰" class="PageTab_img" />
        <span class="PageTab_name">내리뷰</span>
      </div>
      <a @click="goPageIfLoggedIn('mypage')" class="PageTabs_label">
        <img src="@/assets/pagetab_me.png" alt="내정보" class="PageTab_img" />
        <span class="PageTab_name">내정보</span>
      </a>
    </nav>
  </aside>
</template>

<script lang="ts">
import store from "@/store";
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

    const goPageIfLoggedIn = (page: string) => {
      if (store.getters.isLoggedIn) {
        goPage(page);
      } else {
        goPage("signIn");
      }
    };
    return {
      goPage,
      goPageIfLoggedIn,
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
