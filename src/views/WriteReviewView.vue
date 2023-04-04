<template>
  <div class="review-container">
    <div class="input-box">
      <div v-for="(input, index) in inputs" :key="input.id">
        <img
          @click="removeSticker(index)"
          :src="require(`@/assets/stickers/${input.id}.jpg`)"
          alt="Sticker"
        />
      </div>
    </div>
    <div class="sticker-container">
      <div
        class="sticker-card"
        v-for="(sticker, index) in stickers"
        :key="index"
      >
        <img
          @click="addSticker(index)"
          :src="require(`@/assets/stickers/${sticker.id}.jpg`)"
          alt="Sticker"
        />
      </div>
    </div>

    <div class="button-box">
      <button @click="writeReview" class="button-write">완료!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import STICKER_API from "@/common/axios/sticker";
import { useRoute } from "vue-router";
import REVIEW_API from "@/common/axios/review";
import { Sticker } from "@/common/types/interface";
import store from "@/store";

export default defineComponent({
  setup() {
    const route = useRoute();
    const foodId = Number(route.params.foodId);
    const inputs = ref<Sticker[]>([]);
    const stickers = ref<Sticker[]>([]);

    // method

    const getStickers = async () => {
      try {
        const { data } = await STICKER_API.getstickers();
        console.log(data);
        stickers.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    const addSticker = async (index: number) => {
      try {
        const selectedSticker = stickers.value[index];
        if (
          !inputs.value.some((sticker) => sticker.id === selectedSticker.id)
        ) {
          inputs.value.push(selectedSticker);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const removeSticker = (index: number) => {
      inputs.value.splice(index, 1);
    };

    const writeReview = async () => {
      try {
        const username = store.state.username;
        if (username) {
          await REVIEW_API.postReview(username, foodId, inputs.value);
          alert("리뷰 완료! > <");
        } else {
          alert("로그인을 안한건가...??ㄷㄷ");
        }
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getStickers();
    });

    return {
      inputs,
      stickers,
      addSticker,
      removeSticker,
      writeReview,
    };
  },
});
</script>


<style lang="scss" scoped>
.review-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.input-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100px;
  border: 2px solid #000;
  padding: 20px;
  margin: 20px;
  justify-content: center;
}

.sticker-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sticker-card {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.button-box {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button-write {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  background-color: #b3526a;
  color: #fff;
  border: 2px solid rgb(221, 38, 74);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #650632;
  }
}
</style>
