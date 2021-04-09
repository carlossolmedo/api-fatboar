<template>
  <div class="c-container">
    <main class="content-winners">
      <h1 class="u-text-center title-lobster">Gagnants</h1>
      <div class="block-list">
        <div class="search">
          <form id="formSearch">
            <input type="search" name="query" v-model="searchQuery" class="c-form-control" id="searchQuery" placeholder="Recherchez nom client">
          </form>
        </div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in filteredTickets" :key="ticket.ticket_number">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.user_id.username }}</td>
              <td>{{ ticket.user_id.email }}</td>
              <td>{{ ticket.date_created | dateFr }}</td>
              <td>
                <span :id="`received-${index+1}`" class="received" :class="{'success': ticket.received}"></span>
              </td>
              <td class="actions">
                <a class="icon icon-red" :id="`received-${index+1}`" @click="setReceived(ticket.ticket_number, `received-${index+1}`)" title="modifier"><edit-2-icon size="16" class=""></edit-2-icon></a>
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
  import dates from '@/utils/dates';
  import { Edit2Icon } from 'vue-feather-icons';

  export default {
    layout: 'waiter',
    middleware: ['auth-waiter'],
    head: {
      title: 'Gagnants'
    },
    components: {
      Edit2Icon
    },
    async asyncData({ $axios }) {
      const tickets = await $axios.$get(`/tickets/winners`);
      return {
        ticketsWinners: tickets
      }
    },
    filters: {
      dateFr(date) {
        if (!date) return ''
        return dates.dateFormat(date);
      }
    },
    data: () => ({
      searchQuery: '',
      btnReceivedChecked: false
    }),
    computed: {
      listTickets() {
        return this.ticketsWinners.length === 0 ? false : true
      },
      filteredTickets() {
        const filterSearch = this.searchQuery.toLowerCase();
        let tickets = this.ticketsWinners;

        if (filterSearch) {
          tickets = tickets.filter((row) => {
            return String(row['user_id'].username).toLowerCase().indexOf(filterSearch) > -1;
          })
        }
        return tickets;
      }
    },
    methods: {
      async setReceived(ticketNumber, elementId) {
        if (confirm('Voulez-vous modifier ce champ?')) {
          let elReceived = document.getElementById(elementId);
          let stateClassSuccess = elReceived.classList.contains('success');
          let valueReceived = null;

          if (stateClassSuccess) {
            elReceived.classList.remove('success');
            valueReceived = false;
          } else {
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
