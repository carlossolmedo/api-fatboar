export default function ({ $axios, redirect }) {
  // let user = JSON.parse(localStorage.getItem('api_logged'));
  // console.log('localStorage: ', user);

  // if (user && user.accessToken) {
  //   $axios.setHeader('Authorization', `JWT ${user.accessToken}`);
  // }

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log('CODE: ', code);
    if (code === 401) {
      redirect({name: 'index'})
    }
  });
}
