<template>
  <div>
    <h1>{{ marketName }}</h1>
    <ul>
      <li v-for="(food, index) in foods" :key="index">{{ food.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import MARKET_API from "@/common/axios/market";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    marketId: {
      type: Number,
      required: true,
    },
  },

  setup() {
    const marketId = [];
    const marketName = ref("");
    const foods = ref([]);

    const getFoods = async (marketId: number) => {
      try {
        const { data } = await MARKET_API.getMarketFoods(marketId);
        foods.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(getFoods());

    return {
      marketName,
      foods,
      getFoods,
    };
  },
});
</script>
