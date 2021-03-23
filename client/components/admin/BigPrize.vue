<template>
  <transition name="fade" mode="in-out" appear>
    <div id="panelBigPrize" class="panel">
      <h3>Générer gagnant grand prix</h3>
      <div v-if="!loading" class="block-img-logo">
        <img class="img-logo-prize" :class="{'spin-logo': spinLogo}" src="~/assets/images/logo-fatboar.svg" alt="logo FatBoar">
      </div>
      <div v-if="loading" class="winner">
        <h2 class="title-winner">🎊 {{ winner.username }} 🎊</h2>
        <h3>{{ winner.email }}</h3>
        <h4>Prix : Range Rover Evoque</h4>
      </div>
      <div class="block-btn-submit">
        <button @click="getWinner" class="c-btn c-btn--primary" type="button">Valider</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      spinLogo: false,
      winner: {
        username: '',
        email: ''
      }
    }),
    methods: {
      async getWinner() {
        this.loading = false;
        this.spinLogo = true;
        await this.$axios.$get(`/user/big-prize`)
        .then((user) => {
          this.winner = {
            username: user[0].username,
            email: user[0].email
          }
          setTimeout(() => {
            this.spinLogo = false;
            this.loading = true;
          }, 1000)
        }).catch((err) => {
          console.error(err);
          this.$toast.error('Impossible de trouver le gagnant').goAway(3000);
        });
      }
    }
  }

</script>

<style>

</style>
