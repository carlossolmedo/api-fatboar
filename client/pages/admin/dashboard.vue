<template>
  <div>
    <h1 class="title-lobster">Statistiques</h1>
    <!-- Tickets -->
    <h2 class="title-section">Tickets</h2>
    <section class="c-row c-row--middle">
      <div class="c-row__col c-row__col--1-4">
        <h3 class="title-stats">Pourcentage Gains</h3>
        <div class="graph">
          <div class="graph-round">
            <span>10</span>
          </div>
        </div>
      </div>
      <div class="c-row__col c-row__col--1-4">
        <h3 class="title-stats">Tickets Joué</h3>
        <div class="graph">
          <div class="graph-round">
            <span>{{ ticketsTotal }}</span>
          </div>
        </div>
      </div>
      <div class="c-row__col c-row__col--1-4">
        <h3 class="title-stats">Tickets Reçu</h3>
        <div class="graph">
          <div class="graph-round">
            <span>7</span>
          </div>
        </div>
      </div>
      <div class="c-row__col c-row__col--1-4">
        <h3 class="title-stats">Total Participants</h3>
        <div class="graph">
          <div class="graph-round">
            <span>30</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Users -->
    <h2 class="title-section">Participants</h2>
    <section class="c-row c-row--middle">
      <div class="block-list-users">
        <table v-if="listUsers" class="table-fluid table-users">
          <thead>
            <tr>
              <th>#</th>
              <th>Genre</th>
              <th>Nom</th>
              <th>Adresse mail</th>
              <th>Date de creation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>M</td>
              <td>Andres Olmedo</td>
              <td>andres@fatboar.com</td>
              <td>10/04/2021</td>
            </tr>
            <!-- <tr v-for="(ticket, index) in ticketsWinners" :key="ticket.ticket_number">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.user_id.username }}</td>
              <td>{{ ticket.user_id.email }}</td>
              <td>{{ ticket.date_created | date }}</td>
              <td id="receivedField">
                <span :id="`received-${index+1}`" @click="setReceived(ticket.ticket_number, `received-${index+1}`)" class="received-waiter" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span>
              </td>
            </tr> -->
          </tbody>
        </table>
        <h3 v-if="!listUsers" class="u-text-center">Pas des utilisateurs inscritent actuellement</h3>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    head: {
      title: 'Dashboard'
    },
    async asyncData({ $axios }) {
      const ticketsTotal = await $axios.$get(`/tickets/total`);
      return {
        ticketsTotal: ticketsTotal
      }
    },
    data() {
      return {
        listUsers: true
      }
    },
  }

</script>

<style scoped>
section {
  margin-bottom: 5rem;
}
</style>
