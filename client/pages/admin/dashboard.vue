<template>
  <div>
    <h1 class="title-lobster">Statistiques</h1>
    <h1 class="u-text-right">
      <button @click="getStats">
        update
        <!-- <refresh-cw-icon size="1.5x" class="custom-class"></refresh-cw-icon> -->
      </button>
    </h1>
    <!-- Tickets -->
    <h2 class="title-section">Tickets</h2>
    <section class="c-row c-row--middle">
      <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
        <h3 class="title-stats">Tickets Joué</h3>
        <div class="graph">
          <div class="graph-round">
            <span>{{ ticketsTotal }}</span>
          </div>
        </div>
      </div>
      <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
        <h3 class="title-stats">Tickets Reçu</h3>
        <div class="graph">
          <div class="graph-round">
            <span>{{ ticketsReceived }}</span>
          </div>
        </div>
      </div>
      <div class="c-row__col c-row__col--1-1 c-row__col--md-1-3">
        <h3 class="title-stats">Total Participants</h3>
        <div class="graph">
          <div class="graph-round">
            <span>{{ totalParticipants }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="c-row c-row--middle">
      <div class="c-row__col c-row__col--1-1">
        <h3 class="title-stats">Pourcentage Gains</h3>
        <div class="graph">
          <div class="chart-dashboard">
            <GChart
              type="PieChart"
              :data="chartData"
              :options="chartOptions"
              :resizeDebounce="500"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { GChart } from "vue-google-charts";
  import { RefreshCwIcon } from 'vue-feather-icons';

  export default {
    layout: 'admin',
    head: {
      title: 'Dashboard'
    },
    componenets: {
      GChart,
      RefreshCwIcon
    },
    data() {
      return {
        ticketsTotal: null,
        ticketsReceived: null,
        totalParticipants: null,
        chartData: null,
        chartOptions: null
      }
    },
    methods: {
      async getStats() {
        this.ticketsTotal = await this.$axios.$get(`/tickets/total`);
        this.ticketsReceived = await this.$axios.$get(`/tickets/received`);
        this.totalParticipants = await this.$axios.$get(`/user/customers`);
        let ticketsByPercent = await this.$axios.$get(`/tickets/percent`);
        let chartData = [
          ["Prix", "Nombre de Gagnants"],
          ["Entrées", ticketsByPercent.starter],
          ["Desserts", ticketsByPercent.dessert],
          ["Burger", ticketsByPercent.burger],
          ["Menu du jour", ticketsByPercent.menu_day],
          ["Menu au choix", ticketsByPercent.menu_choice],
          ["70% Reductions", ticketsByPercent.discount]
        ];
        let chartOptions = {
          width: 650,
          height: 400
        };

        this.chartData = chartData;
        this.chartOptions = chartOptions;
        console.log('getStats');
      }
    },
    beforeMount() {
      this.getStats();
    }
  }
</script>

<style scoped>
section {
  margin-bottom: 4rem;
}
</style>
