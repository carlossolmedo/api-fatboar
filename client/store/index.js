export const state = () => ({
  cookie: false,
  bodyClass: ''
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};

export const mutations = {
  cookieDone(state) {
    state.cookie = !state.cookie;
  },
  setClass(state, bodyClass) {
    state.bodyClass = bodyClass
  }
};
