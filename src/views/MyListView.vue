<template>
  <div>
    <input v-model="articleInput.title" type="text" />
    <textarea
      v-model="articleInput.content"
      placeholder="내용을 입력해주세요"
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <div class="button-box">
    <button @click="writeArticle" class="button-write">글쓰기</button>
  </div>
  <div class="container">
    <div class="card" v-for="article in articles" :key="article">
      <h3>{{ article.title }}</h3>
      <button @click="deleteArticle(article.id)">삭제</button>
      {{ index }}
      <span class="underline"></span>
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import ARTICLE_API from "@/common/axios/article";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const index = ref("");
    const articles = ref([]);
    const articleInput = ref({
      title: "",
      content: "",
    });

    // methods

    const writeArticle = async () => {
      try {
        const { data } = await ARTICLE_API.postArticle(articleInput.value);
        console.log(data);
        getArticles();
      } catch (error) {
        console.log(error);
      }
    };

    const deleteArticle = async (index: number) => {
      try {
        const { data } = await ARTICLE_API.deleteArticle(index);
        console.log(data);
        console.log(index);
        getArticles();
      } catch (error) {
        console.log(error);
      }
    };

    const getArticles = async () => {
      try {
        const { data } = await ARTICLE_API.getArticles();
        console.log(data);
        articles.value = data;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getArticles();
    });

    return {
      index,
      articleInput,
      articles,
      writeArticle,
      deleteArticle,
      getArticles,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  width: 320px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
}
.underline {
  background: black;
  width: 100%;
  height: 1px;
}
.button-box {
  display: flex;
  justify-content: flex-end;
}
.button-write {
  width: 110px;
  height: 50px;
  background: orange;
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 800;
}
.button-write:hover {
  cursor: pointer;
  background: rgba(255, 166, 0, 0.858);
}
</style>