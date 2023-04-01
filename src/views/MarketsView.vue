<template>
  <h1>'음식점 목록'</h1>
  <div>
    <div class="container">
      <div class="card" v-for="market in markets" :key="market.id">
        <router-link
          :to="{
            name: 'market-details',
            params: { marketId: Number(market.id), marketName: market.name },
          }"
          >{{ market.name }}</router-link
        >

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
    const loadMarkets = async () => {
      try {
        const response = await MARKET_API.getMarkets(); // 백엔드 API 엔드포인트에 맞게 변경하세요.
        markets.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    // const goMarketDetails = async (marketId: number) => {

    // };

    onMounted(loadMarkets);

    return {
      markets,
      // goMarketDetails,
    };
  },
});
</script>

<style scoped lang="scss">
.market-view {
  margin: 20px;

  h1 {
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      margin-bottom: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;

      .market-link {
        color: #333;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: #e13131;
        }
      }

      .underline {
        display: block;
        margin-top: 10px;
        height: 2px;
        background-color: #e13131;
      }
    }
  }
}
</style>
