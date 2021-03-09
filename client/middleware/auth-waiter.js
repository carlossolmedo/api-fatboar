export default async function ({ $auth, $toast, redirect }) {
  const user = $auth.user;

  if (user && $auth.loggedIn) {
    if (user.role === 'customer') {
      $toast.error(message).goAway(1500);
      redirect({ name: 'game' });
    }
  }
}
