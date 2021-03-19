<template>
  <div>
    <h1 class="title-lobster">Tickets</h1>
    <p class="u-text-right"><strong>Total tickets : <span id="currentTickets">50</span></strong></p>
    <h3 class="subtitle">Operations</h3>
    <section class="c-container">
      <div class="c-row">
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <div class="block-btn-ops">
            <button @click="openPanelBigPrize = !openPanelBigPrize" class="c-btn c-btn--primary c-btn--block btn-size-default">Générer gagnant grand prix</button>
          </div>
        </div>
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <BigPrize v-if="openPanelBigPrize"/>
        </div>
      </div>
    </section>
    <section class="c-container">
      <div class="c-row">
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <div class="block-btn-ops">
            <button @click="openPanelNewTickets = !openPanelNewTickets" class="c-btn c-btn--primary c-btn--block btn-size-default">Générer nouveaux tickets</button>
          </div>
        </div>
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <NewTickets v-if="openPanelNewTickets"/>
        </div>
      </div>
    </section>
    <section class="c-container">
      <div class="c-row">
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <div class="block-btn-ops">
            <button @click="deleteTickets" class="c-btn c-btn--primary c-btn--block btn-size-default">Effacer tous les tickets</button>
          </div>
        </div>
        <div class="c-row c-row__col--1-1 c-row__col--md-1-2">
          <div v-if="openPanelDeleteTickets">
            50 tickets ont été supprimé
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BigPrize from '@/components/admin/BigPrize';
  import NewTickets from '@/components/admin/NewTickets';

  export default {
    layout: 'admin',
    head: {
      title: 'Tickets'
    },
    components: {
      BigPrize,
      NewTickets
    },
    data() {
      return {
        openPanelBigPrize: false,
        openPanelNewTickets: false,
        openPanelDeleteTickets: false
      }
    },
    methods: {
      deleteTickets() {
        if (confirm('Voulez-vous supprimer tous les tickets')) {
          this.openPanelDeleteTickets = true;
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin: 50px 0 50px 0;
  }

  section {
    margin-bottom: 3rem;
  }
</style>
