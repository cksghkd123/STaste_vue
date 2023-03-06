<template>
  <head>
    <meta charset="UTF-8" />
    <title>로그인 페이지</title>
  </head>
  <body>
    <h1>로그인 페이지</h1>
    <form action="/login" method="POST">
      <input
        v-model="signInInput.username"
        type="text"
        name="username"
        placeholder="Username"
      />
      <br />
      <input
        v-model="signInInput.password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <br />
      <button @click="signIn">로그인</button>
    </form>
    <button @click="googleSignIn">구글 로그인</button>
    <a href="/signup">회원가입을 아직 하지 않으셨나요?</a>
  </body>
</template>

<script lang="ts">
import MEMBER_API from "@/common/axios/member";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const signInInput = ref({
      username: "",
      password: "",
    });

    // method

    const googleSignIn = async () => {
      try {
        const { data } = await MEMBER_API.oauth2SignIn();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      signInInput,
      googleSignIn,
    };
  },
});
</script>
