export default function ({redirect, route }) {
  if (!route.matched.length) {
    redirect({name: '404'});
  }
}
