export default function ({ $axios, redirect }) {

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  });

  $axios.onError((error) => {
    if (error.response.status === 404) {
      redirect({ name: '404' });
    }
  })
}
