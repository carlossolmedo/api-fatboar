export default function ({ $auth, redirect, route }) {
  const isAuthenticated = $auth.$state.loggedIn;
  const userRole = $auth.user.role;
  // console.log('isAuthenticated ', isAuthenticated);
  // console.log('userRole', userRole);
  if (!isAuthenticated) {
    redirect({name: 'index'});
  }

  if (userRole === 'customer') {
    if (route.name === 'index') {
      redirect({name: 'game'})
    }
  }
}

// route admin : admin-connection
//   const isAuthenticated = store.state.auth.user ? true : false;

  // if (user && user.admin) {
  //   // let the user in
  // } else {
  //   store.dispatch('snackbar/setSnackbar', { color: 'error', text: "You must be an admin to view that page." })
  //   redirect('/')
  // }
