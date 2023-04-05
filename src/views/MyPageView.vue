<template>
  <div class="user-container">
    <div class="name">{{ username }}</div>
    <div class="review-count">리뷰 갯수: {{ reviewCount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import REVIEW_API from "@/common/axios/review";

export default defineComponent({
  setup() {
    const store = useStore();
    const username = computed(() => store.state.username);
    const reviewCount = ref(0);

    const getReviewCount = async () => {
      try {
        const { data } = await REVIEW_API.getReviewsByUser(username.value);
        reviewCount.value = data.length;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getReviewCount();
    });

    return {
      username,
      reviewCount,
    };
  },
});
</script>

<style scoped>
.user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
  padding: 30px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.review-count {
  font-size: 1.2rem;
  font-weight: 400;
}
</style>
