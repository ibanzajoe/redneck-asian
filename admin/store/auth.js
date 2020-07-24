import { setCookie, deleteCookie } from "~/lib/cookie-helpers";

export const state = () => ({
  loggedIn: false,
  user: null
});

export const mutations = {
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
  setUser(state, user) {
    state.user = user;
  }
};

export const getters = {
  user(state) {
    return state.user;
  },
  loggedIn(state) {
    return state.loggedIn
  }
};

export const actions = {
  login({ commit }, { email, password }) {
    return this.$axios.post('/auth/login', {email, password})
      .then(res => {
        const {accessToken, ...user} = res.data
        
        commit('setLoggedIn', true)
        commit('setUser', user);
        setCookie('access-token', accessToken);

        this.$axios.setToken(accessToken, "Bearer");

        return user
      });
  },
  register({commit}, {email, password}) {
    return this.$axios.post('/users', {email, password})
      .then(res => {
        console.log('this is the return on /register: ', res.data)
        return res.data
      })
  },
  logout({ commit }) {
    commit("setUser", null);
    deleteCookie("access-token");

    this.$axios.setToken(false);
    return;
  }
};
