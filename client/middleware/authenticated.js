export default function ({ store, route, redirect }) {
  if (!store.state.authenticated) {
    return redirect('/');
    // console.log('redirection: ', route);
  }
}
