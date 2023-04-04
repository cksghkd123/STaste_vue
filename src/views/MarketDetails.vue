<template>
  <div class="market-details">
    <div class="title">{{ marketName }}의 메뉴판</div>
    <div class="food-container">
      <div class="food-card" v-for="(food, index) in menu" :key="index">
        <img :src="require(`@/assets/foods/${food.id}.jpg`)" alt="Food Image" />
        <h3>{{ food.name }}</h3>
        <p>{{ food.explanation ? food.explanation : "" }}</p>
        <button
          @click="
            $router.push({
              name: 'write-review',
              params: { foodId: Number(food.id) },
            })
          "
        >
          스티커 남기기
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import MARKET_API from "@/common/axios/market";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const marketName = ref("");
    const menu = ref([]);

    //method
    const getMenu = async () => {
      const marketId = Number(route.params.marketId);

      try {
        const { data } = await MARKET_API.getMarketDetails(marketId);
        console.log(data);
        menu.value = data.menu;
        marketName.value = data.marketName;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(getMenu);

    return {
      menu,
      marketName,
    };
  },
});
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin-top: 50px;
  margin-bottom: 50px;
}

.market-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
}

.food-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 2 - 20px); // 가로로 3개씩 나열하려면 이 값을 조절하세요.
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: rgba(
    255,
    192,
    203,
    0.8
  ); // 연분홍색 투명도 높은 카드 배경색
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); // 그림자 효과 추가

  .card-image {
    width: 100px; // 이미지 크기 고정
    height: 100px;
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 50%; // 이미지 모서리를 둥글게 처리
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-content {
    text-align: center;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
</style>
