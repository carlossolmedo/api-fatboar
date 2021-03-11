<template>
  <div class="c-404">
    <h1>404</h1>
    <p>
      <a href="/">Retourner vers la page d'accueil</a>
    </p>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: false
}
</script>

<style scoped>
  .c-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
