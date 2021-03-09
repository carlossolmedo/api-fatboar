<template>
  <div class="c-container">
    <main class="content-prizes">
      <h1 class="u-text-center title-lobster">Gagnants</h1>
      <div class="block-list">
        <table v-if="listTickets" class="table-fluid table-prizes">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket</th>
              <th>Prix</th>
              <th>Date</th>
              <th>Nom</th>
              <th>Adresse mail</th>
              <th>Récuperé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1234567890</td>
              <td>une entrée</td>
              <td>09/04/2021</td>
              <td>Carlos Test</td>
              <td>test@test.com</td>
              <td>
                <div class="switch-received">
                  <input class="tgl tgl-success" id="received" type="checkbox"/>
                  <label class="tgl-btn" for="received"></label>
                </div>
              </td>
            </tr>
            <!-- <tr v-for="(ticket, index) in tickets" :key="ticket.ticket_number">
              <th>{{ index + 1 }}</th>
              <td>{{ ticket.ticket_number }}</td>
              <td>{{ ticket.type }}</td>
              <td>{{ ticket.date_created | date }}</td>
              <td><span class="received" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span></td>
            </tr> -->
          </tbody>
        </table>
        <h3 v-if="!listTickets" class="u-text-center">Vous n'avez pas encore jouer</h3>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    layout: 'waiter',
    middleware: ['auth-waiter'],
    data() {
      return {
        listTickets: true
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
