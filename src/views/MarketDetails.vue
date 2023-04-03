<template>
  <div class="market-details">
    <div>{{ marketName }}의 메뉴판</div>
    <div class="food-container">
      <div v-for="(food, index) in menu" :key="index">
        <h3>{{ food.name }}</h3>
        <p>{{ food.explanation ? food.explanation : "" }}</p>
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
      // eslint-disable-next-line vue/no-dupe-keys
      menu,
      marketName,
    };
  },
});
</script>

<style scoped lang="scss">
.market-details {
  margin: 20px;
  .food-container {
    display: flex;
    flex-wrap: wrap;
    .food-item {
      margin: 10px;
      padding: 10px;
      border: 1px solid #e13131;
      border-radius: 5px;
      h3 {
        margin: 0 0 10px 0;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
