export default async function ({$auth, $toast, redirect}) {
  const user = $auth.state.user;
  const message = "Vous n'êtes pas autorisé";

  if (user) {
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
