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
            <tr v-for="(ticket, index) in tickets">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.date_created }}</td>
              <td>{{ ticket.received }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $auth }) {
    const tickets = await $axios.$get(`/users/${$auth.user.userId}/tickets`);
    return {
      tickets: tickets
    }
  }
}
</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }

</style>
