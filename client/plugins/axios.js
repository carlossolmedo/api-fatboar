export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('CODE: ', code);
    if (code === 401) {
      redirect({name: 'privacy'})
    }
  });
}
