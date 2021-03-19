<template>
  <transition name="fade" mode="in-out" appear>
    <div id="panelNewTickets" class="panel">
      <h3>Générer nouveaux tickets</h3>
      <div class="block-form-tickets">
        <form @submit.prevent="submit" class="connection">
          <dl>
            <dd>
              <input id="numberTickets" v-model="numberTickets" name="number_tickets" type="text" class="c-form-control-input" maxlength="3" size="3" placeholder="100">
            </dd>
          </dl>
          <div class="block-btn-submit">
            <button @click="submit" class="c-btn c-btn--primary" type="submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      numberTickets: null
    }
  },
  methods: {
    submit() {
      const formData = this.numberTickets;
      console.log('formData', formData);
    }
  }
}
</script>

<style>

</style>
