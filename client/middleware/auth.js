export default function ({ store, redirect }) {
  const isAuthenticated = store.state.auth.user ? true : false;
  if (!isAuthenticated) {
    redirect({name: 'index'});
  }
  // route admin : admin-connection
}
