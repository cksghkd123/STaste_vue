<template>
  <div class="wrapper">
    <img src="@/assets/main_tongue.jpg" alt="your tongue" />
    <div v-if="username != null">
      <div class="ability_container">
        <div class="ability_box">
          <div class="ability">매운맛!!</div>
          <div class="gauge">
            <div
              :style="{ width: `${userAbility.hackLevel * 10}%` }"
              class="bar"
            ></div>
          </div>
        </div>
        <div class="ability_box">
          <div class="ability">마라맛!!</div>
          <div class="gauge">
            <div
              :style="{ width: `${userAbility.maraLevel * 10}%` }"
              class="bar"
            ></div>
          </div>
        </div>
        <div class="ability_box">
          <div class="ability">쏘는맛!!</div>
          <div class="gauge">
            <div
              :style="{ width: `${userAbility.tokLevel * 10}%` }"
              class="bar"
            ></div>
          </div>
        </div>
        <div class="ability_box">
          <div class="ability">달콤맛!!</div>
          <div class="gauge">
            <div
              :style="{ width: `${userAbility.sweetLevel * 10}%` }"
              class="bar"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no-login">로그인 해보세요!</div>
  </div>
</template>

<script lang="ts">
import MEMBER_API from "@/common/axios/member";
import store from "@/store";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const username = computed(() => store.state.username);
    const userAbility = ref([]);

    // method

    const goPage = (pagename: string) => {
      router.push({
        name: pagename,
      });
    };

    const getUserAbility = async (username: string | null) => {
      if (!username) {
        console.log("not logged in");
        return;
      }
      try {
        const { data } = await MEMBER_API.getUserAbility(username);
        userAbility.value = data;
        console.log(data);
        console.log(userAbility);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getUserAbility(username.value);
    });
    return {
      userAbility,
      goPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  padding: 20px 0;
}

.ability_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.ability_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 20px;
}

.ability {
  margin-right: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.gauge {
  width: 70%;
  height: 20px;
  background-color: #eee;
  border-radius: 5px;
}

.bar {
  height: 20px;
  background-color: #c02757;
  border-radius: 5px;
}

.no-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
