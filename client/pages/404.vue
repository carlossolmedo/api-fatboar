<template>
  <div class="c-404">
    <div class="content">
      <img class="img-logo-fatboar" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
      <h1>404</h1>
      <h2>Désolé, page non trouvée</h2><br />
      <a class="c-btn c-btn--primary" href="/">Retourner vers la page d'accueil</a>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: '404',
    middleware: ['auth'],
    auth: false
  }

</script>

<style scoped>
  .c-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .content {
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }

  .img-logo-fatboar {
    height: 50px;
    width: 50px;
    margin-bottom: 1.5rem;
    background-color: #332879;
    border-radius: 999rem;
  }

</style>
