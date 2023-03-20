<template>
  <div class="review-container">
    <div class="input-box">
      <input v-model="reviewInput.title" type="text" class="input-title" />
      <textarea
        v-model="reviewInput.content"
        placeholder="내용을 입력해주세요"
        class="input-content"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="button-box">
      <button @click="writeReview" class="button-write">글쓰기</button>
    </div>
    <div class="container">
      <div class="card" v-for="(review, index) in reviews" :key="index">
        <h3>{{ review.title }}</h3>
        <button @click="deleteReview(review.id)" class="button-delete">
          삭제
        </button>
        <span class="underline"></span>
        <p>{{ review.content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import REVIEW_API from "@/common/axios/review";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const index = ref("");
    const reviews = ref([]);
    const reviewInput = ref({
      title: "",
      content: "",
    });

    // methods

    const writeReview = async () => {
      try {
        console.log("흠..");
        const { data } = await REVIEW_API.postReview(reviewInput.value);
        console.log("오잉..!!", data);
        getReviews();
      } catch (error) {
        console.log(error);
      }
    };

    const deleteReview = async (index: number) => {
      try {
        const { data } = await REVIEW_API.deleteReview(index);
        console.log(data);
        console.log(index);
        getReviews();
      } catch (error) {
        console.log(error);
      }
    };

    const getReviews = async () => {
      try {
        const { data } = await REVIEW_API.getReviews();
        console.log(data);
        reviews.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getReviews();
    });

    return {
      index,
      reviewInput,
      reviews,
      writeReview,
      deleteReview,
      getReviews,
    };
  },
});
</script>

<style lang="scss" scoped>
.review-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.input-box {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
  }
}

.button-write {
  background-color: #00bcd4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}
</style>