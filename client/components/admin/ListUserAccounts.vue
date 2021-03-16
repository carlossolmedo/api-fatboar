<template>
  <div class="block-list-users">
    <table class="table-fluid table-list-users">
      <thead>
        <tr>
          <th>#</th>
          <th>Genre</th>
          <th>Nom</th>
          <th>Adresse mail</th>
          <th>Date de création</th>
          <th>Récuperer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>M</td>
          <td>Carlos Olmedo</td>
          <td>carlos@fatboar.com</td>
          <td>10/03/2021</td>
          <td><span class="received" :class="{'success': ticket.received, 'not-yet': !ticket.received}"></span></td>
          <td class="actions">
            <a class="icon icon-red" title="désactiver"><trash-2-icon size="16" class=""></trash-2-icon></a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div>
      {{ users }}
    </div> -->
  </div>
</template>

<script>
import { Edit2Icon, Trash2Icon } from 'vue-feather-icons';

export default {
  props: {
    users: Array
  },
  components: {
    Edit2Icon,
    Trash2Icon
  },
  data() {
    return {
      ticket: {
        received: false
      }
    }
  }
}
</script>

<style>

</style>
