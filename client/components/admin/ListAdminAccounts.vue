<template>
  <div class="block-lists-admin">
    <table class="table-fluid table-list-admin">
      <thead>
        <tr>
          <th>#</th>
          <th>Rôle</th>
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
        <tr v-for="(adminUser, index) in adminUsers" :key="adminUser._id">
          <th>{{ index + 1 }}</th>
          <td>{{ adminUser.role }}</td>
          <td>{{ adminUser.gender }}</td>
          <td>{{ adminUser.username }}</td>
          <td>{{ adminUser.email }}</td>
          <td>{{ adminUser.postal_code }}</td>
          <td>{{ adminUser.country }}</td>
          <td>{{ adminUser.date_created }}</td>
          <td>{{ adminUser.last_connection }}</td>
          <td class="actions">
            <a class="icon icon-red" title="modifier"><edit-2-icon size="16" class=""></edit-2-icon></a>
            <a class="icon icon-red" title="supprimer"><trash-2-icon size="16" class=""></trash-2-icon></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Edit2Icon, Trash2Icon } from 'vue-feather-icons';

export default {
  props: {
    adminUsers: Array
  },
  components: {
    Edit2Icon,
    Trash2Icon
  }
}
</script>

<style>

</style>
