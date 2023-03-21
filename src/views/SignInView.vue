<template>
  <div class="login-container">
    <form>
      <div class="input-container">
        <input
          v-model="signInInput.username"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div class="input-container">
        <input
          v-model="signInInput.password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button class="button-primary" @click.prevent="signIn">로그인</button>
    </form>
    <div class="signup-link">
      <a href="/signup">회원가입을 아직 하지 않으셨나요?</a>
    </div>
  </div>
</template>

<script lang="ts">
import MEMBER_API from "@/common/axios/member";
import store from "@/store";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const signInInput = ref({
      username: "",
      password: "",
    });

    const errorMsg = ref("");
    const router = useRouter();
    // method

    const signIn = async () => {
      try {
        const { data } = await MEMBER_API.postSignIn(signInInput.value);
        store.dispatch("saveToken", {
          token: data,
          username: signInInput.value.username,
        });
        router.push("/");
      } catch (error) {
        errorMsg.value = "아이디 또는 비밀번호가 일치하지 않습니다만..";
        console.log(error);
      }
    };

    return {
      signInInput,
      errorMsg,
      signIn,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    .input-container {
      width: 80%;
      display: flex;
      flex-direction: column;

      input {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1.2rem;
        width: 100%;
      }
    }

    button {
      margin-top: 2rem;
      width: 50%;
      background-color: #0077c2;
      color: white;
      border-radius: 4px;
      cursor: pointer;
      padding: 1rem;
      font-size: 1.2rem;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #005fa7;
      }
    }
  }

  .signup-link {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
}
</style>
