<template>
  <div v-if="!gdprStorage" class="banner-gdpr">
    <p class="c-gdpr-message">
      Nous utilisons des cookies pour activer certaines fonctionnalités, obtenir des statistiques et assurer la meilleure expérience possible sur notre site Web (voir notre <a href="/privacy">politique de confidentialité</a>). En poursuivant votre exploration de notre site Web sans modifier les paramètres, vous acceptez l'utilisation de ces cookies.
    </p>
    <button @click="cookieValidate" class="c-btn btn-warning">Valider</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gdprStorage: false
    }
  },
  mounted() {
    this.gdprStorage = localStorage.getItem('gdpr') ? true : false;
  },
  methods: {
    cookieValidate() {
      localStorage.setItem('gdpr', true);
      this.gdprStorage = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner-gdpr {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    bottom: 0;
    padding: 1rem;
    color: #fff;
    background-color: #333;
  }
  .c-gdpr-message {
    width: 90%;

    & > a {
      color: #0a58ca;
    }
  }
  .btn-warning {
    color: #111;
    background-color: #f7bc06;
    opacity: 1;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
</style>
