<template>
  <div class="c-container">
    <main class="content-winners">
      <h1 class="u-text-center title-lobster">Gagnants</h1>
      <div class="block-list">
        <table v-if="listTickets" class="table-fluid table-prizes">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket</th>
              <th>Prix</th>
              <th>Nom</th>
              <th>Adresse mail</th>
              <th>Date</th>
              <th>Récuperé</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in ticketsWinners" :key="ticket.ticket_number">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.user_id.username }}</td>
              <td>{{ ticket.user_id.email }}</td>
              <td>{{ ticket.date_created | date }}</td>
              <td id="receivedField">
                <span :id="`received-${index+1}`" @click="setReceived(ticket.ticket_number, `received-${index+1}`)" class="received-waiter" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 v-if="!listTickets" class="u-text-center">Pas de tickets joué actuellement</h3>
      </div>
    </main>
  </div>
</template>

<script>
  import dateFormat from '../../utils/dateFormat';

  export default {
    layout: 'waiter',
    middleware: ['auth-waiter'],
    head: {
      title: 'Gagnants'
    },
    async asyncData({ $axios }) {
      const tickets = await $axios.$get(`/tickets/winners`);
      return {
        ticketsWinners: tickets
      }
    },
    filters: {
      date(date) {
        if (!date) return ''
        date = dateFormat(date);
        return date;
      }
    },
    data() {
      return {
        btnReceivedChecked: false
      }
    },
    computed: {
      listTickets() {
        return this.ticketsWinners.length === 0 ? false : true
      }
    },
    methods: {
      async setReceived(ticketNumber, elementId) {
        if (confirm('Voulez-vous modifier ce champ?')) {
          let elReceived = document.getElementById(elementId);
          let stateClassSuccess = elReceived.classList.contains('success');
          let stateClassNot = elReceived.classList.contains('not-yet');
          let valueReceived = null;

          if (stateClassSuccess) {
            elReceived.classList.remove('success');
            elReceived.classList.add('not-yet');
            valueReceived = false;
          }

          if (stateClassNot) {
            elReceived.classList.remove('not-yet');
            elReceived.classList.add('success');
            valueReceived = true;
          }

          if (valueReceived !== null) {
            await this.$axios.$put('/tickets/winners', {
              ticket_number: ticketNumber,
              received: valueReceived
            });
          }
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }
  .switch-received {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
