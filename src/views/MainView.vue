<template>
  <div class="wrapper">
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
img {
  padding: 20px 0;
}
</style>