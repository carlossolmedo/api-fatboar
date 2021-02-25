export default function ({ store, route }) {
  let currentRoute = '';

  switch(route.name) {
    case 'index':
      currentRoute = 'index';
      break;
    case 'game':
      currentRoute = 'game';
      break;
    default:
      currentRoute = '';
      break;
  }

  store.commit('setClass', currentRoute);
};
