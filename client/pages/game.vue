<template>
  <div>
    <div class="bg-purple"></div>
    <main class="content-game">
      <Loader :loading="loading" />
      <div v-if="!loading && !submitStatus" class="block-game">
        <h1 class="title-game">Entrez votre numéro de ticket</h1>
        <form @submit.prevent="submitGame" class="form-game">
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
        <h3>Vous avez gagnez</h3>
        <h1>{{ prize }} !</h1>
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
  import Loader from '../components/Loader';

  export default {
    middleware: 'auth',
    components: {
      Loader
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
              }, 2000)
          }).catch(() => {
            this.$toast.error("Vérifiez votre numero de ticket").goAway(3000);
          });
        }
      }
    }
  }

</script>
