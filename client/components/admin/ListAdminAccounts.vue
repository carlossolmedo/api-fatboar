<template>
  <div class="block-list-users">
    <table class="table-fluid table-list-admin">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Adresse mail</th>
          <th>Rôle</th>
          <th>Date de création</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Carlos Olmedo</td>
          <td>carlos@fatboar.com</td>
          <td>Admin</td>
          <td>10/03/2021</td>
          <td class="actions">
            <a class="icon icon-red" title="modifier"><edit-2-icon size="16" class=""></edit-2-icon></a>
            <a class="icon icon-red" title="supprimer"><trash-2-icon size="16" class=""></trash-2-icon></a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div>
      {{ adminUsers }}
    </div> -->
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
