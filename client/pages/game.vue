<template>
  <div>
    <div class="bg-purple"></div>
    <main class="content-game">
      <div class="block-game">
        <form @submit.prevent="submitGame" class="form-game">
          <span class="input">
            <input v-model.trim="$v.ticketNumber.$model" class="input-game" type="text" name="ticket-number"
              placeholder="256xxxxxxx" maxlength="10">
          </span>
          <div class="c-btn-play">
            <a class="btn-play" type="submit" :disabled="ticketNumberComplete">Jouer</a>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
  import {
    required,
    maxLength
  } from 'vuelidate/lib/validators';

  export default {
    middleware: 'auth',
    data() {
      return {
        ticketNumberComplete: true,
        ticketNumber: null
      }
    },
    validations: {
      ticketNumber: {
        required,
        maxLength: maxLength(10)
      }
    },
    methods: {
      submitGame() {
        console.log('submitGame launched');
        this.$v.touch();
        if (!this.$v.invalid) {
          this.ticketNumberComplete = true;
          setTimeout(() => {
            console.log('form send', this.ticketNumber);
          }, 2000)
        }
      }
    }
  }

</script>
