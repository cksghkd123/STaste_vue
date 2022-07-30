<template>
  <CommonHeader />
  <router-view />
  <CommonFooter />
  <PageTabs />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";
import PageTabs from "@/components/PageTabs.vue";

export default defineComponent({
  components: {
    PageTabs,
    CommonHeader,
    CommonFooter,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import "./common/css/index.css";
</style>
