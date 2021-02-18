export const state = () => ({
  user: null
});

export const getters = {
  isAuthenticated: state => !!state.user
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};
