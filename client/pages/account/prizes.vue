<template>
  <div class="c-container">
    <h1 class="u-text-center">Mes gains</h1>
    <main class="content-prizes">
      <div class="block-list">
        <table class="table table-prizes">
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
              <td>{{ ticket.date_created | date }}</td>
              <td><span class="received" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat';

export default {
  async asyncData({ $axios, $auth }) {
    const tickets = await $axios.$get(`/users/${$auth.user.userId}/tickets`);
    return {
      tickets: tickets
    }
  },
  filters: {
    date(date) {
      if (!date) return ''
      date = dateFormat(date);
      return date;
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }
  .received {
    display: block;
    height: 20px;
    width: 20px;
    margin: auto;
    border-radius: 999rem;
  }
  .success {
    background-color: #43A047;
  }
  .not-yet {
    background-color: #ddd;
  }

</style>
