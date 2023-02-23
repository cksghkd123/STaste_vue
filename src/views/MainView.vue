<template>
  <div @click="goPage('recommend')" class="wrapper">
    <button class="go_recommend_button">뭐먹지?</button>
    <img src="@/assets/main_tongue.jpg" alt="your tongue" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goPage = (pagename: string) => {
      router.push({
        name: pagename,
      });
    };
    return {
      goPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.go_recommend_button {
  width: 50%;
  background-color: coral;
  border-radius: 5px;
  border: 3px double black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5em 0.5em;
  margin: 20px 0;
  line-height: 2rem;
  text-align: center;
}
.go_recommend_button:hover {
  cursor: pointer;
  background-color: rgb(248, 71, 7);
}
</style>