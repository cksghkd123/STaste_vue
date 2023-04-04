<template>
  <div class="title">'어디서 먹을까'</div>
  <div>
    <div class="container">
      <div class="card" v-for="market in markets" :key="market.id">
        <div
          class="image-wrapper"
          @click="
            $router.push({
              name: 'market-details',
              params: { marketId: Number(market.id) },
            })
          "
        >
          <img
            :src="require(`@/assets/markets/${market.id}.jpg`)"
            alt="Market Image"
          />
        </div>
        <div class="card-content">
          <div class="market-name">{{ market.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import MARKET_API from "@/common/axios/market";

export default defineComponent({
  setup() {
    const markets = ref([]);

    // method
    const loadMarkets = async () => {
      try {
        const response = await MARKET_API.getMarkets(); // 백엔드 API 엔드포인트에 맞게 변경하세요.
        markets.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(loadMarkets);

    return {
      markets,
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

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3 - 20px);
  height: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  .image-wrapper {
    width: 100%;
    height: 80%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-content {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 130%;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .card:hover {
    width: 100%;
    cursor: pointer;
  }
}
</style>