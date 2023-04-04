<template>
  <div class="signup-container">
    <form>
      <div class="form-group">
        <label>Username</label>
        <input
          v-model="signUpInput.username"
          type="text"
          name="username"
          placeholder="Username"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model="signUpInput.password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          v-model="signUpInput.email"
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <button @click.prevent="signUp">회원가입</button>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import MEMBER_API from "@/common/axios/member";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const signUpInput = ref({
      username: "",
      password: "",
      email: "",
    });

    const router = useRouter();

    // methods

    const signUp = async () => {
      try {
        const { data } = await MEMBER_API.postSignUp(signUpInput.value);
        console.log(data);
        alert("가입되었습니다~~");
        router.go(-1);
      } catch (error) {
        console.log(error);
      }
    };

    const temp = async () => {
      try {
        console.log(signUpInput);
      } catch (error) {
        console.log(error);
      }
    };

    return {
      signUpInput,
      signUp,
      temp,
    };
  },
});
</script>


<style lang="scss" scoped>
.signup-container {
  border: 1px solid rgb(221, 38, 74);
  padding: 70px;
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-weight: bold;
    color: rgb(221, 38, 74);
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(221, 38, 74);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: rgb(221, 38, 74);
  }
}
</style>