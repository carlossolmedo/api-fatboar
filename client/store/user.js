export const state = () => ({
  email: null
});

export const getters = {
  isAuthenticated: state => !!state.user
};

export const mutations = {
  setUser(state, email) {
    state.email = email;
  }
};
