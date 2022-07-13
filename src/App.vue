<template>
  <CommonHeader />
  <router-view />
  <CommonFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";

export default defineComponent({
  components: {
    CommonHeader,
    CommonFooter,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
</style>
