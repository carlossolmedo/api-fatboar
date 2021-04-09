export default async function ({$auth, $toast, redirect}) {
  const user = $auth.user;
  const message = "Vous n'êtes pas autorisé";

  if (user && $auth.loggedIn) {
    switch (user.role) {
      case 'customer':
        $toast.error(message).goAway(1500)
        redirect({ name: 'game' })
        break;
      case 'waiter':
        $toast.error(message).goAway(1500)
        redirect({ name: 'admin-winners' })
        break;
      default:
        break;
    }
  }
}
