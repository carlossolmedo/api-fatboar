<template>
  <div class="c-container">
    <h1 class="title-lobster">Mon compte</h1>
    <main class="content-settings">
      <Loader :loadingBlack="loading" />
      <div v-if="!accountDeleted">
        <div>
          <h4>Genre</h4>
          <label>
            <input @change="setGender($event.target.value)" type="radio" name="gender" value="M" autofocus="autofocus"
              class="c-form-control" :checked="user.gender === 'M'"> M.
          </label>
          <label>
            <input @change="setGender($event.target.value)" type="radio" name="gender" value="F" autofocus="autofocus"
              class="c-form-control" :checked="user.gender === 'F'"> Mme.
          </label>
        </div>
        <h4>Nom</h4>
        <p>{{user.username}}</p>
        <h4>Adresse mail</h4>
        <p>{{user.email}}</p>
        <h4 style="margin-bottom: 1rem;">Newsletter</h4>
        <p>
          <input :id="`${user.userId}`" @change="setNewsletter($event.target)" class="tgl tgl-success"
            :class="{'is-checked': user.newsletter}" :checked="user.newsletter" type="checkbox" />
          <label class="tgl-btn" :for="`${user.userId}`"></label>
        </p>
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
    async asyncData({ $axios, $auth }) {
      const user = await $axios.$get(`/users/${$auth.user.userId}`);
      return {
        user: user
      }
    },
    data() {
      return {
        accountDeleted: false,
        loading: false
      }
    },
    methods: {
      async setGender(gender) {
        await this.$axios.$put(`/users/${this.user._id}`, { gender: gender })
          .then(() => {
            this.$nuxt.refresh();
            this.$toast.success(`Mis à jour avec succès`).goAway(1000);
          }).catch((err) => {
            this.$toast.error(`Mis à jour avec impossible`).goAway(1500);
            console.error(err);
          });
      },
      async setNewsletter(el) {
        const userChoice = el.checked;
        const elInput = document.querySelector('.tgl-success');
        elInput.classList.add('is-checked');
        await this.$axios.$put(`/users/${this.user._id}`, {
            newsletter: userChoice
          })
          .then(() => {
            this.$toast.success(`Mis à jour avec succès`).goAway(1000);
          }).catch((err) => {
            this.$toast.error(`Mis à jour avec impossible`).goAway(1500);
            console.error(err);
          });
      },
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
