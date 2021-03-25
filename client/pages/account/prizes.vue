<template>
  <div class="c-container">
    <h1 class="u-text-center title-lobster">Mes gains</h1>
    <main class="content-prizes">
      <div class="block-list">
        <table v-if="ticketsPlayed" class="table table-prizes">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket</th>
              <th>Prix</th>
              <th>Date</th>
              <th>Récuperé</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ticket, index) in tickets" :key="ticket.ticket_number">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.date_created | dateFr }}</td>
              <td><span class="received" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span></td>
            </tr>
          </tbody>
        </table>
        <h3 v-if="!ticketsPlayed" class="u-text-center">Vous n'avez pas encore jouer</h3>
      </div>
    </main>
  </div>
</template>

<script>
import dates from '@/utils/dates';

export default {
  head: {
    title: 'Mes gains'
  },
  async asyncData({ $axios, $auth }) {
    const tickets = await $axios.$get(`/users/${$auth.user.userId}/tickets`);
    return {
      tickets: tickets
    }
  },
  filters: {
    dateFr(date) {
      if (!date) return ''
      return dates.dateFormat(date);
    }
  },
  computed: {
    ticketsPlayed() {
      return this.tickets.length === 0 ? false : true
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }
</style>
