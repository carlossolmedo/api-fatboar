export default function ({ store, route }) {
  let currentRoute = route.name === 'index' ? route.name : '';
  store.commit('setClass', currentRoute);
};
