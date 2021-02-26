export default function ({ $auth, redirect, route }) {
  if (!$auth.loggedIn) {
    console.log('plugin auth');
    return
  }

  if ($auth.loggedIn && $auth.user.role !== 'admin') {
    if (route.name === 'admin-connection') {
      console.log('redirect to game 2');

      redirect('/game');
    }
  }
  const username = $auth.user.username;
  const role = $auth.user.role;
  console.log(`user: ${username} | role: ${role}`);
  console.log('AUTH ', $auth);

  // if ($auth.user.role !== 'admin' && route.name === 'admin-connection') {
  //   console.log('redirect to game');
  //   redirect({name: 'game'})
  // }
}
