<template>
  <div>
    <h1 class="title-lobster">Tickets</h1>
    <h4 class="title-total-tickets">Total tickets : <span class="total-tickets">{{ totalTickets }}</span></h4>
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
            <button @click="generateTickets" class="c-btn c-btn--primary c-btn--block btn-size-default">Générer nouveaux tickets</button>
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
            <button @click="deleteTickets" class="c-btn c-btn--danger c-btn--block btn-size-default">
              <span v-if="!loading">Supprimer tous les tickets</span>
              <Loader :loading="loading" />
            </button>
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
    async asyncData({ $axios }) {
      const tickets = await $axios.$get(`/tickets/number`);
      return {
        totalTickets: tickets
      }
    },
    data: () => ({
      openPanelBigPrize: false,
      openPanelNewTickets: false,
      openPanelDeleteTickets: false,
      loading: false
    }),
    methods: {
      generateTickets() {
        if (this.totalTickets === 0) {
          this.openPanelNewTickets = !this.openPanelNewTickets;
        } else {
          alert("Veuillez effacer les tickets avant");
        }
      },
      async deleteTickets() {
        if (confirm('Voulez-vous supprimer tous les tickets')) {
          this.loading = true;
          await this.$axios.$delete(`/tickets/winning-tickets`)
          .then((resp) => {
            if (resp) {
              setTimeout(() => {
                this.$nuxt.refresh();
                this.loading = false;
                this.$toast.success('Tickets supprimé avec succès').goAway(3000);
              }, 1000)
            }
          }).catch((err) => {
            this.$toast.error('Suppression de tickets impossible').goAway(3000);
            console.error(err);
          });
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
