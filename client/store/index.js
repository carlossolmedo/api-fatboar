export const state = () => ({
  cookie: false,
  bodyClass: ''
});

export const mutations = {
  cookieDone(state) {
    state.cookie = !state.cookie;
  },
  setClass(state, bodyClass) {
    state.bodyClass = bodyClass
  }
};
