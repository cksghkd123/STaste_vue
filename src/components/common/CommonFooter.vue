<template>
  <div class="footer">
    <div class="company-info">
      <p>
        <strong>Taste State! </strong>
        <br />
        1111 S Figueroa St, Los Angeles, CA 90015 미국
        <span class="bar">|</span>
        대표 : 르브론 제임스
        <span class="bar">|</span>
        전화번호 : 010-2851-8995
      </p>
    </div>
    <div class="catch-phrase">
      <p>
        뭐 먹을래<br />
        난 아무거나 상관없음<br />
        뭐 먹을래<br />
        난 아무거나 상관없음<br />
        뭐 먹을래<br />
        난 아무거나 상관없음<br />
        뭐 먹을래<br />
        난 아무거나 상관없음<br />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>


<style lang="scss" scoped>
.footer {
  width: 80%;
  margin: 0 auto;
  font-size: 12px;
  color: #d9d9d9;
  position: relative;
  padding-top: 120px;
  padding-bottom: 60px;

  .company-info strong {
    display: inline-block;
    font-size: 20px;
    color: black;
    padding: 5px 0 10px;
  }
  .catch-phrase {
    max-width: 100%;
    color: #989898;
    line-height: 1.5;
    margin: 0 auto;
  }
}

.bar {
  color: #d9d9d9;
  display: inline-block;
  vertical-align: middle;
  content: " | ";
  height: 100%;
  padding: 0 5px;
}
</style>