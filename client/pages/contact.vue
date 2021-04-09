<template>
  <div class="c-contact">
    <div class="content">
      <img class="img-logo-fatboar" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
      <h1>Contact</h1>
      <h2>Avez-vous des questions ?</h2>
      <h3>N'hesitez pas à nous contacter</h3>
      <br />
      <h3>
        <a href="mailto:contact@fatboar.com?subject=Questions">contact@fatboar.com</a>
      </h3>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    auth: false,
    layout: 'home',
    head: {
      title: 'Contact'
    }
  }

</script>

<style scoped>
  .c-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  .content {
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .img-logo-fatboar {
    height: 50px;
    width: 50px;
    margin-bottom: 1.5rem;
    background-color: #332879;
    border-radius: 999rem;
  }
</style>
