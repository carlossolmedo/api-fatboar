<template>
  <div class="block-lists-admin">
    <table class="table-fluid table-list-users">
      <thead>
        <tr>
          <th>#</th>
          <th>Active</th>
          <th>Genre</th>
          <th>Nom</th>
          <th>Adresse mail</th>
          <th>Code postal</th>
          <th>Pays</th>
          <th>Date de création</th>
          <th>Dernière connexion</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="!loadingBlack">
        <tr v-for="(user, index) in users" :key="user._id">
          <th>{{ index + 1 }}</th>
          <td>{{ user.active | accountActive }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.postal_code }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.date_created | dateFr }}</td>
          <td>{{ user.last_connection | dateLastConnection }}</td>
          <td class="actions">
            <a v-if="user.active" @click="deactivateUser(user._id)" class="icon icon-red" title="désactiver">
              <trash-2-icon size="16" class=""></trash-2-icon>
            </a>
            <a v-if="!user.active" @click="activateUser(user._id)" class="icon icon-red" title="activer">
              <user-check-icon size="16"></user-check-icon>
            </a>
          </td>
        </tr>
      </tbody>
      <tbody v-if="loadingBlack">
        <tr>
          <td colspan="10">
            <Loader :loadingBlack="loadingBlack" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dates from '@/utils/dates';
  import {
    Edit2Icon,
    Trash2Icon,
    UserCheckIcon
  } from 'vue-feather-icons';

  export default {
    props: {
      users: Array
    },
    components: {
      Edit2Icon,
      Trash2Icon,
      UserCheckIcon
    },
    data: () => ({
      loadingBlack: false
    }),
    filters: {
      accountActive(account) {
        return account === true ? 'Oui' : 'Non'
      },
      dateFr(date) {
        if (!date) return ''
        date = dates.dateFormat(date);
        return date;
      },
      dateLastConnection(dateLastConnection) {
        if (!dateLastConnection) return ''
        dateLastConnection = dates.dateLastConnection(dateLastConnection);
        return dateLastConnection;
      }
    },
    methods: {
      async updateUser(userId, valueActive) {
        if (confirm('Voulez-vous faire cette operation ?')) {
          this.loadingBlack = true;
          await this.$axios.$put(`/users/${userId}`, {active: valueActive})
            .then(() => {
              setTimeout(() => {
                this.$nuxt.refresh();
                this.loadingBlack = false;
                this.$toast.success('Le compte a été desactivé avec succès').goAway(3000);
              }, 1000);
            }).catch(() => {
              this.loadingBlack = false;
              this.submitStatus = 'ERROR';
              this.$toast.error('Desactivation impossible').goAway(3000);
            });
        }
      },
      deactivateUser(userId) {
        this.updateUser(userId, false)
      },
      activateUser(userId) {
        this.updateUser(userId, true)
      }
    }
  }
</script>
