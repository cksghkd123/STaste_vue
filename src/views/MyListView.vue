<template>
  <div class="review-container" v-for="(review, index) in reviews" :key="index">
    <div class="review-namebox">{{ review.foodName }}</div>
    <div class="sticker-list">
      <div
        class="sticker-card"
        v-for="(sticker, index) in review.stickerList"
        :key="index"
      >
        <img
          :src="require(`@/assets/stickers/${sticker.id}.jpg`)"
          alt="Sticker"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import REVIEW_API from "@/common/axios/review";
import store from "@/store";
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const username = computed(() => store.state.username);
    const index = ref("");
    const reviews = ref([]);

    // methods

    const deleteReview = async (username: string, index: number) => {
      try {
        const { data } = await REVIEW_API.deleteReview(username, index);
        console.log(data);
        console.log(index);
      } catch (error) {
        console.log(error);
      }
    };

    const getReviews = async (username: string | null) => {
      if (!username) {
        console.error("Username is null.");
        return;
      }
      try {
        const { data } = await REVIEW_API.getReviewsByUser(username);
        reviews.value = data;
        console.log(username);
        console.log(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getReviews(username.value);
    });

    return {
      username,
      index,
      reviews,
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
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
  background-color: #f5f5f5;
}

.review-namebox {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.sticker-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.sticker-card {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
}

img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
</style>