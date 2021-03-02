<template>
  <div>
    <div class="bg-purple"></div>
    <main class="content-game">
      <LoaderGame :loading="loading" />
      <div v-if="!loading && !submitStatus" class="block-game">
        <h1 class="title-game">Entrez votre numéro de ticket</h1>
        <form id="formGame" @submit.prevent="submitGame" class="form-game">
          <span class="input">
            <input v-model.trim="$v.ticketNumber.$model" id="ticketNumber" class="input-game" type="text" name="ticketNumber"
              placeholder="256xxxxxxx" maxlength="10">
          </span>
          <div class="c-btn-play">
            <button class="btn-play" type="submit" :disabled="$v.ticketNumber.$invalid">Jouer</button>
          </div>
        </form>
      </div>
      <div v-if="submitStatus" class="ticket-winner">
        <h3>Vous avez gagné</h3>
        <h1>🎉 {{ prize }} ! 🎉</h1>
        <p>Merci d'avoir participé</p>
        <p>Rendez-vous chez votre restaurant préféré à bientôt 😋</p>
        <div class="c-btn-play" style="margin-top: 20px;">
          <button @click="restart" class="btn-restart">Rejouer</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import {
    required,
    maxLength,
    numeric
  } from 'vuelidate/lib/validators';
  import LoaderGame from '../components/LoaderGame';

  export default {
    middleware: 'auth',
    components: {
      LoaderGame
    },
    data() {
      return {
        ticketNumber: null,
        submitStatus: false,
        loading: false,
        prize: null
      }
    },
    validations: {
      ticketNumber: {
        required,
        numeric,
        maxLength: maxLength(10)
      }
    },
    methods: {
      restart() {
        this.loading = false;
        this.ticketNumber = '';
        this.submitStatus = false;
      },
      async submitGame() {
        this.loading = true;
        this.$v.$touch()
        if (!this.$v.$invalid) {
          await this.$axios.$post('/tickets/verify', {
            ticket_number: this.ticketNumber
          }).then((ticketWinner) => {
              setTimeout(() => {
                this.loading = false;
                this.submitStatus = true;
                this.prize = ticketWinner.type
              }, 3000)
          }).catch((error) => {
            if (error.response) {
              if (error.response.status === 404) {
                this.$toast.error("Le numéro de ticket n'existe pas").goAway(4000);
              }
              if (error.response.status === 401) {
                this.$toast.error("Numero de ticket déjà joué").goAway(4000);
              }
            } else {
              this.$toast.error("Vérifiez votre numéro de ticket").goAway(4000);
            }
            this.restart();
          });
        }
      }
    }
  }

</script>
