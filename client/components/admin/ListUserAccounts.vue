<template>
  <div class="block-lists-admin">
    <table class="table-fluid table-list-users">
      <thead>
        <tr>
          <th>#</th>
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
      <tbody>
        <tr v-for="(user, index) in users" :key="user._id">
          <th>{{ index + 1 }}</th>
          <td>{{ user.gender }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.postal_code }}</td>
          <td>{{ user.country }}</td>
          <td>{{ user.date_created | dateFr }}</td>
          <td>{{ user.last_connection | dateLastConnection }}</td>
          <td class="actions">
            <a class="icon icon-red" title="désactiver"><trash-2-icon size="16" class=""></trash-2-icon></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dates from '@/utils/dates';
import { Edit2Icon, Trash2Icon } from 'vue-feather-icons';

export default {
  props: {
    users: Array
  },
  components: {
    Edit2Icon,
    Trash2Icon
  },
  filters: {
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
  }
}
</script>

<style>

</style>
