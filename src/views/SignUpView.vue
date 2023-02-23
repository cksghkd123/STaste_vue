<template>
  로그인
  <h1>회원가입 페이지</h1>
  <h1>회원가입 페이지</h1>
  <form>
    <input
      v-model="signUpInput.username"
      type="text"
      name="username"
      placeholder="Username"
    />
    <br />
    <input
      v-model="signUpInput.password"
      type="password"
      name="password"
      placeholder="Password"
    />
    <br />
    <input
      v-model="signUpInput.email"
      type="email"
      name="email"
      placeholder="Email"
    />
    <br />
    <button @click="signUp">회원가입</button>
  </form>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import MEMBER_API from "@/common/axios/member";

export default defineComponent({
  setup() {
    const signUpInput = ref({
      username: "",
      password: "",
      email: "",
    });

    // methods

    const signUp = async () => {
      try {
        const { data } = await MEMBER_API.postSignup(signUpInput.value);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      signUpInput,
      signUp,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
