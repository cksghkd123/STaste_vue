<template>
  <head>
    <meta charset="UTF-8" />
    <title>로그인 페이지</title>
  </head>
  <body>
    <h1>로그인 페이지</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" /> <br />
      <input type="password" name="password" placeholder="Password" /> <br />
      <button>로그인</button>
    </form>
    <button @click="googleSignIn">구글 로그인</button>
    <a href="/signup">회원가입을 아직 하지 않으셨나요?</a>
  </body>
</template>

<script lang="ts">
import MEMBER_API from "@/common/axios/member";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const googleSignIn = async () => {
      try {
        const { data } = await MEMBER_API.oauth2SignIn();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      googleSignIn,
    };
  },
});
</script>
