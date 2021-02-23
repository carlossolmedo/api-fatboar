export default async function ({ $auth, redirect, store }) {
  // const isAuthenticated = store.state.auth.loggedIn;
  const isAuthenticated = $auth.$state.loggedIn;
  let user = $auth.user;

  // console.log('AUTH ', $auth);
  console.log('isAuthenticated ', isAuthenticated);
  console.log('USER ', user);

  // if (user && user.admin) {
  //   // let the user in
  // } else {
  //   store.dispatch('snackbar/setSnackbar', { color: 'error', text: "You must be an admin to view that page." })
  //   redirect('/')
  // }
}
