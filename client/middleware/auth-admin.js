export default function ({ $auth, redirect, store }) {
  let user = $auth.user;
  // let userRole = $auth.user.role;

  console.log('AUTH ', $auth.$state);
  // if (user && userRole === 'admin') {
  //   // let the user in
  // } else {
  //   console.log('redirect auth-admin');
  //   // store.dispatch('snackbar/setSnackbar', { color: 'error', text: "You must be an admin to view that page." })
  //   redirect('/')
  // }
}
