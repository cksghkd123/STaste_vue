import { createStore } from 'vuex';

export default createStore({
  state: {
    token: '',
    username: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    resetUsername(state) {
      state.username = "";
    }
  },
  actions: {
    saveToken({ commit }, token) {
      localStorage.setItem('X-AUTH-TOKEN', token); // JWT 토큰을 localStorage에 저장
      commit('setToken', token);
    },
    removeToken({ commit }) {
      localStorage.removeItem('X-AUTH-TOKEN'); // localStorage에서 JWT 토큰 삭제
      commit('setToken', null);
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.token != null; // JWT 토큰이 있으면 로그인 상태
    }
  }
});
