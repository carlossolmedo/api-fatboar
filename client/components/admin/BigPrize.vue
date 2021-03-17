<template>
  <transition name="fade" mode="in-out" appear>
    <div id="panelBigPrize" class="panel">
      <h3>Générer gagnant grand prix</h3>
      <div class="block-img-logo">
        <img class="img-logo-prize" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
      </div>
      <div class="block-btn-submit">
        <button @click="submit" class="c-btn c-btn--primary" type="button">Valider</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    methods: {
      submit() {
        const panel = document.getElementById('panelBigPrize');
      }
    }
  }

</script>

<style>

</style>
