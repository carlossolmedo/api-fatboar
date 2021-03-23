<template>
  <transition name="fade" mode="in-out" appear>
    <div id="panelNewTickets" class="panel">
      <h3>Générer nouveaux tickets</h3>
      <div class="block-number-tickets">
        <form v-if="!loading" @submit.prevent="submitNewTickets" class="connection">
          <dl>
            <dd>
              <input id="numberTickets" v-model="numberTickets" name="number_tickets" type="text" class="c-form-control-input" maxlength="3" size="3" placeholder="100">
            </dd>
          </dl>
          <dl>
            <small v-if="numberTickets < 10" class="error">Nombre minimum de tickets 10</small>
          </dl>
          <div class="block-btn-submit">
            <button :disabled="numberTickets < 10" class="c-btn c-btn--primary" type="submit">Valider</button>
          </div>
        </form>
        <div v-if="loading">
          <Loader :loadingBlack="loading" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    numberTickets: ''
  }),
  methods: {
    async submitNewTickets() {
      this.loading = true;
      await this.$axios.$get(`/tickets/winning-tickets/generate/${this.numberTickets}`)
      .then(() => {
        setTimeout(() => {
          this.$nuxt.refresh();
          this.loading = false;
          this.$toast.success('Tickets généré avec succès').goAway(3000);
          document.getElementById('panelNewTickets').style.display = 'none';
        }, 1000);
      }).catch((err) => {
        this.$toast.error('Creation de tickets impossible').goAway(3000);
        console.error(err);
      });
    }
  }
}
</script>
