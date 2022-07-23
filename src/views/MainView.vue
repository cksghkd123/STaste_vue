<template>
  <div class="wrapper">
    <button class="go_recommend_button">뭐먹지?</button>
    <img src="@/assets/main_tongue.jpg" alt="your tongue" />
  </div>
  <div>
    <button @click="getArticles">아티클 가져오기!</button>
    <p>{{ articles }}</p>
  </div>
  <PageTabs />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PageTabs from "@/components/PageTabs.vue";
import ARTICLE_API from "@/common/axios/article";

export default defineComponent({
  components: { PageTabs },
  setup() {
    const articles = ref([]);
    const getArticles = async () => {
      const { data } = await ARTICLE_API.getArticles();
      console.log(data);
      articles.value = data;
    };
    return {
      getArticles,
      articles,
    };
  },
});
</script>

<style lang="scss" scoped>
.go_recommend_button {
  width: 50%;
  background-color: coral;
  border-radius: 5px;
  border: 3px double black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5em 0.5em;
  margin: 20px 0;
  line-height: 2rem;
  text-align: center;
}
.go_recommend_button:hover {
  cursor: pointer;
  background-color: rgb(248, 71, 7);
}
</style>