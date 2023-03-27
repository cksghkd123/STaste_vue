<template>
  <h1>'음식점 목록'</h1>
  <div>
    <div class="container">
      <div class="card" v-for="(market, index) in markets" :key="index">
        <div @click="goMarketDetails(market.id)">{{ market.name }}</div>
        <span class="underline"></span>
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
    const fetchStores = async () => {
      try {
        const response = await MARKET_API.getMarkets(); // 백엔드 API 엔드포인트에 맞게 변경하세요.
        markets.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    const goMarketDetails = async (marketId: number) => {
      try {
        MARKET_API.getMarket(marketId);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(fetchStores);

    return {
      markets,
      goMarketDetails,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
