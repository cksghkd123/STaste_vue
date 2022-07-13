<template>
  <div class="wrapper">
    <button>뭐먹지?</button>
    <img src="@/assets/main_tongue.jpg" alt="your tongue" />
  </div>
  <PageTabs />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTabs from "@/components/PageTabs.vue";

export default defineComponent({
  components: { PageTabs },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 20px;
  margin-top: 10px;
}

.go_recommand_button {
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
.go_recommand_button:hover {
  cursor: pointer;
  background-color: rgb(248, 71, 7);
}
</style>