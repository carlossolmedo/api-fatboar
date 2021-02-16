export const state = () => ({
  cookie: false,
  bodyClass: '',
  authenticated: false
});

export const mutations = {
  cookieDone(state) {
    state.cookie = !state.cookie;
  },
  setClass(state, bodyClass) {
    state.bodyClass = bodyClass
  },
  userLogged(state) {
    state.authenticated = !state.authenticated;
  }
};
