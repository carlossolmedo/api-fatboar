<template>
  <div class="c-container">
    <h1 class="title-lobster">Mon compte</h1>
    <main class="content-settings">
      <Loader :loadingBlack="loading" />
      <div v-if="!accountDeleted">
        <h4>Nom</h4>
        <p>{{$auth.user.username}}</p>
        <h4>Adresse mail</h4>
        <p>{{$auth.user.email}}</p>
        <div class="block-delete-account">
          <h3>Supprimer mon compte</h3>
          <div class="block-btn-delete">
            <button @click="deleteAccount" class="c-btn c-btn--danger c-btn--block">Supprimer</button>
          </div>
        </div>
      </div>
      <div v-if="accountDeleted" class="u-text-center">
        <h3>Nous sommes désolé de vous voir partir :(</h3>
        <h3>Vous allez être déconnecté à bientôt !</h3>
      </div>
    </main>
  </div>
</template>

<script>
import Loader from '~/components/Loader';

export default {
  head: {
    title: 'Mon compte'
  },
  components: {
    Loader
  },
  data() {
    return {
      accountDeleted: false,
      loading: false
    }
  },
  methods: {
    async deleteAccount() {
      const message = "Voulez-vous supprimer votre compte ?";
      if (confirm(message)) {
        this.loading = true;
        await this.$axios.$delete(`/users/${this.$auth.user.userId}`)
        .then((userDeleted) => {
          if (userDeleted) {
            this.loading = false;
            this.$toast.success(`Votre compte a été supprimé avec succès`).goAway(5000);
            this.accountDeleted = true;
            setTimeout(() => {
              this.$auth.logout();
            }, 5000);
          }
        }).catch(() => {
          this.$toast.error(`Votre compte n'a pas été supprimé`).goAway(3000);
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
</style>
